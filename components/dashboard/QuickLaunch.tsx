"use client";

import { URLForm } from "@/components/analyse/URLForm";

export function QuickLaunch() {
  return (
    <div className="w-full h-full flex flex-col pt-2">
      <div className="mb-4">
        <h3 className="text-xl font-bold font-display text-white">
          Quick Launch
        </h3>
        <p className="text-text-secondary text-sm">
          Start a new analysis right from your dashboard.
        </p>
      </div>
      <div className="flex-1 -mx-4">
        <div className="scale-[0.85] w-[117%] origin-top-left -mt-4">
          <URLForm />
        </div>
      </div>
    </div>
  );
}
