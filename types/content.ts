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

// Placeholder shape for TOPIK 3+'s future Writing section. Intentionally
// minimal — no Writing screen, component, or real content exists yet.
// Defined now only so `writing?: WritingItem[]` can be added to
// StepContent without a breaking change once Writing is actually built.
export interface WritingItem {
  id: string;
  prompt: string;
  translations: Record<string, string>;
}

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
  // Optional and unused by TOPIK 1-2: added so TOPIK 3+ can attach a
  // Writing section later without changing this interface again or
  // breaking any existing STEP file (all 26 omit this field today).
  writing?: WritingItem[];
}
