import { NextResponse } from "next/server";

export async function GET() {
  // Mock mock active campaigns for the Kanban board
  const mockCampaigns = [
    { id: "c1", title: "Direct Response Flow", status: "Active", date: "2026-03-09" },
    { id: "c2", title: "Founder Origin Story", status: "Draft", date: "2026-03-08" },
    { id: "c3", title: "Contrarian Hook Tests", status: "Completed", date: "2026-03-01" },
  ];
  return NextResponse.json(mockCampaigns);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newId = `camp_${Math.random().toString(36).substr(2, 9)}`;
    return NextResponse.json({ ...data, id: newId });
  } catch {
    return NextResponse.json({ error: "Failed to create campaign" }, { status: 500 });
  }
}
