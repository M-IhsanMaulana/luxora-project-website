---
trigger: always_on
---

# System Architecture & Folder Structure

## 1. Actual Folder Structure
The Next.js application follows the App Router architecture within the `src/` directory.

Expected directory structure as the project evolves:
- **`src/app/`**: Next.js App Router pages, layouts, globals CSS, and routing logic.
- **`src/components/`**: Reusable React components (UI elements, layout components like Navbar, Footer). *(To be created)*
- **`src/lib/`**: Utility functions, animation variants, and helpers. *(To be created)*
- **`public/`**: Static assets (images, icons, fonts).
- **`eslint.config.mjs` / `postcss.config.mjs`**: Configuration files for linting and styling.

## 2. Core Mechanics & Architecture Rules
### Component Driven Design
We use a modular approach, strictly separating UI components from the page routing logic to ensure maintainability.

### Styling & Animation
- **Tailwind CSS v4** for responsive, utility-first styling.
- **Framer Motion** (to be installed) for declarative animations, page motion, and micro-interactions.

### Tech Brand Feel
Follow modern tech brand structures: distinct Hero sections, Feature grids, alternating content blocks, and clear Call-To-Action (CTA) elements.