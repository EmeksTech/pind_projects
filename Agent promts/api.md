# TASKFLOW REACT PROJECT — BACKEND API REFERENCE AND INTEGRATION INSTRUCTIONS

You are a senior React developer and API integration expert assisting me with my existing React project.

My instructor has provided an existing Next.js backend called **TaskFlow**. I will send you five implementation prompts after this message.

**IMPORTANT: First, understand and retain the following API documentation as the authoritative reference for all five phases. Do not start modifying my project until I provide Phase 1.**

## 1. Backend Information

**Base URL:** https://task-flow-six-rouge.vercel.app

**Backend technologies:** Next.js, TypeScript, Prisma, Neon PostgreSQL, and Auth.js v5 Credentials.

The backend already handles authentication, database operations, task ownership, validation, searching, filtering, and pagination.

Your responsibility is to refactor my existing React application to consume these APIs, not to create another backend.

## 2. Authentication API

TaskFlow uses Auth.js session-based authentication with secure cookies.

Available endpoints:

- `GET /api/auth/providers` — Discover authentication providers.
- `GET /api/auth/csrf` — Retrieve a CSRF token.
- `POST /api/auth/callback/credentials` — Login.
- `GET /api/auth/session` — Retrieve the current session.
- `POST /api/auth/signout` — Logout.

For login, send URL-encoded data containing:

- `csrfToken`
- `callbackUrl`
- `email`
- `password`

Include the header `X-Auth-Return-Redirect: 1`.

Fetch a fresh CSRF token before login or logout. Preserve the authentication cookies through the approved same-origin proxy.

**There is no `/api/login` endpoint. Do not invent one.**

## 3. Registration API

**POST `/api/register`**

Example request:

```json
{
  "name": "Student Name",
  "email": "student@example.com",
  "password": "SecurePassword123!",
  "confirmPassword": "SecurePassword123!"
}
```

Names must contain 2–100 characters. Passwords must contain 12–128 characters.

Successful registration returns HTTP `201`.

## 4. Task Management API

All task endpoints require authentication.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/tasks` | Retrieve tasks |
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks/{id}` | Retrieve single task |
| PATCH | `/api/tasks/{id}` | Update task |
| DELETE | `/api/tasks/{id}` | Delete task |

Example task:

```json
{
  "title": "Learn React API Integration",
  "description": "Connect React to the Next.js backend",
  "assignee": "Student",
  "category": "Training",
  "priority": "High",
  "status": "Pending",
  "dueDate": "2026-11-25"
}
```

Task field rules:

- `title`: Required on creation, 1–200 characters.
- `description`: Optional, maximum 5,000 characters.
- `assignee`: Optional, maximum 120 characters.
- `category`: Optional, maximum 100 characters.
- `priority`: `Low`, `Medium`, `High`.
- `status`: `Pending`, `In Progress`, `Completed`.
- `dueDate`: `YYYY-MM-DD` or an empty string.

Task IDs are UUID strings in database mode.

Do not include `ownerId`. The backend determines task ownership from the authenticated session.

PATCH requires at least one valid task field.

DELETE returns HTTP `204` with no response body.

## 5. Search and Filtering

Use `GET /api/tasks` with supported query parameters:

- `search` — Search task titles and descriptions.
- `status` — Filter by status.
- `priority` — Filter by priority.
- `category` — Filter by category.
- `assignee` — Filter by assignee.
- `dueBefore` — Inclusive due-date upper bound.
- `dueAfter` — Inclusive due-date lower bound.
- `sortBy` — Sorting field.
- `order` — `asc` or `desc`.

Supported sorting fields:

`title`, `category`, `priority`, `status`, `dueDate`, `createdAt`, `updatedAt`.

Examples:

`GET /api/tasks?search=React`

`GET /api/tasks?status=Pending`

`GET /api/tasks?priority=High`

`GET /api/tasks?status=Pending&priority=High`

## 6. Pagination

Example:

`GET /api/tasks?page=1&limit=10`

Response:

```json
{
  "tasks": [],
  "page": 1,
  "limit": 10,
  "total": 0,
  "totalPages": 0
}
```

Default page: 1.

Default limit: 10.

Maximum limit: 100.

Without `page` or `limit`, the backend returns a task array directly for backward compatibility.

## 7. User Profile API

- `GET /api/profile` — Retrieve authenticated user profile.
- `PATCH /api/profile` — Update name or email.
- `POST /api/profile/password` — Change password.

Password change request:

```json
{
  "currentPassword": "OldPassword123!",
  "newPassword": "NewPassword123!",
  "confirmNewPassword": "NewPassword123!"
}
```

## 8. Error Handling

The API returns structured JSON errors:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid data.",
    "details": [
      {
        "path": "title",
        "message": "Enter a task title."
      }
    ]
  }
}
```

The `details` field is optional.

Handle these HTTP status codes appropriately:

- `400` — Invalid request.
- `401` — Unauthenticated.
- `403` — Untrusted request origin.
- `404` — Task not found or not owned by the user.
- `409` — Duplicate email.
- `429` — Rate limit exceeded.
- `500` — Server error.

## 9. Health Check

`GET /api/health`

Returns `200` with:

```json
{
  "status": "ok"
}
```

when the service is available.

## 10. Important Authentication and Deployment Rules

The current backend does not enable general cross-origin browser CORS.

For a local Vite React application, use an approved development proxy for `/api` requests.

For a separately deployed React application, a compatible production same-origin proxy and an explicitly trusted frontend origin are required.

Do not assume Vite's development proxy works in production.

Do not disable CSRF protection, spoof Origin headers, or bypass authentication.

Do not store passwords or long-lived personal access tokens in browser storage.

Do not expose database credentials.

The existing `/api/v1` Bearer-token API is separate from the session-authenticated `/api/tasks` API described here. Do not mix the two authentication mechanisms.

## 11. Instructions for the Upcoming Five Prompts

I will provide five prompts covering:

1. Existing React project inspection and preparation.
2. API configuration and authentication.
3. Task CRUD integration.
4. Search, filtering, pagination, and UI improvements.
5. Testing, cleanup, and deployment preparation.

For every phase:

- Use this API reference as the source of truth.
- Inspect my existing project before making changes.
- Preserve existing components, styling, and functionality.
- Do not recreate the project from scratch.
- Use the correct endpoints and request structures.
- Create reusable API service functions.
- Implement appropriate loading, success, and error states.
- Do not invent unsupported backend features.
- Do not push or deploy without my approval.
- Explain the changes made and how I can test them.

**For now, acknowledge that you understand the TaskFlow backend API reference and wait for my Phase 1 prompt. Do not modify any files yet.**