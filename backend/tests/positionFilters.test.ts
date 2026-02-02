import { filterPositionsByStatus } from "../src/services/positionFilters";
import { Position } from "../src/types";

describe("filterPositionsByStatus", () => {
  const positions: Position[] = [
    {
      id: "1",
      projectName: "Project A",
      tonnes: 100,
      pricePerTonne: 25,
      status: "available",
      vintage: 2023,
    },
    {
      id: "2",
      projectName: "Project B",
      tonnes: 50,
      pricePerTonne: 30,
      status: "retired",
      vintage: 2022,
    },
  ];

  it("returns error when status is not a string", () => {
    const result = filterPositionsByStatus(positions, 123);

    expect(result.error).toBe("status must be a string");
    expect(result.filteredPositions).toEqual([]);
  });

  it("returns all positions when status is undefined", () => {
    const result = filterPositionsByStatus(positions, undefined);

    expect(result.error).toBeUndefined();
    expect(result.filteredPositions).toEqual(positions);
  });

  it("returns error when status is not supported", () => {
    const result = filterPositionsByStatus(positions, "pending");

    expect(result.error).toBe("status must be one of: available, retired");
    expect(result.filteredPositions).toEqual([]);
  });

  it("filters positions when status is valid", () => {
    const result = filterPositionsByStatus(positions, "available");

    expect(result.error).toBeUndefined();
    expect(result.filteredPositions).toEqual([positions[0]]);
  });
});
