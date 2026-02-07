

## Make News Card Stand Out with Primary Accent Border

The news card currently blends into the background because it uses `bg-background` with a transparent border on a `bg-muted/30` section. Adding a primary (orange/coral) accent border will give it a bold, branded look.

### What Changes

**Current:** Card has a transparent border and white background, making it nearly invisible against the light section background.

**New:** Card will have a visible left border in the primary orange/coral color, plus a subtle shadow to add depth. This creates a clear visual separation and reinforces the brand identity.

### Technical Details

**File:** `src/components/News.tsx` (line 110)

Update the Card's className from:
- `border border-transparent` (invisible border)

To:
- `border-l-4 border-l-primary border border-border/50 shadow-md` (bold orange left accent border, light surrounding border, and medium shadow)

This gives the card a clear left-edge highlight in the brand color while keeping the rest of the card clean and readable.

