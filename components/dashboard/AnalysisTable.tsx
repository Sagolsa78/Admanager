"use client";

import * as React from "react";
import { MoreHorizontal, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MOCK_DATA = [
  {
    id: "1",
    brand: "Acme Corp",
    date: "2026-03-09",
    status: "Complete",
    contexts: 5,
  },
  {
    id: "2",
    brand: "Globex UI",
    date: "2026-03-08",
    status: "Processing",
    contexts: 0,
  },
  {
    id: "3",
    brand: "Initech CRM",
    date: "2026-03-07",
    status: "Complete",
    contexts: 5,
  },
  {
    id: "4",
    brand: "Soylent SaaS",
    date: "2026-03-05",
    status: "Failed",
    contexts: 0,
  },
];

export function RecentAnalysesTable() {
  const [search, setSearch] = React.useState("");

  const filtered = MOCK_DATA.filter((item) =>
    item.brand.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full flex justify-center text-left">
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold font-display text-white">
            Recent Analyses
          </h3>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
            <Input
              placeholder="Search brands..."
              className="pl-9 h-9 bg-surface border-border"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#1F1F1F] text-text-secondary uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Brand</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Contexts</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-[#1A1A1A] transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-white flex items-center gap-3">
                    <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-[10px] text-primary font-bold">
                      {item.brand.charAt(0)}
                    </div>
                    {item.brand}
                  </td>
                  <td className="px-6 py-4 text-text-secondary">{item.date}</td>
                  <td className="px-6 py-4">
                    <Badge
                      variant={
                        item.status === "Complete"
                          ? "default"
                          : item.status === "Processing"
                            ? "secondary"
                            : "destructive"
                      }
                      className={
                        item.status === "Complete"
                          ? "bg-success/10 text-success hover:bg-success/20"
                          : item.status === "Processing"
                            ? "bg-warning/10 text-warning hover:bg-warning/20"
                            : "bg-error/10 text-error hover:bg-error/20"
                      }
                    >
                      {item.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-text-secondary">
                    {item.contexts} mapped
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 hover:bg-surface-2 text-text-secondary"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-text-secondary"
                  >
                    No analyses found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
