

## Create Dedicated Pages for Each Program

Add individual detail pages for all 9 training programs, accessible by clicking program cards on the `/programs` page.

### What Changes

Each program card becomes clickable, linking to `/programs/:slug`. Each detail page shows:
- Hero banner with the program image
- **Overview** section describing the program
- **What You'll Learn** — key topics/modules covered
- **Certification** — what qualification you earn (e.g., NVTI Certificate II)
- **Career Opportunities** — jobs you can pursue after completing the program
- A "Back to Programs" link and an "Enroll Now" CTA

### Technical Details

**New file:** `src/pages/ProgramDetail.tsx`
- A single dynamic page component that reads the `:slug` param from the URL
- Looks up program data from a local data object containing all 9 programs' details (overview, modules, certification, careers)
- Reuses `Navigation`, `Footer`, `SEO` components
- Shows a 404-style message if the slug doesn't match

**New file:** `src/data/programDetails.ts`
- Contains a record/map keyed by slug with structured data for each program:
  - `name`, `image`, `overview` (paragraph), `modules` (string array), `certification` (string), `careers` (string array)
- All 9 programs: AC/Refrigeration, Automobile, Catering, Cosmetology, Crane, Driving, Electrical/Solar, Forklift/Logistics, IT/Graphic Design

**Edit:** `src/App.tsx`
- Add route: `<Route path="/programs/:slug" element={<ProgramDetail />} />`

**Edit:** `src/pages/Programs.tsx`
- Wrap each program card in a `<Link to={/programs/${program.slug}}>` so clicking navigates to the detail page

### Content Approach

Program details (modules, certifications, career paths) will be populated with accurate content based on standard NVTI/vocational training curricula for each field. You can review and adjust the text after implementation.

