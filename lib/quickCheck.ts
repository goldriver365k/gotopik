// Shared localStorage utility for the Quick Check result.
// Quick Check is a fast, 7-question correction to Self Level — not the
// official /diagnostic Level Test — so its result is stored separately
// and never touches learningLanguage, selfLevel, topikHistory,
// goTopikProgress, or diagnosticResult.

import {
  QUICK_CHECK_QUESTIONS,
  type QuickCheckQuestionType,
} from "@/data/quickCheckQuestions";

export type QuickCheckScores = {
  vocabulary: number;
  grammar: number;
  reading: number;
  listening: number;
};

export type QuickCheckResult = {
  score: number;
  total: number;
  estimatedLevel: number;
  scores: QuickCheckScores;
  completedAt: string;
};

const STORAGE_KEY = "quickCheckResult";

// MVP scoring rule — a development placeholder, easy to retune later.
// Not an official TOPIK grade, used only as internal recommendation data.
export function estimateQuickCheckLevel(correctCount: number): number {
  if (correctCount <= 1) return 1;
  if (correctCount <= 3) return 2;
  if (correctCount === 4) return 3;
  if (correctCount === 5) return 4;
  if (correctCount === 6) return 5;
  return 6;
}

function percentForType(
  type: QuickCheckQuestionType,
  selections: Record<number, number>,
): number {
  const questions = QUICK_CHECK_QUESTIONS.filter((q) => q.type === type);
  if (questions.length === 0) return 0;
  const correctCount = questions.filter(
    (q) => selections[q.id] === q.correctAnswer,
  ).length;
  return Math.round((correctCount / questions.length) * 100);
}

export function calculateQuickCheckResult(
  selections: Record<number, number>,
): QuickCheckResult {
  const correctCount = QUICK_CHECK_QUESTIONS.filter(
    (q) => selections[q.id] === q.correctAnswer,
  ).length;

  return {
    score: correctCount,
    total: QUICK_CHECK_QUESTIONS.length,
    estimatedLevel: estimateQuickCheckLevel(correctCount),
    scores: {
      vocabulary: percentForType("vocabulary", selections),
      grammar: percentForType("grammar", selections),
      reading: percentForType("reading", selections),
      listening: percentForType("listening", selections),
    },
    completedAt: new Date().toISOString(),
  };
}

export function saveQuickCheckResult(result: QuickCheckResult): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  } catch {
    // Storage unavailable or full — fail silently, nothing to recover here.
  }
}

export function getQuickCheckResult(): QuickCheckResult | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (
      typeof parsed.score !== "number" ||
      typeof parsed.total !== "number" ||
      typeof parsed.estimatedLevel !== "number"
    ) {
      return null;
    }

    return {
      score: parsed.score,
      total: parsed.total,
      estimatedLevel: parsed.estimatedLevel,
      scores: {
        vocabulary: Number(parsed.scores?.vocabulary) || 0,
        grammar: Number(parsed.scores?.grammar) || 0,
        reading: Number(parsed.scores?.reading) || 0,
        listening: Number(parsed.scores?.listening) || 0,
      },
      completedAt: typeof parsed.completedAt === "string" ? parsed.completedAt : "",
    };
  } catch {
    return null;
  }
}
