import { google } from "googleapis";

// ---------------------------------------------------------------------------
// Setup required:
// 1. Create a Google Cloud service account, enable the Sheets API.
// 2. Share your submissions Sheet with the service account's email
//    (Editor access) — the same Sheet your Form writes responses into.
// 3. Set these env vars:
//      GOOGLE_SERVICE_ACCOUNT_EMAIL
//      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY   (escape newlines as \n)
//      SPRINT_SHEET_ID                      (the Sheet's ID from its URL)
//      SPRINT_SHEET_TAB=Form Responses 1    (or your tab name)
// ---------------------------------------------------------------------------

const SHEET_ID = process.env.SPRINT_SHEET_ID!;
const SHEET_TAB = process.env.SPRINT_SHEET_TAB || "Form Responses 1";

function assertConfigured() {
  const missing = [
    !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && "GOOGLE_SERVICE_ACCOUNT_EMAIL",
    !process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY && "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY",
    !process.env.SPRINT_SHEET_ID && "SPRINT_SHEET_ID",
  ].filter(Boolean);

  if (missing.length > 0) {
    throw new Error(
      `Google Sheets is not configured — missing env var(s): ${missing.join(", ")}`,
    );
  }
}

// Sheet column layout (0-indexed from column A), matching the real Google
// Form. Update these indices if the Form's questions are reordered or new
// ones are inserted before these columns.
//   A: Timestamp
//   B: Your Name
//   C: Contact Email
//   D: GitHub Handle
//   E: Repository URL
//   F: primary tech stack / language
//   G: project description
//   H: has CONTRIBUTING.md?
//   I: has osn-sprint-26 topic?
//   J: Maintainer Agreements
//   K: status — added manually, see setup docs; blank = "pending"
const COL = {
  timestamp: 0,
  email: 2,
  repo_url: 4,
  status: 10,
} as const;

export interface Submission {
  rowIndex: number; // 1-based row number on the sheet, incl. header row — used to target updates
  timestamp: string;
  email: string;
  repo_url: string;
  full_name: string | null; // parsed "owner/repo" from repo_url
  status: "pending" | "approved" | "denied";
}

function getAuthedClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

function parseFullName(repoUrl: string): string | null {
  const match = repoUrl?.match(/github\.com\/([^/\s]+\/[^/\s]+?)(\.git)?\/?$/i);
  return match ? match[1] : null;
}

function rowToSubmission(row: string[], rowIndex: number): Submission {
  const get = (i: number) => row[i] ?? "";
  const status = (get(COL.status) || "pending").toLowerCase();
  return {
    rowIndex,
    timestamp: get(COL.timestamp),
    email: get(COL.email),
    repo_url: get(COL.repo_url),
    full_name: parseFullName(get(COL.repo_url)),
    status: status === "approved" || status === "denied" ? status : "pending",
  };
}

/** Reads every submission row from the sheet (header row excluded). */
export async function getAllSubmissions(): Promise<Submission[]> {
  assertConfigured();
  const sheets = getAuthedClient();
  const range = `${SHEET_TAB}!A2:K`; // A2 skips the header row; extend column letter if you add columns

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range,
  });

  const rows = res.data.values || [];
  // rowIndex is 1-based and offset by the header row, so data row 1 is sheet row 2
  return rows.map((row, i) => rowToSubmission(row, i + 2));
}

export async function getPendingSubmissions(): Promise<Submission[]> {
  const all = await getAllSubmissions();
  return all.filter((s) => s.status === "pending");
}

export async function getApprovedSubmissions(): Promise<Submission[]> {
  const all = await getAllSubmissions();
  return all.filter((s) => s.status === "approved");
}

/** Updates the status cell for a single row. rowIndex is the sheet row number (from Submission.rowIndex). */
export async function setSubmissionStatus(
  rowIndex: number,
  status: "approved" | "denied" | "pending",
): Promise<void> {
  assertConfigured();
  const sheets = getAuthedClient();
  const statusColumnLetter = "K"; // must match COL.status above

  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `${SHEET_TAB}!${statusColumnLetter}${rowIndex}`,
    valueInputOption: "RAW",
    requestBody: {
      values: [[status]],
    },
  });
}
