"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2">
          Settings
        </h1>
        <p className="text-text-secondary">
          Manage your account preferences and billing details.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Settings Nav */}
        <div className="space-y-1 bg-surface border border-border rounded-xl p-2 h-fit">
          <div className="px-3 py-2 text-sm font-medium text-white bg-surface-2 rounded-md">
            Profile
          </div>
          <div className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white hover:bg-surface-2 rounded-md transition-colors cursor-pointer">
            Security
          </div>
          <div className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white hover:bg-surface-2 rounded-md transition-colors cursor-pointer">
            Billing
          </div>
          <div className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-white hover:bg-surface-2 rounded-md transition-colors cursor-pointer">
            Integrations
          </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-3 space-y-6">
          <Card className="border-border bg-[#161616]">
            <CardHeader>
              <CardTitle className="text-xl">Profile Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-text-primary">
                  Full Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  defaultValue="Demo User"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-text-primary">
                  Email Address
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
                  defaultValue="demo@adforge.com"
                  disabled
                />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card className="border-border bg-[#161616]">
            <CardHeader>
              <CardTitle className="text-xl text-error">Danger Zone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-text-secondary mb-4">
                Permanently delete your account and all associated data. This
                action cannot be undone.
              </p>
              <Button variant="destructive">Delete Account</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
