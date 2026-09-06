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

// TOPIK 3+'s Writing section. Rule-based only (no AI grading): a prompt,
// optional keywords, and an optional sample answer + key-point explanation
// the learner checks their own writing against. Uses the same
// `Record<string, string>` localization shape as every other content type
// here (translations/meanings/explanations) — no new translation type.
export interface WritingItem {
  id: string;
  type: "sentence-completion" | "sentence-order" | "keyword-writing" | "short-response";
  prompt: Record<string, string>;
  keywords?: string[];
  sampleAnswer?: Record<string, string>;
  explanation?: Record<string, string>;
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
