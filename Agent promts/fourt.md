# TASKFLOW STUDENT PROJECT — PHASE 4: SEARCH, FILTERS, PAGINATION AND UX

Continue improving the existing React TaskFlow application.

## Objective

Integrate the backend's task search, filtering, and pagination features while preserving the student's existing UI.

## Backend

https://task-flow-six-rouge.vercel.app

The backend supports task search, filtering, and pagination.

When pagination is requested, the API returns a response structured like:

{
  "tasks": [],
  "page": 1,
  "limit": 10,
  "total": 0,
  "totalPages": 0
}

Some existing requests may return a plain task array for backward compatibility.

Inspect the actual endpoint contract and use the supported query parameter names.

## Step 1: Search

Implement a search input that allows users to search tasks by title or description using the backend's search capability.

Requirements:

- Search as the user types, with appropriate debouncing, or on form submission.
- Avoid unnecessary requests.
- Reset pagination when the search changes.
- Show a useful empty-results message.
- Handle network failures.

## Step 2: Filters

Implement filters for supported fields:

- Status.
- Priority.
- Assignee.
- Due date.

Use the backend's actual accepted query parameters and values.

Do not invent enum values.

Allow users to combine supported filters.

Add a Clear Filters action.

## Step 3: Pagination

Implement server-side pagination.

Requirements:

- Previous button.
- Next button.
- Current page display.
- Total pages.
- Total task count where available.
- Disable unavailable navigation.
- Reset to page 1 when search or filters change.

Use the backend's actual page and limit parameters.

Do not fetch all tasks merely to paginate them locally when the backend supports pagination.

## Step 4: Loading and empty states

Improve the interface with:

- Loading indicators.
- Empty task list messages.
- No search results messages.
- Friendly error feedback.
- Disabled buttons during submissions.
- Success feedback after mutations.

## Step 5: Responsive UI

Preserve the student's current styling approach.

Make the dashboard usable on mobile, tablet, and desktop.

Do not introduce a new UI library unless necessary and approved.

## Step 6: Request handling

Prevent stale search results from overwriting newer results.

Use AbortController or another suitable approach.

Avoid duplicate network requests where practical.

## Step 7: Testing

Verify:

1. Search by title.
2. Search by description.
3. Filter by status.
4. Filter by priority.
5. Combined filters.
6. Clear filters.
7. Next page.
8. Previous page.
9. Search while on a later page.
10. Create a task while filters are active.
11. Delete a task from the last page.
12. Empty results.
13. Network failure.

## Deliverables

A responsive React task dashboard using the backend's search, filtering, and pagination features.

Report changed files and test results.

Do not push or deploy automatically.