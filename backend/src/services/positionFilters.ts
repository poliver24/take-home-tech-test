import { Position, PositionStatus, POSITION_STATUSES } from "../types";

type FilterResult = {
  filteredPositions: Position[];
  error?: string;
};

export const filterPositionsByStatus = (
  positions: Position[],
  status: unknown,
): FilterResult => {
  if (status == null) {
    return { filteredPositions: positions };
  }

  if (typeof status !== "string") {
    return { filteredPositions: [], error: "status must be a string" };
  }

  if (!POSITION_STATUSES.includes(status as PositionStatus)) {
    return {
      filteredPositions: [],
      error: `status must be one of: ${POSITION_STATUSES.join(", ")}`,
    };
  }

  return {
    filteredPositions: positions.filter((position) => position.status === status),
  };
};
