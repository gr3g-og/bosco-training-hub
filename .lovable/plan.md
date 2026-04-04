

## Add Developer Credit to Footer

Add a subtle "Website by Greyfixtech" credit line in the footer's copyright section.

### What Changes

A small credit link will appear next to the copyright text at the bottom of the footer, styled in a muted tone to keep it understated.

### Technical Details

**File:** `src/components/Footer.tsx`

In the copyright `<div>` at the bottom, add a separator dot and a link after the copyright text:

```
© 2026 Don Bosco Training Institute, Ashaiman. All rights reserved.
```
becomes:
```
© 2026 Don Bosco Training Institute, Ashaiman. All rights reserved.  ·  Website by Greyfixtech
```

The "Greyfixtech" text will be an `<a>` tag linking to `https://greyfixtech.com` with `target="_blank"` and `rel="noopener noreferrer"`, styled with `hover:text-secondary` to match the existing link styles.

