// Central STEP content loader. Every study screen (WORDS, SENTENCES,
// GRAMMAR, LISTENING, READING, PRACTICE, COMPLETE) goes through this
// instead of importing sample data directly, so content stays out of
// components and adding a new STEP is just adding one file here.
import type { StepContent } from "@/types/content";
import { STEP_1_1 } from "@/data/content/level1/step01";
import { STEP_1_2 } from "@/data/content/level1/step02";

// Keyed by "{level}-{step}". Add an entry here as new STEP files are
// written — there is no fallback that auto-clones another STEP's content,
// so a STEP with no entry simply has no content yet (getStepContent
// returns null and the screens show a "content coming soon" notice).
const STEP_CONTENT: Record<string, StepContent> = {
  "1-1": STEP_1_1,
  "1-2": STEP_1_2,
};

export function getStepContent(level: number, step: number): StepContent | null {
  return STEP_CONTENT[`${level}-${step}`] ?? null;
}
