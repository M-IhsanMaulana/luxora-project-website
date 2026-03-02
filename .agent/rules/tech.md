---
trigger: always_on
---

# Tech Stack & Dependencies

## Core Technologies
- **Framework:** Next.js (App Router v16.1.6+)
- **Library:** React 19
- **Language:** Strict TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion

## Development Setup
- **Package Manager:** npm (node v20+)
- **Linting:** ESLint standard with Next.js.
- **Environment Variables:** Handled securely via Next.js standard `.env.local`.

## Technical Constraints
1. **Client vs Server Components:** Carefully isolate animations (Framer Motion) to `"use client"` components, keeping data-fetching or static layouts on the server where possible.
2. **Tailwind Best Practices:** Avoid ad-hoc inline styles. Keep the structure clean and responsive using utility classes.
3. **Aesthetics:** The design MUST feel premium and state of the art. Do not use generic placeholders; utilize stunning visual combinations.
