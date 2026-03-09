import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  KanbanSquare,
  Bookmark,
  Zap,
} from "lucide-react";

export function StatsBar() {
  const stats = [
    {
      title: "Total Analyses",
      value: "42",
      icon: <Activity className="h-5 w-5 text-primary" />,
      trend: "+12%",
      trendUp: true,
    },
    {
      title: "Active Campaigns",
      value: "15",
      icon: <KanbanSquare className="h-5 w-5 text-success" />,
      trend: "+3",
      trendUp: true,
    },
    {
      title: "Saved Contexts",
      value: "128",
      icon: <Bookmark className="h-5 w-5 text-[#3B82F6]" />,
      trend: "-2%",
      trendUp: false,
    },
    {
      title: "Credits Used",
      value: "2,450",
      icon: <Zap className="h-5 w-5 text-warning" />,
      subtext: "of 5,000 monthly",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="bg-[#161616] border-[#2A2A2A] p-0 shadow-none hover:border-[#3A3A3A] transition-colors"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">
              {stat.title}
            </CardTitle>
            <div className="p-2 bg-[#1F1F1F] rounded-md">{stat.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-1">
              {stat.value}
            </div>

            {stat.trend && (
              <p
                className={`text-xs flex items-center ${stat.trendUp ? "text-success" : "text-error"}`}
              >
                {stat.trendUp ? (
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                ) : (
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                )}
                {stat.trend}{" "}
                <span className="text-text-secondary ml-1">vs last month</span>
              </p>
            )}

            {stat.subtext && (
              <div className="space-y-2 mt-1">
                <div className="w-full h-1.5 bg-[#1F1F1F] rounded-full overflow-hidden">
                  <div className="h-full bg-warning" style={{ width: "49%" }} />
                </div>
                <p className="text-xs text-text-secondary">{stat.subtext}</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
