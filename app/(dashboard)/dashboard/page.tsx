import { StatsBar } from "@/components/dashboard/StatsBar";
import { RecentAnalysesTable } from "@/components/dashboard/AnalysisTable";
import { QuickLaunch } from "@/components/dashboard/QuickLaunch";

export default function DashboardHome() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-display font-bold text-white mb-2">
          Welcome back, Demo User
        </h2>
        <p className="text-text-secondary">
          Here&apos;s what&apos;s happening with your brand positioning.
        </p>
      </div>

      <StatsBar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 border border-border rounded-xl bg-surface flex flex-col items-center justify-center min-h-[300px]">
            <RecentAnalysesTable />
          </div>
        </div>

        <div className="space-y-8">
          <div className="p-6 border border-border rounded-xl bg-surface flex flex-col items-center justify-center min-h-[300px]">
            <QuickLaunch />
          </div>
        </div>
      </div>
    </div>
  );
}
