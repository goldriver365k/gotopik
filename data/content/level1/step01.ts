// TOPIK 1 STEP 1 — the project's one real, hand-written lesson.
// The content itself still lives in data/sample*.ts (unchanged, ids now
// follow the L{level}-S{step}-{type}{number} convention); this file just
// wires it into the standard StepContent shape for lib/content.ts.
import type { StepContent } from "@/types/content";
import { SAMPLE_WORDS } from "@/data/sampleWords";
import { SAMPLE_SENTENCES } from "@/data/sampleSentences";
import { SAMPLE_GRAMMAR } from "@/data/sampleGrammar";
import { SAMPLE_LISTENING } from "@/data/sampleListening";
import { SAMPLE_READING } from "@/data/sampleReading";
import { SAMPLE_PRACTICE } from "@/data/samplePractice";

export const STEP_1_1: StepContent = {
  level: 1,
  step: 1,
  title: "학교 (School)",
  words: SAMPLE_WORDS,
  sentences: SAMPLE_SENTENCES,
  grammar: SAMPLE_GRAMMAR,
  listening: SAMPLE_LISTENING,
  reading: SAMPLE_READING,
  practice: SAMPLE_PRACTICE,
};
