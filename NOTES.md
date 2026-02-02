# Implementation Notes

## Task 1: Implement portfolio summary feature 📊

### Status
- `computeSummary` bug fixed: `averagePricePerTonne` now divides by `totalTonnes`
- Summary UI built and wired to `/portfolioSummary`

### Design notes
- Kept Summary as a small parent with a reusable `SummaryCard` to avoid repetition
- Centralised `formatCurrency`/`formatNumber` in `src/lib/utils.ts` for consistent formatting
- Added basic loading/empty states to keep UX clear during async fetches and consistent with loading positions.

## Task 2: Add filtering by status 🔧

### Status
- Backend supports status filtering via query param on `/api/portfolio/summary`
- Filtering logic extracted into `filterPositionsByStatus` helper
- Tests added for the filter helper
- Frontend supports status filters and builds query params via `URLSearchParams`

### Design notes
- **Filtering location:** kept filtering in a helper (`backend/src/services/positionFilters.ts`) so `server.ts` stays focused on routing and the filter logic can be reused or extended, also easier for testing.
- **Single source of truth:** added `POSITION_STATUSES` in `backend/src/types.ts` and validated against it. This avoids hard-coded lists and keeps type and runtime validation aligned. Keeps robust type safety for checking filter values. 
- **Validation trade-off:** chose to validate against known statuses rather than accept any string. This gives clearer errors and avoids silent empty results on typos, at the cost of keeping `POSITION_STATUSES` in sync.
- **Return shape:** the helper returns `{ filteredPositions, error }` to keep error handling explicit and simple at the call site.
- **UI clarity:** added a small “Filter by status” label above the buttons to make it clear they’re filters rather than just a status toggle.

## Task 3: Handle slow API performance 🐌

### Status
- Added a simple in-memory cache by status to reuse previously fetched summaries

### Design notes
- **Cache rationale:** caching makes repeat selections instant, reducing the impact of the 2-second delay for previously viewed filters.
- **Trade-off:** cache is in-memory and resets on refresh; it avoids extra complexity like persistence or invalidation since the dataset is static in this exercise.