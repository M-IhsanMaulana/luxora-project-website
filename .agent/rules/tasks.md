---
trigger: always_on
---

# LUXORA BOT WEBSITE - TASK DOCUMENTATION AND WORKFLOW RULES

## 1. CREATING A NEW PAGE ROUTE
### Files to Modify:
- `src/app/[route-name]/page.tsx`

### Execution Steps:
1. Create a directory named after your desired route in `src/app/`.
2. Add a `page.tsx` file inside exporting a default React component.
3. Always export a `metadata` object for SEO optimization (e.g., `<title>` and `<meta name="description">`).

### Technical Constraints:
- Pages should ideally remain Server Components unless client-side interactivity is strictly required.

## 2. ADDING UI ANIMATIONS WITH FRAMER MOTION
### Files to Modify:
- A new or existing file under `src/components/` (e.g., `HeroSection.tsx`)

### Execution Steps:
1. Ensure the file starts with `"use client";`.
2. Import `{ motion }` from `"framer-motion"`.
3. Replace standard HTML tags with their motion equivalents (e.g., `<motion.div>`).
4. Add `initial`, `animate`, `transition`, or `whileInView` properties to define the animation behavior.

### Technical Constraints:
- Avoid overly long or generic animations that hurt basic usability. Keep them snappy (around duration 0.3s to 0.7s) and purposeful.