# Jade Portfolio - Frontend Agent Guidelines

This document provides instructions and guidelines for AI agents and developers working on the Jade Portfolio frontend repository.

## 1. Project Overview

- **Stack**: React 19, TypeScript, Vite 7
- **Styling**: Vanilla CSS, `framer-motion` for animations, `react-icons`
- **Routing**: `react-router-dom` v7
- **Data**: Sanity CMS (`@sanity/client`)
- **Package Manager**: `pnpm`

## 2. Environment & Commands

### Setup
Ensure you are in the `frontend` directory.
```bash
pnpm install
```

### Development
Start the development server:
```bash
pnpm run dev
```
The server usually runs on `http://localhost:5173`.

### Building
Build for production:
```bash
pnpm run build
```
This runs `tsc -b` (TypeScript Build) followed by `vite build`.
Output directory: `dist/`

### Linting
Run ESLint:
```bash
pnpm run lint
```
The project uses ESLint 9 with `typescript-eslint` and React hooks/refresh plugins.

### Testing
*Note: No testing framework is currently configured.*

If adding tests in the future, the recommended stack is **Vitest** + **React Testing Library**.
Proposed commands:
- Run all tests: `pnpm test`
- Run single test: `pnpm test path/to/file.test.tsx`

## 3. Directory Structure

- **`src/components/`**: Reusable UI components (e.g., `Header.tsx`, `Footer.tsx`).
- **`src/pages/`**: Full page components mapped to routes (e.g., `Home.tsx`, `Projects.tsx`).
- **`src/styles/`**: Global or shared stylesheets.
- **`src/assets/`**: Static assets like images and fonts.
- **`src/sanityClient.ts`**: Sanity CMS configuration and client.
- **`src/types.ts`**: Shared TypeScript definitions.

## 4. Code Style & Conventions

### 4.1. TypeScript
- **Strictness**: Enable and maintain strict type checking.
- **Types vs Interfaces**: Use `interface` for object shapes that might be extended, `type` for unions/intersections.
- **Props**: Define component props interfaces explicitly.
  ```tsx
  interface HeaderProps {
    title: string;
    isActive?: boolean;
  }
  ```
- **Avoid `any`**: Use `unknown` if the type is truly not known, but prefer specific types.

### 4.2. React Components
- **Functional Components**: Use functional components with hooks.
- **Naming**: PascalCase for files and component names (e.g., `ProjectDetail.tsx`).
- **Exports**:
  - Page components: `export default` (common for lazy loading/routes).
  - Utility components: Named exports are acceptable, but consistent `export default` is seen in `App.tsx`. Follow local patterns.
- **Hooks**:
  - Use built-in hooks (`useState`, `useEffect`, `useMemo`).
  - Create custom hooks in `src/hooks/` (if needed) for complex logic.
  - Follow rules of hooks (top level only, dependency arrays).

### 4.3. Styling
- **Method**: Standard CSS imports.
- **Files**: Co-locate CSS with components if specific, or use `src/styles` for shared.
- **ClassName**: Use `className` prop. Template literals for conditional classes:
  ```tsx
  <div className={`content ${isActive ? "active" : ""}`} />
  ```
- **Animation**: Use `framer-motion` for complex component transitions.

### 4.4. Imports
- **Order**:
  1. External libraries (`react`, `react-router-dom`)
  2. Internal components (`../components/Header`)
  3. Pages (`../pages/Home`)
  4. Styles (`./App.css`)
  5. Types/Assets
- **Paths**: Currently using relative paths (e.g., `../../components`). Use relative paths unless path aliases (e.g., `@/`) are configured in `tsconfig` and `vite.config`.

### 4.5. Naming Conventions
- **Files**:
  - Components/Pages: `PascalCase.tsx`
  - Utilities/Hooks: `camelCase.ts`
  - Styles: `PascalCase.css` or `kebab-case.css` (match component).
- **Variables**: `camelCase`.
- **Constants**: `UPPER_SNAKE_CASE` for true constants.
- **Boolean props**: Prefix with `is`, `has`, or `should` (e.g., `isLoading`, `hasError`).

### 4.6. Error Handling
- **API Calls**: Wrap async calls (like Sanity fetches) in `try/catch` blocks.
- **UI**: Handle loading and error states in components.
  ```tsx
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  ```
- **Sanity**: Handle potential `null` or missing fields from CMS data gracefully.

## 5. Workflow & Git

- **Commits**: Use conventional commits (e.g., `feat: add project page`, `fix: header overlap`).
- **Changes**:
  - Always verify that the app builds (`pnpm build`) before finishing a task.
  - Lint the code (`pnpm lint`) to catch trivial errors.
  - Check for unused imports and variables.

## 6. Agent Instructions

When modifying this codebase:
1. **Read Context**: Always read the file you are modifying AND its imports to understand the dependencies.
2. **Match Style**: If editing a file, follow the existing indentation (2 spaces usually) and coding style.
3. **No Breaking Changes**: Do not change existing public interfaces or route paths unless explicitly requested.
4. **Dependencies**: Do not add new npm packages without checking if an existing one can solve the problem (e.g., use `react-icons` for icons).
5. **Sanity**: If modifying data fetching, ensure the GROQ queries in `sanityClient.ts` or components match the Sanity schema.

---
*Generated by AI Assistant for Jade Portfolio*
