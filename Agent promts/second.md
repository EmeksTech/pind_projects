# TASKFLOW STUDENT PROJECT — PHASE 2: API CONFIGURATION AND AUTHENTICATION

Continue working on my existing React application.

The backend is deployed at:

https://task-flow-six-rouge.vercel.app

## Objective

Configure the React application to communicate with the TaskFlow backend and implement authentication using only the backend's verified, supported authentication mechanism.

## Known backend architecture

The TaskFlow backend currently has:

- Auth.js Credentials authentication for the existing dashboard.
- Cookie-based sessions for first-party browser authentication.
- A versioned REST API under /api/v1.
- Scoped personal access tokens for trusted API clients.
- User registration functionality.
- Task CRUD functionality.

IMPORTANT:

Auth.js session authentication and personal access token authentication are different mechanisms.

Do not assume that /api/v1/auth/login exists.

Do not create a fake login endpoint.

Do not embed personal access tokens in browser JavaScript.

Do not store long-lived personal access tokens in localStorage or sessionStorage.

Do not disable CSRF protection.

Do not bypass backend origin checks.

Do not spoof Origin, Host, or forwarded headers.

## Step 1: Inspect the available authentication contract

Review any API integration documentation and existing React authentication code.

Determine:

1. How user registration currently works.
2. How login currently works.
3. How logout works.
4. How the authenticated session is retrieved.
5. Whether the frontend requires a same-origin reverse proxy.
6. Which endpoints use session cookies.
7. Which endpoints use Bearer tokens.
8. Which authentication approach is supported for this student's deployment.

If the backend authentication contract is unclear, stop and report the exact missing information instead of inventing an implementation.

## Step 2: Configure the API

Use environment variables for public configuration.

For Vite projects, use a variable such as:

VITE_API_BASE_URL=https://task-flow-six-rouge.vercel.app

Do not put credentials or private secrets in VITE_ environment variables.

If the application uses a same-origin production proxy, use the appropriate relative API paths instead of bypassing that proxy.

Do not assume that a Vite development proxy will work after deployment.

## Step 3: Implement authentication

Using the confirmed backend integration method:

- Connect the existing registration form.
- Connect the existing login form.
- Implement logout.
- Restore authentication state when the page reloads.
- Handle expired or invalid sessions.
- Display meaningful authentication errors.
- Prevent duplicate form submissions.
- Add loading states.
- Protect authenticated pages.
- Redirect unauthenticated users appropriately.

Do not store passwords after submission.

Use React Context or the existing state-management solution where appropriate.

## Step 4: API service layer

Create reusable API request functions.

Handle:

- Request methods.
- JSON request and response bodies.
- HTTP error status codes.
- Network errors.
- Authentication errors.
- Backend validation errors.
- Request cancellation where appropriate.

Avoid repeating API logic in multiple components.

## Step 5: Verification

Test:

1. Registration.
2. Login.
3. Invalid credentials.
4. Session restoration after refresh.
5. Protected routes.
6. Logout.
7. Unauthenticated access.
8. Network failures.

If a test cannot run because the deployment or backend requires configuration, report that blocker accurately.

Do not mark untested authentication flows as working.

## Deliverables

- Updated authentication components.
- Reusable API service.
- Authentication state management.
- Protected routing where supported.
- Environment variable example.
- Build and lint results.
- List of verified and unverified authentication behaviors.

Preserve the existing React UI and project structure.

Do not push or deploy automatically.