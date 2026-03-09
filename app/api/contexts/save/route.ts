import { NextResponse } from "next/server";

export async function POST() {
  try {
    // In a real app we'd save to DB here.
    const savedId = `saved_${Math.random().toString(36).substr(2, 9)}`;
    
    return NextResponse.json({ savedId, message: "Context saved successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to save context" }, { status: 500 });
  }
}
