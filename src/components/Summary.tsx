import type { PortfolioSummary } from "@/types/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/utils";

interface SummaryProps {
  summary: PortfolioSummary;
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

export function Summary({ summary }: SummaryProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <SummaryCard title="Total Tonnes" value={formatNumber(summary.totalTonnes)} />
      <SummaryCard title="Total Value" value={formatCurrency(summary.totalValue)} />
      <SummaryCard
        title="Average Price/Tonne"
        value={formatCurrency(summary.averagePricePerTonne)}
      />
    </div>
  );
}
