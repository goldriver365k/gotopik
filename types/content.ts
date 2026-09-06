// Standard shape every STEP's learning content is loaded into. Composes the
// existing per-domain types already used by the WORDS/SENTENCES/GRAMMAR/
// LISTENING/READING/PRACTICE screens — no new domain types, no new
// translation structure, so the display components need no changes.
import type { Word } from "@/data/sampleWords";
import type { Sentence } from "@/data/sampleSentences";
import type { Grammar } from "@/data/sampleGrammar";
import type { ListeningQuestionData } from "@/data/sampleListening";
import type { ReadingQuestionData } from "@/data/sampleReading";
import type { PracticeQuestionData } from "@/data/samplePractice";

export interface StepContent {
  level: number;
  step: number;
  title: string;
  words: Word[];
  sentences: Sentence[];
  grammar: Grammar[];
  listening: ListeningQuestionData[];
  reading: ReadingQuestionData[];
  practice: PracticeQuestionData[];
  // TOPIK 3+ can add `writing: WritingItem[]` here later — not implemented yet.
}
