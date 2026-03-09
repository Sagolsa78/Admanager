import { NextResponse } from "next/server";

// Mock DB
const savedContexts: Record<string, unknown>[] = [];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");
  
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedContexts = savedContexts.slice(start, end);
  
  return NextResponse.json({
    data: paginatedContexts,
    total: savedContexts.length,
    page,
    limit,
  });
}
