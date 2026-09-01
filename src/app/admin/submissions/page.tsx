"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface Submission {
  rowIndex: number;
  timestamp: string;
  email: string;
  repo_url: string;
  full_name: string | null;
  status: "Pending" | "Approved" | "Denied";
}

function formatDate(timestamp: string): string {
  if (!timestamp) return "—";
  const date = new Date(timestamp);
  return Number.isNaN(date.getTime()) ? timestamp : date.toLocaleDateString();
}

export default function SubmissionsAdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Tracks rowIndexes currently being updated, so their buttons can show a pending state
  const [updating, setUpdating] = useState<Set<number>>(new Set());
  // Guards against an older, slower `load()` call overwriting a newer one
  const loadSeq = useRef(0);

  const load = useCallback(async () => {
    const seq = ++loadSeq.current;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/submissions");
      const data = await res.json().catch(() => null);
      if (seq !== loadSeq.current) return; // a newer load() has since started

      if (!res.ok) {
        throw new Error(data?.error || `Request failed: ${res.status}`);
      }
      setSubmissions(Array.isArray(data?.submissions) ? data.submissions : []);
    } catch (err) {
      if (seq !== loadSeq.current) return;
      setError(
        err instanceof Error ? err.message : "Couldn't load submissions.",
      );
    } finally {
      if (seq === loadSeq.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function updateStatus(rowIndex: number, status: "Approved" | "Denied") {
    setUpdating((prev) => new Set(prev).add(rowIndex));
    try {
      const res = await fetch(`/api/admin/submissions/${rowIndex}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error || `Update failed: ${res.status}`);
      }

      // Optimistically reflect the change without a full reload
      setSubmissions((prev) =>
        prev.map((s) => (s.rowIndex === rowIndex ? { ...s, status } : s)),
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? `Row ${rowIndex}: ${err.message}`
          : `Failed to update row ${rowIndex}.`,
      );
      // Local state may now disagree with the sheet — resync from the source of truth
      // rather than leaving this row's displayed status ambiguous.
      load();
    } finally {
      setUpdating((prev) => {
        const next = new Set(prev);
        next.delete(rowIndex);
        return next;
      });
    }
  }

  const pending = submissions.filter((s) => s.status === "Pending");
  const decided = submissions.filter((s) => s.status !== "Pending");

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "2rem 1rem",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "0.25rem" }}>
        Sprint 26 — Repo Submissions
      </h1>
      <p style={{ color: "#666", marginBottom: "1.5rem" }}>
        Approving a submission is what allows it to reach the public board —
        approval happens here first; the automated CONTRIBUTING.md /
        tagged-issue checks run afterward on approved repos only.
      </p>

      {error && (
        <div
          role="alert"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            background: "#fee",
            border: "1px solid #f99",
            padding: "0.75rem",
            borderRadius: 6,
            marginBottom: "1rem",
          }}
        >
          <span>{error}</span>
          <button onClick={() => load()} style={buttonStyle("#333")}>
            Retry
          </button>
        </div>
      )}

      {loading ? (
        <p>Loading submissions…</p>
      ) : (
        <>
          <Section title={`Pending (${pending.length})`}>
            {pending.length === 0 ? (
              <p style={{ color: "#888" }}>Nothing waiting on review.</p>
            ) : (
              pending.map((s) => (
                <SubmissionRow
                  key={s.rowIndex}
                  submission={s}
                  isUpdating={updating.has(s.rowIndex)}
                  onApprove={() => updateStatus(s.rowIndex, "Approved")}
                  onDeny={() => updateStatus(s.rowIndex, "Denied")}
                />
              ))
            )}
          </Section>

          <Section title={`Decided (${decided.length})`}>
            {decided.map((s) => (
              <SubmissionRow
                key={s.rowIndex}
                submission={s}
                isUpdating={updating.has(s.rowIndex)}
                onApprove={() => updateStatus(s.rowIndex, "Approved")}
                onDeny={() => updateStatus(s.rowIndex, "Denied")}
              />
            ))}
          </Section>
        </>
      )}
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {children}
      </div>
    </section>
  );
}

function SubmissionRow({
  submission,
  isUpdating,
  onApprove,
  onDeny,
}: {
  submission: Submission;
  isUpdating: boolean;
  onApprove: () => void;
  onDeny: () => void;
}) {
  const statusColors: Record<Submission["status"], string> = {
    Pending: "#B58900",
    Approved: "#2e7d32",
    Denied: "#C62828",
  };

  const isUrlShaped = /^https?:\/\//i.test(submission.repo_url || "");
  const linkHref = submission.full_name
    ? `https://github.com/${submission.full_name}`
    : isUrlShaped
      ? submission.repo_url
      : undefined;
  const linkLabel =
    submission.full_name || submission.repo_url || "(no repo URL submitted)";
  const showRawUrl = submission.repo_url && submission.repo_url !== linkLabel;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: "0.75rem 1rem",
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {linkHref ? (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1a5fb4", textDecoration: "none" }}
            >
              {linkLabel}
            </a>
          ) : (
            <span>{linkLabel}</span>
          )}
          {!submission.full_name && (
            <span
              title="repo_url did not parse as a github.com/owner/repo URL"
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#8a5300",
                background: "#fff3cd",
                border: "1px solid #ffe08a",
                borderRadius: 999,
                padding: "0.1rem 0.5rem",
                flexShrink: 0,
              }}
            >
              ⚠ unparseable
            </span>
          )}
        </div>
        {showRawUrl && (
          <div
            style={{
              fontSize: "0.78rem",
              color: "#999",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            submitted: {submission.repo_url}
          </div>
        )}
        <div style={{ fontSize: "0.85rem", color: "#666" }}>
          #{submission.rowIndex - 1} · {submission.email || "(no email)"} ·{" "}
          {formatDate(submission.timestamp)} ·{" "}
          <span
            style={{ color: statusColors[submission.status], fontWeight: 600 }}
          >
            {submission.status}
          </span>
        </div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
        <button
          onClick={onApprove}
          disabled={isUpdating || submission.status === "Approved"}
          style={buttonStyle("#2e7d32")}
        >
          Approve
        </button>
        <button
          onClick={onDeny}
          disabled={isUpdating || submission.status === "Denied"}
          style={buttonStyle("#c62828")}
        >
          Deny
        </button>
      </div>
    </div>
  );
}

function buttonStyle(color: string): React.CSSProperties {
  return {
    background: color,
    color: "white",
    border: "none",
    borderRadius: 6,
    padding: "0.4rem 0.9rem",
    cursor: "pointer",
    opacity: 1,
    fontSize: "0.9rem",
  };
}
