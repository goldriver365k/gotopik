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
import { STEP_3_4 } from "@/data/content/level3/step04";
import { STEP_3_5 } from "@/data/content/level3/step05";
import { STEP_3_6 } from "@/data/content/level3/step06";
import { STEP_3_7 } from "@/data/content/level3/step07";
import { STEP_3_8 } from "@/data/content/level3/step08";
import { STEP_3_9 } from "@/data/content/level3/step09";
import { STEP_3_10 } from "@/data/content/level3/step10";
import { STEP_3_11 } from "@/data/content/level3/step11";
import { STEP_3_12 } from "@/data/content/level3/step12";
import { STEP_3_13 } from "@/data/content/level3/step13";
import { STEP_3_14 } from "@/data/content/level3/step14";
import { STEP_3_15 } from "@/data/content/level3/step15";
import { STEP_3_16 } from "@/data/content/level3/step16";
import { STEP_4_1 } from "@/data/content/level4/step01";
import { STEP_4_2 } from "@/data/content/level4/step02";
import { STEP_4_3 } from "@/data/content/level4/step03";
import { STEP_4_4 } from "@/data/content/level4/step04";
import { STEP_4_5 } from "@/data/content/level4/step05";
import { STEP_4_6 } from "@/data/content/level4/step06";
import { STEP_4_7 } from "@/data/content/level4/step07";
import { STEP_4_8 } from "@/data/content/level4/step08";
import { STEP_4_9 } from "@/data/content/level4/step09";
import { STEP_4_10 } from "@/data/content/level4/step10";
import { STEP_4_11 } from "@/data/content/level4/step11";
import { STEP_4_12 } from "@/data/content/level4/step12";
import { STEP_4_13 } from "@/data/content/level4/step13";
import { STEP_4_14 } from "@/data/content/level4/step14";
import { STEP_4_15 } from "@/data/content/level4/step15";
import { STEP_4_16 } from "@/data/content/level4/step16";
import { STEP_4_17 } from "@/data/content/level4/step17";
import { STEP_4_18 } from "@/data/content/level4/step18";

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
  "3-4": STEP_3_4,
  "3-5": STEP_3_5,
  "3-6": STEP_3_6,
  "3-7": STEP_3_7,
  "3-8": STEP_3_8,
  "3-9": STEP_3_9,
  "3-10": STEP_3_10,
  "3-11": STEP_3_11,
  "3-12": STEP_3_12,
  "3-13": STEP_3_13,
  "3-14": STEP_3_14,
  "3-15": STEP_3_15,
  "3-16": STEP_3_16,
  "4-1": STEP_4_1,
  "4-2": STEP_4_2,
  "4-3": STEP_4_3,
  "4-4": STEP_4_4,
  "4-5": STEP_4_5,
  "4-6": STEP_4_6,
  "4-7": STEP_4_7,
  "4-8": STEP_4_8,
  "4-9": STEP_4_9,
  "4-10": STEP_4_10,
  "4-11": STEP_4_11,
  "4-12": STEP_4_12,
  "4-13": STEP_4_13,
  "4-14": STEP_4_14,
  "4-15": STEP_4_15,
  "4-16": STEP_4_16,
  "4-17": STEP_4_17,
  "4-18": STEP_4_18,
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
