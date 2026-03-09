import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // Handle feedback submission
    console.log("Feedback received:", data);
    return NextResponse.json({ message: "Feedback submitted successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to submit feedback" }, { status: 500 });
  }
}
