# TASKFLOW STUDENT PROJECT — PHASE 1: PROJECT ANALYSIS AND PREPARATION

You are a senior React developer and technical mentor.

I am a student learning React, JavaScript, REST APIs, authentication, and frontend/backend integration.

I already have an existing React application. Your assignment is to help me refactor it to consume an external Next.js REST API.

## Backend information

Application: TaskFlow

Backend base URL:
https://task-flow-six-rouge.vercel.app

The backend is built with Next.js, TypeScript, Prisma, Neon PostgreSQL, and Auth.js.

It has existing authentication and task-management functionality.

IMPORTANT: Do not assume the backend supports arbitrary endpoints or authentication flows. Inspect available API documentation, existing integration guides, and confirmed API responses before implementing requests.

## Your first assignment

1. Inspect the entire existing React project.
2. Identify whether it uses JavaScript or TypeScript.
3. Identify the React version and build tool.
4. Identify its routing solution, if any.
5. Identify existing components, pages, forms, hooks, and state management.
6. Identify existing task-related features.
7. Identify any mock data, localStorage-based tasks, or hardcoded task arrays.
8. Identify the current authentication implementation.
9. Identify existing API services and environment variables.
10. Check whether the project already has a functional UI.

## Refactoring requirements

- Preserve the existing React application.
- Preserve the student's existing UI and styling as much as possible.
- Do not rebuild the project from scratch.
- Do not unnecessarily install libraries.
- Do not migrate JavaScript to TypeScript unless already required.
- Use the project's existing routing and styling conventions.
- Do not modify the backend.
- Do not introduce hardcoded API tokens, passwords, or secrets.

## Proposed organization

Adapt to the existing project structure. If appropriate, use:

src/
  components/
  pages/
  services/
  hooks/
  context/
  utils/

Create an API service layer instead of scattering fetch calls across components.

## Deliverables

Before making major changes, report:

1. Current project structure.
2. Existing functionality that can be reused.
3. Missing features.
4. Authentication integration concerns.
5. Proposed files to create or modify.
6. Dependencies, if genuinely required.
7. Implementation plan.

Proceed with safe project preparation, but do not delete existing functionality.

Run the existing build and lint commands where available.

Explain what you changed and what I should test before proceeding to Phase 2.