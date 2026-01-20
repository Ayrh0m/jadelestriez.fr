# Jade Portfolio - Frontend Agent Guidelines

This document provides comprehensive instructions and guidelines for AI agents and developers working on the Jade Portfolio frontend repository.

## 1. Project Overview

- **Stack**: React 19, TypeScript, Vite 7
- **Styling**: Vanilla CSS (BEM-like), `motion/react` (v12) for animations
- **Routing**: `react-router-dom` v7 (Data Router pattern)
- **Backend**: Cloudflare Pages Functions (`functions/`)
- **Data**: Sanity CMS (`@sanity/client`)
- **UI Feedback**: `sonner` for toast notifications
- **Package Manager**: `pnpm`
- **Design Philosophy**: "Sharp" aesthetic (strictly `border-radius: 0` everywhere), minimalist, premium feel.

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
- Frontend: `http://localhost:5173`
- Cloudflare Functions (local): Requires `wrangler pages dev`

### Building (CRITICAL)
Build for production. **Always run this before confirming a task is done.**
```bash
pnpm run build
```
*Note: This runs `tsc -b` (TypeScript Build) followed by `vite build`.*

### Linting
Run ESLint to check for code quality and hooks issues:
```bash
pnpm run lint
```
*Fix all lint errors before committing.*

### Testing
*Current Status: No testing framework is currently configured.*

If instructed to add tests, use **Vitest** + **React Testing Library**.
**Standard commands (for future reference):**

- **Run all tests**:
  ```bash
  pnpm test
  ```
- **Run a single test file** (IMPORTANT):
  ```bash
  pnpm test path/to/file.test.tsx
  ```
- **Run tests in UI mode**:
  ```bash
  pnpm test --ui
  ```

## 3. Code Style & Conventions

### 3.1. Design & UI (Strict)
- **Border Radius**: MUST be `0` or `none` for ALL elements. No rounded corners.
- **Components**: Use reusable UI components from `src/components/ui/` instead of raw HTML.
- **Styling**: Prefer centralized CSS in `src/styles/`. Avoid inline styles.
- **Animations**:
  - Import from `motion/react` (NOT `framer-motion` directly).
  - Standard durations: `0.2s` (interactions), `0.5s` (transitions).
  - Use `AnimatePresence` for exit animations.

### 3.2. TypeScript
- **Strictness**: Maintain strict type checking. No `any`.
- **Props**: Define component props interfaces explicitly.
  ```tsx
  interface Props {
    project: Project;
    isVisible?: boolean;
  }
  ```

### 3.3. React Components
- **Naming**: PascalCase for components (`ProjectCard.tsx`), camelCase for hooks (`useScroll.ts`).
- **Routing**: Use `useNavigate`, `useLocation`, and `Outlet`.
- **State**: Use controlled inputs. Avoid complex `useEffect` chains; prefer derived state.
- **Context**: Use Context for global UI states to avoid prop drilling.

### 3.4. Imports
**Order of imports is strict:**
1. External libraries (`react`, `motion/react`, `react-router-dom`)
2. Internal Context/Hooks (`../context/`, `../hooks/`)
3. UI Components (`../components/ui/`)
4. Feature Components (`../components/pages/`)
5. Styles (`../../styles/ProjectCard.css`)
6. Assets/Types

**Paths**: Use relative paths (e.g., `../../components`).

### 3.5. Error Handling
- **API Calls**: Wrap async calls in `try/catch`.
- **User Feedback**: Use `sonner` (`toast.success`, `toast.error`) for notifications.
- **Logging**: Log detailed errors to console, but show user-friendly messages.

## 4. Directory Structure

- **`functions/`**: Cloudflare Pages Functions (API).
- **`src/components/`**:
  - **`ui/`**: Core primitives (Button, Link, Input). **Prefer these.**
  - **`pages/`**: Page-specific components.
  - **`layout/`**: Header, Footer.
- **`src/context/`**: Global state (e.g., `PageExitContext`).
- **`src/pages/`**: Route components (`Home.tsx`).
- **`src/styles/`**: Global (`App.css`) and component stylesheets.
- **`src/sanityClient.ts`**: Sanity CMS config.

## 5. Workflow & Git

- **Commits**: Conventional commits (`feat:`, `fix:`, `style:`, `refactor:`).
- **Validation**:
  - Run `pnpm lint` and `pnpm build` before every commit.
- **Secrets**: NEVER commit secrets. Use `.env` (prefixed `VITE_`) or Cloudflare Dashboard.

## 6. Agent Instructions

When modifying this codebase:
1. **Read Context**: Always read the file AND its imports first.
2. **Match Style**: Indentation (2 spaces), "Sharp" design (0 border-radius).
3. **Dependencies**: Check `package.json` before importing new libs.
4. **Safety**: When implementing navigation blocking, use `startTransition`.
5. **Sanity**: Ensure GROQ queries match schema.

---
*Updated for Jade Portfolio Frontend - Jan 2026*
