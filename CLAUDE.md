# GO TOPIK

Next.js + TypeScript + Tailwind CSS. Mobile-first TOPIK exam prep app.
No backend — all state in localStorage. No Supabase/Firebase/Stripe/AI/login yet.

## Design

- White background, mint accent (#12B886), black/dark-gray text
- Rounded cards, generous spacing, mobile-first
- No heavy shadows or gradients
- Reuse existing components in `components/` — don't create new design systems

## Core rule: fully open learning structure

- No locks, no progression gates, no "complete X to unlock Y"
- All TOPIK levels (1–6) and all STEPs are always clickable
- `completedSteps` in localStorage is display-only status, never a gate

## Structure

- `app/` — routes. Study flow: `/study/[level]/[step]` (WORDS) →
  `.../sentences` → `.../grammar` → `.../listening` → `.../reading` →
  `.../practice` → `.../complete`
- `components/` — shared UI (Card, PrimaryButton, SecondaryButton, Header,
  ProgressBar, BottomNavigation, StepCard/StepList, WordCard, SentenceCard,
  GrammarCard, QuizQuestion, etc.)
- `data/` — sample content files (`sampleWords.ts`, `sampleSentences.ts`,
  `sampleGrammar.ts`, `sampleListening.ts`, `sampleReading.ts`,
  `samplePractice.ts`, `diagnosticQuestions.ts`)
- `lib/` — `levels.ts` (6 levels, stepCount each), `steps.ts` (status calc),
  `progress.ts` (localStorage progress), `diagnostic.ts` (test scoring),
  `languages.ts`, `i18n.ts` (UI text dictionary, 10 languages)
- `hooks/` — `useSaveProgress`, `useLang`

## Current completion status

- Screens/UX: ~95% done (Landing → COMPLETE, HOME/STUDY/TEST/MY all built)
- Real content: ~1% — only TOPIK 1 STEP 1 has real data (5 words, 3
  sentences, 1 grammar point, 1 listening Q, 1 reading Q, 5 practice Qs).
  All other 99 STEPs (TOPIK 1 STEPs 2–12, TOPIK 2–6 all STEPs) reuse this
  same sample data via the shared data files.
- UI text: fully translated to 10 languages (`lib/i18n.ts`)
- Content translations: only the STEP 1 sample data has all 10 languages;
  new content added must follow the same `Record<langCode, string>` pattern
- No backend, no auth, no TTS, no deployment yet

## Content data pattern

Each data file exports an array of typed objects. To add real content for a
new level/STEP, the pattern is: add entries with the same shape, translated
into the language codes already used (en, vi, zh, mn, uz, ne, ja, th, id,
ru — see `lib/languages.ts`). The screens are already data-driven — no
component changes needed to add content, only new data.

## Rules carried over from prior work

- One feature/stage per request — don't build ahead of what's asked
- Don't rewrite or redesign existing working screens unnecessarily
- Reuse existing components/helpers instead of duplicating logic
- No new state-management libraries; React state + localStorage only
- SSR/hydration: any component reading localStorage (language, progress)
  must render an SSR-safe default first and update via `useEffect` after
  mount (see `hooks/useLang.ts` for the pattern) — mismatched values here
  cause hydration errors
- After changes: run `npm run build` and `npx eslint . --ext .ts,.tsx`
  before considering a task done
