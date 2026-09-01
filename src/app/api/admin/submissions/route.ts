import { NextResponse } from "next/server";
import { getAllSubmissions } from "@/lib/googleSheets";

// Protected by middleware.ts (Basic Auth on /admin and /api/admin).
export async function GET() {
  try {
    const submissions = await getAllSubmissions();
    // Newest first, and pending submissions surfaced ahead of already-decided ones
    const sorted = submissions.sort((a, b) => {
      if (a.status === "Pending" && b.status !== "Pending") return -1;
      if (a.status !== "Pending" && b.status === "Pending") return 1;
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
    return NextResponse.json({ submissions: sorted });
  } catch (error) {
    console.error("Failed to load submissions:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to load submissions",
      },
      { status: 500 },
    );
  }
}
