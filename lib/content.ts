// Central STEP content loader. Every study screen (WORDS, SENTENCES,
// GRAMMAR, LISTENING, READING, PRACTICE, COMPLETE) goes through this
// instead of importing sample data directly, so content stays out of
// components and adding a new STEP is just adding one file here.
import type { StepContent } from "@/types/content";
import { STEP_1_1 } from "@/data/content/level1/step01";
import { STEP_1_2 } from "@/data/content/level1/step02";
import { STEP_1_3 } from "@/data/content/level1/step03";
import { STEP_1_4 } from "@/data/content/level1/step04";
import { STEP_1_5 } from "@/data/content/level1/step05";
import { STEP_1_6 } from "@/data/content/level1/step06";
import { STEP_1_7 } from "@/data/content/level1/step07";
import { STEP_1_8 } from "@/data/content/level1/step08";
import { STEP_1_9 } from "@/data/content/level1/step09";
import { STEP_1_10 } from "@/data/content/level1/step10";
import { STEP_1_11 } from "@/data/content/level1/step11";
import { STEP_1_12 } from "@/data/content/level1/step12";

// Keyed by "{level}-{step}". Add an entry here as new STEP files are
// written — there is no fallback that auto-clones another STEP's content,
// so a STEP with no entry simply has no content yet (getStepContent
// returns null and the screens show a "content coming soon" notice).
const STEP_CONTENT: Record<string, StepContent> = {
  "1-1": STEP_1_1,
  "1-2": STEP_1_2,
  "1-3": STEP_1_3,
  "1-4": STEP_1_4,
  "1-5": STEP_1_5,
  "1-6": STEP_1_6,
  "1-7": STEP_1_7,
  "1-8": STEP_1_8,
  "1-9": STEP_1_9,
  "1-10": STEP_1_10,
  "1-11": STEP_1_11,
  "1-12": STEP_1_12,
};

export function getStepContent(level: number, step: number): StepContent | null {
  return STEP_CONTENT[`${level}-${step}`] ?? null;
}
