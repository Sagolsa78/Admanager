import { SavedContexts } from "@/components/dashboard/SavedContexts";

export default function SavedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">
          Saved Contexts
        </h1>
        <p className="text-text-secondary">
          Your library of high-performing brand positioning angles.
        </p>
      </div>

      <SavedContexts />
    </div>
  );
}
