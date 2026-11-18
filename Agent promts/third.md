# TASKFLOW STUDENT PROJECT — PHASE 3: TASK CRUD INTEGRATION

Continue refactoring my existing React TaskFlow application.

## Objective

Replace hardcoded task data and local-only task operations with real API requests to the existing Next.js TaskFlow backend.

Backend:
https://task-flow-six-rouge.vercel.app

## Available functionality

The backend supports task management, including:

- Retrieving tasks.
- Creating tasks.
- Retrieving individual tasks where supported.
- Updating tasks.
- Deleting tasks.
- Task ownership enforcement.

The backend has existing session-authenticated task routes and versioned Bearer-token routes.

Use the API family that is compatible with the authentication approach confirmed in Phase 2.

Do not mix cookie-based authentication and Bearer-token authentication without an explicitly supported integration design.

## Step 1: Inspect the task API contract

Determine the exact supported:

- Endpoint URLs.
- HTTP methods.
- Request body structures.
- Response body structures.
- Task identifiers.
- Validation rules.
- Status values.
- Priority values.
- Assignee fields.
- Due-date formats.
- Error responses.

Do not invent field names or enum values.

## Step 2: Build the task service

Create reusable functions equivalent to:

getTasks()
getTaskById(id)
createTask(data)
updateTask(id, data)
deleteTask(id)

Only implement operations actually supported by the backend.

Use fetch or the HTTP client already installed in the project.

## Step 3: Refactor task listing

Update the existing task dashboard to:

- Fetch tasks from the backend.
- Display loading states.
- Display an empty state when no tasks exist.
- Display useful error messages.
- Render the authenticated user's tasks.
- Refresh the list after successful mutations.

Do not use a hardcoded task array as the primary data source.

## Step 4: Create tasks

Connect the existing Add Task form to the backend.

Use the actual API schema.

Include appropriate fields supported by the backend, such as title, description, status, priority, assignee, and due date.

Validate user input.

Show submission progress and success or error feedback.

Clear or close the form only after successful creation.

## Step 5: Edit tasks

Allow users to edit their own tasks.

Prefill the edit form with existing task data.

Send only valid fields using the correct HTTP method.

Update the interface after the backend confirms success.

## Step 6: Delete tasks

Add a delete action.

Ask for confirmation before deleting.

Send the request using the correct task identifier.

Remove the task from the displayed list only after successful deletion, unless a properly reversible optimistic update is implemented.

## Step 7: Error handling

Handle at least:

400 — Invalid request.
401 — Authentication required.
403 — Forbidden.
404 — Task not found.
422 — Validation failure, if used by the backend.
429 — Too many requests.
500 — Server error.

Use the actual backend error response format.

Never display sensitive server internals to users.

## Step 8: Data integrity

- Never assume the frontend alone enforces task ownership.
- Never use another user's identifier to bypass authorization.
- Do not modify the Neon database directly.
- Do not replace real backend operations with localStorage.
- Preserve existing UI components where possible.

## Verification

Test:

1. Fetch tasks.
2. Create a task.
3. Edit a task.
4. Delete a task.
5. Refresh the page and verify persistence.
6. Check invalid input.
7. Check unauthenticated access.
8. Verify the same account sees consistent data in TaskFlow's dashboard.

Do not perform destructive tests on another user's account.

## Deliverables

A functional task dashboard connected to the TaskFlow backend.

Provide a summary of changed files, supported API routes, test results, and any remaining issues.

Do not push or deploy automatically.