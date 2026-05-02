## Full Editorial Redesign

Adopt the uploaded "editorial Salesian" style across the whole site — serif headings, sharper components, and the new credibility sections (Stats, Mission split, Pillars, Testimonial).

### Design tokens (global)

Update `src/index.css` and `tailwind.config.ts`:

- **Fonts**: load Playfair Display (700 + 700 italic) from Google Fonts in `index.html`. Add to Tailwind:
  - `font-display` → Playfair Display (was Sora) — used for all headings
  - `font-sans` → Outfit (unchanged) — body text
- **Colors** (HSL, mapped from the upload):
  - `--primary` orange unchanged (already matches `#E8571A`)
  - Add `--charcoal` (15 12% 10%) and `--cream` (30 35% 98%) tokens for the new dark/light section backgrounds
  - Tighten muted text to two tiers (`text-2`, `text-3`) via existing `--muted-foreground` + a new `--muted-foreground-soft`
- **Radius**: introduce a `--radius-sharp: 2px` and use it on buttons and pills (keep `--radius` 0.75rem for cards/inputs so existing shadcn components don't break)
- **New utilities**: `.section-eyebrow` (orange uppercase label with a 24px bar) reused across sections

### Reusable pieces

- `src/components/ui/SectionEyebrow.tsx` — small labeled heading used by every section
- Update `src/components/ui/button.tsx` variants:
  - `default` (orange) → 2px radius, uppercase, letter-spaced, 12px font
  - new `ghost-outline` variant for the white-bordered hero secondary button

### Page-by-page changes

**Hero** (`src/components/Hero.tsx`)
- Replace big sans headline with Playfair serif headline featuring an italic orange accent ("Learn a Trade, *Earn a Living*")
- Add small "Salesian Technical Institute · Ashaiman" badge above the title
- Two CTAs: solid orange "Enroll Now" + ghost-outline "Discover Programs"
- Add bottom-left scroll hint and bottom-right circular logo stamp
- Keep existing hero image; switch overlay to the diagonal charcoal→orange gradient from the upload

**New Stats bar** (new `src/components/Stats.tsx`, placed right under Hero)
- Full-width orange band, 4 columns: Years of Service, Graduates, Programs, Job-Ready Skills
- Numbers in Playfair serif, labels uppercase. Real numbers will need your input — I'll seed sensible placeholders ("60+ Years", "5,000+ Graduates", "10 Programs", "100% Hands-On") that you can correct.

**About → Mission split** (refactor `src/components/About.tsx`)
- Replace the current 4-feature grid with a 50/50 split: left image (existing campus/training photo), right charcoal panel with eyebrow, serif heading with italic accent, two paragraphs, and a Don Bosco quote callout with orange left border
- Move the 4 feature cards into a new **Pillars** section directly below

**Pillars** (new section in About area)
- 3 columns (was 4) with large translucent serif numbers (01, 02, 03), title, description
- Hover: orange top border slides in, soft orange shadow
- Reduce from 4 features to the 3 strongest: Job-Oriented Training, Expert Instructors, Career Growth (drop "Industry Recognition" or merge into Job-Oriented)

**Programs section on Home** (`src/components/Programs.tsx`)
- Editorial header: left serif heading + right intro paragraph (instead of centered)
- 5-column grid on desktop (4 → 3 → 2 → 1 at breakpoints), tighter cards
- Each card: image with dark gradient + hover orange overlay, small icon chip, serif name, short desc, footer with duration pill + circular orange arrow button
- Cards link to existing `/programs/:slug` routes (no route changes)

**Programs page** (`src/pages/Programs.tsx`)
- Adopt same card style as the home section so they feel unified
- Keep all 10 programs and existing routing untouched

**Program detail pages** (`src/pages/ProgramDetail.tsx`)
- Apply new typography (serif headings, eyebrow labels) and sharper button styling
- No structural change to overview/modules/certifications/careers sections

**Student Life page**
- Add the editorial 3-up gallery strip (2fr 1fr 1fr) at the top with hover orange tint and small orange labels, then keep the existing fuller gallery below
- Update headings to serif

**New Testimonial section** (new `src/components/Testimonial.tsx`, placed before Contact on Home)
- Full-bleed dark background (reuse a campus photo with charcoal overlay)
- Centered: small circular logo, large orange quote mark, italic serif quote, orange divider, author + program
- Seed with a placeholder quote ("This place gave me the skills and confidence to start my own electrical business…" — Kwame A., Electrical Installation graduate). You'll want to swap with a real student.

**Apply CTA strip** (new, between Testimonial and Contact)
- Pale-orange band with orange top border
- Left: "Ready to *learn a trade*?" serif heading + short paragraph
- Right: intake badge ("Next Intake: September") + orange "Start Application" button linking to `#contact`

**Contact strip** (small dark band above Footer)
- Charcoal band with 3 inline contact items (Location, Email, Hours) each with an orange circular icon — quick-glance contact info

**Footer** (`src/components/Footer.tsx`)
- Switch background to darker `--dark` token, refine type scale
- Brand column with circular logo, name with orange accent on "Institute", description, single Facebook social button (per Core memory: Facebook only)
- Three columns: Explore, Programs (top 5 linked), Contact
- Bottom bar keeps the Greyfixtech credit (per Core memory)

### Navigation
- Update `src/components/Navigation.tsx`: serif "Don Bosco" wordmark with orange accent, sharper 2px CTA, underline-on-active link style, transparent over hero / charcoal when scrolled
- Mobile menu: full-screen charcoal overlay with large serif links (matches upload)

### Responsive
- Mirror the upload's breakpoints (1100, 1000, 860, 560) in Tailwind classes
- Programs grid: 5 → 4 → 3 → 2 → 1
- Stats: 4 → 2 columns
- Mission split: stacks at 860px

### What's NOT changing
- All routing (`/`, `/about`, `/programs`, `/programs/:slug`, `/student-life`)
- SEO setup (`react-helmet-async`)
- Program data in `src/data/programDetails.ts`
- News carousel behavior
- Facebook-only social rule, Greyfixtech footer credit, scroll-to-top behavior

### Content I'll need from you afterward
1. Real stats (graduates, years, placement %)
2. One real student testimonial (name + program + quote)
3. Confirmation of next intake month for the CTA strip

I'll seed reasonable placeholders so the site looks complete; you can swap them via Visual Edits or a quick follow-up.

### Execution order
1. Tokens, fonts, button variants (foundation)
2. Navigation + Hero + Stats
3. About → Mission split + Pillars
4. Programs (home + page) + ProgramDetail polish
5. Student Life gallery strip
6. Testimonial + Apply CTA + Contact strip + Footer
7. Mobile pass + memory update (note new sections + design system)
