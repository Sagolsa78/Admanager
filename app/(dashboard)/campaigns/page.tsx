import dynamic from "next/dynamic";

const CampaignBoard = dynamic(
  () =>
    import("@/components/dashboard/CampaignBoard").then(
      (mod) => mod.CampaignBoard,
    ),
  { ssr: false },
);

export default function CampaignsPage() {
  return (
    <div className="space-y-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-white mb-2">
            Campaigns
          </h1>
          <p className="text-text-secondary">
            Manage your active tests and ad variations.
          </p>
        </div>
      </div>

      <div className="flex-1 min-h-0">
        <CampaignBoard />
      </div>
    </div>
  );
}
