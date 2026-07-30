# Lived Experience Collection — student concept prototype

**This is not an Amazon product, and it is not affiliated with or endorsed by Amazon.**
It is a non-functional coursework mockup built for COMMLD 560 (Inclusive Design & Product
Equity) at the University of Washington, for a class exercise whose assigned client was
Amazon Kindle Direct Publishing. Every book, author, rating, and price on these pages is
fictional. No control does anything.

The concept: a browsable collection of first-person, lived-experience books by KDP authors
who never saw themselves as writers — where the reason to pick one up is that you can reach
the person who lived it.

## Why the books are made up

KDP already has no shortage of real books that would belong in this collection — the
shelf exists, it is just not browsable. The titles here are invented anyway, for four
reasons:

1. **The feature is opt-in, and no real author opted in.** Staging a living author's
   name next to an access tier and a Q&A queue she never agreed to would be doing the
   opposite of what the concept is for.
2. **Covers and descriptions are the authors' copyright**, not ours to reproduce in a
   class mockup.
3. **The demo has to show states real listings don't have** — an unverified
   attestation, a question awaiting an answer, access paused, a declined request.
   Eight of them, on one page.
4. **Six languages.** Invented copy can be translated; a real author's own words
   cannot be rewritten into Filipino or Arabic and still be her words.

Curation from the real catalog is the thing to build; fiction is the thing to demo with.

## The five pages

Only `The Road from Manila` has a detail page; every other title is deliberately left
unlinked rather than pointing at a page that does not exist. `search.html` is not linked
from anywhere — the store search box is inert on every page, and wiring it would
contradict the banner that says no control works. Open it directly.

| File | What it is | Reachable from |
|---|---|---|
| `index.html` | The Lived Experience collection landing page — the first eight books, each with its author's statement on the card | `browse.html`, `book.html`, `author.html`, `search.html` |
| `browse.html` | The Kindle Store category node the collection lives in: 48 books, the store's own rail and sort, unchanged | `index.html` |
| `book.html` | The detail page — the attestation, and the ask-a-question flow with all eight of its states | `index.html`, `browse.html`, `search.html`, `author.html` |
| `author.html` | Rosa Delgado's author page — answered questions, and her access settings | `book.html` |
| `search.html` | An ordinary results page, to show what the concept does **not** change about search | open directly |

Readable in English, Español, 简体中文, Filipino, العربية, and Français. The page follows
your browser's language preference on first load; the globe control in the nav changes it,
and `?lang=es` (or `zh`, `fil`, `ar`, `fr`, `en`) opens it in a specific language.

## Screens

All five pages are built for phone, tablet and desktop, and verified with no horizontal
scrolling from 320px to 1920px in all six languages. `responsive.css` carries the shared
chrome and the breakpoint scale and explains every choice; each page's own `<style>` block
carries its own grid. Breakpoints are in `em`, so the layout also reflows for a reader who
has raised their browser's default text size rather than only for a narrower window.

Worth knowing when reviewing on a phone: the store search box sits on its own full-width
row below 600px (Amazon's own phone-header shape), the collection grid is two covers across
rather than one, `book.html` has a genuine two-column tablet layout between 700 and 980px,
and touch targets grow to 44px on any device with a coarse pointer while the mouse
rendering keeps the live store's tighter sizes.

Reader Discovery team — Jakob Picciotto · Pablo Ortega · Jalen Oscar Howard · Wanting Chao
