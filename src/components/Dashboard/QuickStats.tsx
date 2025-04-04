
import { Clock, AlertTriangle, PackageOpen, Archive } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

const StatCard = ({ title, value, icon, trend, className }: StatCardProps) => (
  <div className={cn("nasa-container flex items-center gap-4", className)}>
    <div className="h-12 w-12 flex items-center justify-center rounded-full bg-primary/20">
      {icon}
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
      {trend && (
        <p className={cn(
          "text-xs flex items-center gap-1",
          trend.positive ? "text-alert-success" : "text-alert-danger"
        )}>
          {trend.positive ? '↑' : '↓'} {trend.value}
        </p>
      )}
    </div>
  </div>
);

const QuickStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard 
        title="Total Items" 
        value={427}
        icon={<Archive className="h-6 w-6 text-primary" />}
        trend={{
          value: "12 since last week",
          positive: true
        }}
      />
      
      <StatCard 
        title="Items in Use" 
        value={86}
        icon={<PackageOpen className="h-6 w-6 text-primary" />}
      />
      
      <StatCard 
        title="Expiring Soon" 
        value={8}
        icon={<Clock className="h-6 w-6 text-alert-warning" />}
        trend={{
          value: "2 more than last week",
          positive: false
        }}
      />
      
      <StatCard 
        title="Critical Items" 
        value={3}
        icon={<AlertTriangle className="h-6 w-6 text-alert-danger" />}
      />
    </div>
  );
};

export default QuickStats;
