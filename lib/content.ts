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
import { STEP_2_1 } from "@/data/content/level2/step01";
import { STEP_2_2 } from "@/data/content/level2/step02";
import { STEP_2_3 } from "@/data/content/level2/step03";
import { STEP_2_4 } from "@/data/content/level2/step04";
import { STEP_2_5 } from "@/data/content/level2/step05";
import { STEP_2_6 } from "@/data/content/level2/step06";
import { STEP_2_7 } from "@/data/content/level2/step07";
import { STEP_2_8 } from "@/data/content/level2/step08";
import { STEP_2_9 } from "@/data/content/level2/step09";
import { STEP_2_10 } from "@/data/content/level2/step10";
import { STEP_2_11 } from "@/data/content/level2/step11";
import { STEP_2_12 } from "@/data/content/level2/step12";
import { STEP_2_13 } from "@/data/content/level2/step13";
import { STEP_2_14 } from "@/data/content/level2/step14";
import { STEP_3_1 } from "@/data/content/level3/step01";
import { STEP_3_2 } from "@/data/content/level3/step02";
import { STEP_3_3 } from "@/data/content/level3/step03";

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
  "2-1": STEP_2_1,
  "2-2": STEP_2_2,
  "2-3": STEP_2_3,
  "2-4": STEP_2_4,
  "2-5": STEP_2_5,
  "2-6": STEP_2_6,
  "2-7": STEP_2_7,
  "2-8": STEP_2_8,
  "2-9": STEP_2_9,
  "2-10": STEP_2_10,
  "2-11": STEP_2_11,
  "2-12": STEP_2_12,
  "2-13": STEP_2_13,
  "2-14": STEP_2_14,
  "3-1": STEP_3_1,
  "3-2": STEP_3_2,
  "3-3": STEP_3_3,
};

export function getStepContent(level: number, step: number): StepContent | null {
  return STEP_CONTENT[`${level}-${step}`] ?? null;
}

// TOPIK 1-2 never set `writing` (all 26 STEP files omit it) and get the
// original 6-section flow. TOPIK 3+ STEPs that do provide writing items
// insert a WRITING section between READING and PRACTICE. Both branches
// share this so the study screens never hardcode which flow a STEP uses.
export function hasWriting(content: StepContent | null): boolean {
  return !!content?.writing && content.writing.length > 0;
}

export function getSectionCount(content: StepContent | null): number {
  return hasWriting(content) ? 7 : 6;
}
