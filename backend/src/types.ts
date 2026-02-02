export const POSITION_STATUSES = ["available", "retired"] as const;
export type PositionStatus = (typeof POSITION_STATUSES)[number];

export type Position = {
  id: string;
  projectName: string;
  tonnes: number;
  pricePerTonne: number;
  status: PositionStatus;
  vintage: number;
};

export type PortfolioSummary = {
  totalTonnes: number;
  totalValue: number;
  averagePricePerTonne: number; // weighted average by tonnes
};
