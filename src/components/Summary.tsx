import type { PortfolioSummary, PositionStatus } from "@/types/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatNumber } from "@/lib/utils";

export type SummaryStatus = "all" | PositionStatus;

interface SummaryProps {
  summary: PortfolioSummary;
  status: SummaryStatus;
  onStatusChange: (status: SummaryStatus) => void;
}

interface SummaryCardProps {
  title: string;
  value: string;
}

function SummaryCard({ title, value }: SummaryCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
      </CardContent>
    </Card>
  );
}

const STATUS_OPTIONS: { label: string; value: SummaryStatus }[] = [
  { label: "All", value: "all" },
  { label: "Available", value: "available" },
  { label: "Retired", value: "retired" },
];

export function Summary({ summary, status, onStatusChange }: SummaryProps) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">
          Filter by status
        </span>
        {STATUS_OPTIONS.map((option) => (
          <Button
            key={option.value}
            type="button"
            size="sm"
            variant={status === option.value ? "default" : "outline"}
            onClick={() => onStatusChange(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
      <SummaryCard title="Total Tonnes" value={formatNumber(summary.totalTonnes)} />
      <SummaryCard title="Total Value" value={formatCurrency(summary.totalValue)} />
      <SummaryCard
        title="Average Price/Tonne"
        value={formatCurrency(summary.averagePricePerTonne)}
      />
      </div>
    </div>
  );
}
