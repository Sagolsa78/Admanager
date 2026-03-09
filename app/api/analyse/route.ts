import { NextResponse } from "next/server";

// Mock database for current jobs
const activeJobs = new Map<string, { status: "pending" | "complete", contexts?: Record<string, unknown>[], startTime: number }>();

export async function POST(req: Request) {
  try {
    const { websiteUrl } = await req.json();
    
    // Validate request
    if (!websiteUrl) {
      return NextResponse.json({ error: "Missing website URL" }, { status: 400 });
    }

    // Generate mock jobId
    const jobId = `job_${Math.random().toString(36).substr(2, 9)}`;
    
    // Store in mock DB
    activeJobs.set(jobId, { status: "pending", startTime: Date.now() });

    return NextResponse.json({ jobId });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const jobId = searchParams.get("jobId");

  if (!jobId) {
    return NextResponse.json({ error: "Missing jobId" }, { status: 400 });
  }

  const job = activeJobs.get(jobId);

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  // Simulate a 10 second processing time for the mock
  const timeElapsed = Date.now() - job.startTime;
  if (timeElapsed > 10000 && job.status === "pending") {
    job.status = "complete";
    job.contexts = [
      {
        id: "ctx1", number: "01", title: "Direct Response", rating: 0, saved: false,
        body: "Are you struggling to [Pain Point]?\n\nUnlike traditional solutions that [Flaw], our platform uses [Mechanism] to deliver [Result] in half the time.\n\nClick here to try it risk-free today."
      },
      {
        id: "ctx2", number: "02", title: "Founder's Origin", rating: 0, saved: false,
        body: "I spent 5 years building something nobody wanted.\n\nThen I realized a fundamental truth about [Industry problem].\n\nThat's why we built [Product]. It doesn't just treat the symptom, it fixes the root cause."
      },
      {
        id: "ctx3", number: "03", title: "The Contrarian View", rating: 0, saved: false,
        body: "Most people think you need [Common Belief] to succeed in [Industry].\n\nThey're wrong.\n\nThe data shows that [Contrarian Truth] is actually the fastest path to [Outcome]."
      },
      {
        id: "ctx4", number: "04", title: "Case Study Format", rating: 0, saved: false,
        body: "How [Client Name] achieved a 400% ROI in 30 days.\n\nPhase 1: Diagnosis of the bottleneck.\nPhase 2: Implementation of [Mechanism].\nPhase 3: Scaling the winning variation.\n\nWant to see the exact playbook?"
      },
      {
        id: "ctx5", number: "05", title: "Feature to Benefit", rating: 0, saved: false,
        body: "Feature: [Technology/Feature].\nWhat it means for you: [Immediate Benefit].\nWhy it matters long-term: [Core Desire/Transformation].\n\nStop settling for outdated tech."
      }
    ];
  }

  return NextResponse.json({
    status: job.status,
    contexts: job.contexts || []
  });
}
