

## Vertical Auto-Shuffling News Carousel

Transform the News & Announcements section from a static 3-column grid into an auto-rotating vertical carousel that cycles through announcements one at a time with smooth sliding animations.

### What Changes

**Current behavior:** All 3 announcement cards are displayed side-by-side in a grid, always visible.

**New behavior:** One announcement card is shown at a time, and they automatically slide vertically (upward) to reveal the next one every few seconds. The animation loops continuously, creating a dynamic "news ticker" feel.

### Features
- Cards slide upward with a smooth transition when switching
- Auto-advances every ~4 seconds
- Includes small dot indicators so visitors can see which announcement is active
- Pauses auto-rotation when hovered (so users can read)
- Centered single card layout with a max-width for readability

### Technical Details

**File:** `src/components/News.tsx`

1. Add a `useState` for tracking the active announcement index
2. Add a `useEffect` with `setInterval` to auto-advance the index every 4 seconds
3. Use `framer-motion`'s `AnimatePresence` with vertical slide transitions (`y` axis enter/exit)
4. Replace the 3-column grid with a single centered card container
5. Add dot indicators below the card for visual feedback
6. Pause the interval on mouse hover using `onMouseEnter`/`onMouseLeave`
7. The card will animate out upward and the next card will animate in from below, creating a smooth vertical shuffle effect
