# Implementation Notes

## Task 1: Implement portfolio summary feature 📊

### Status
- `computeSummary` bug fixed: `averagePricePerTonne` now divides by `totalTonnes`
- Summary UI built and wired to `/portfolioSummary`

### Design notes
- Kept Summary as a small parent with a reusable `SummaryCard` to avoid repetition
- Centralised `formatCurrency`/`formatNumber` in `src/lib/utils.ts` for consistent formatting
- Added basic loading/empty states to keep UX clear during async fetches and consistent with loading positions.
