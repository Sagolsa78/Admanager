import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { body, rating } = await req.json();
    // In a real app we'd update DB with params.id
    return NextResponse.json({ message: "Context updated", id: params.id, body, rating });
  } catch {
    return NextResponse.json({ error: "Failed to update context" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    // In a real app we'd delete from DB
    return NextResponse.json({ message: "Context deleted", id: params.id });
  } catch {
    return NextResponse.json({ error: "Failed to delete context" }, { status: 500 });
  }
}
