import { NextRequest, NextResponse } from "next/server";
import { setSubmissionStatus } from "@/lib/googleSheets";

// Protected by middleware.ts (Basic Auth on /admin and /api/admin).
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ rowIndex: string }> },
) {
  const { rowIndex: rowIndexParam } = await params;
  const rowIndex = Number(rowIndexParam);
  if (!Number.isInteger(rowIndex) || rowIndex < 2) {
    return NextResponse.json({ error: "Invalid rowIndex" }, { status: 400 });
  }

  const body = await request.json().catch(() => null);
  const status = body?.status;

  if (status !== "Approved" && status !== "Denied" && status !== "Pending") {
    return NextResponse.json(
      { error: "status must be 'Approved', 'Denied', or 'Pending'" },
      { status: 400 },
    );
  }

  try {
    await setSubmissionStatus(rowIndex, status);
    return NextResponse.json({ rowIndex, status });
  } catch (error) {
    console.error("Failed to update submission status:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to update submission",
      },
      { status: 500 },
    );
  }
}
