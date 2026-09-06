// Shared localStorage utility for GO TOPIK diagnostic test results.
// Stored separately from goTopikProgress (lib/progress.ts) — a diagnostic
// result is a recommendation only and must never overwrite learning progress.

import { DIAGNOSTIC_QUESTIONS, type DiagnosticQuestionType } from "@/data/diagnosticQuestions";

export type DiagnosticScores = {
  vocabulary: number;
  grammar: number;
  reading: number;
};

export type DiagnosticResult = {
  estimatedLevel: number;
  recommendedStep: number;
  scores: DiagnosticScores;
  completedAt: string;
};

const STORAGE_KEY = "diagnosticResult";

// MVP scoring rule — a development placeholder, easy to retune later without
// touching any UI code. Thresholds are "correct answers needed to reach this
// level or higher"; the highest matching threshold wins.
const LEVEL_THRESHOLDS: { minCorrect: number; level: number }[] = [
  { minCorrect: 0, level: 1 },
  { minCorrect: 3, level: 2 },
  { minCorrect: 5, level: 3 },
  { minCorrect: 7, level: 4 },
  { minCorrect: 9, level: 5 },
  { minCorrect: 10, level: 6 },
];

// MVP recommendation rule — also a placeholder, tune freely later.
const RECOMMENDED_STEP_BY_LEVEL: Record<number, number> = {
  1: 1,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 6,
};

export function estimateLevel(correctCount: number): number {
  let level = 1;
  for (const threshold of LEVEL_THRESHOLDS) {
    if (correctCount >= threshold.minCorrect) level = threshold.level;
  }
  return level;
}

export function getRecommendedStep(level: number): number {
  return RECOMMENDED_STEP_BY_LEVEL[level] ?? 1;
}

function percentForType(
  type: DiagnosticQuestionType,
  selections: Record<number, number>,
): number {
  const questions = DIAGNOSTIC_QUESTIONS.filter((q) => q.type === type);
  if (questions.length === 0) return 0;
  const correctCount = questions.filter(
    (q) => selections[q.id] === q.correctAnswer,
  ).length;
  return Math.round((correctCount / questions.length) * 100);
}

export function calculateDiagnosticResult(
  selections: Record<number, number>,
): DiagnosticResult {
  const correctCount = DIAGNOSTIC_QUESTIONS.filter(
    (q) => selections[q.id] === q.correctAnswer,
  ).length;
  const estimatedLevel = estimateLevel(correctCount);

  return {
    estimatedLevel,
    recommendedStep: getRecommendedStep(estimatedLevel),
    scores: {
      vocabulary: percentForType("vocabulary", selections),
      grammar: percentForType("grammar", selections),
      reading: percentForType("reading", selections),
    },
    completedAt: new Date().toISOString(),
  };
}

export function saveDiagnosticResult(result: DiagnosticResult): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  } catch {
    // Storage unavailable or full — fail silently, nothing to recover here.
  }
}

export function getDiagnosticResult(): DiagnosticResult | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      typeof parsed.estimatedLevel !== "number" ||
      typeof parsed.recommendedStep !== "number" ||
      typeof parsed.scores !== "object" ||
      parsed.scores === null
    ) {
      return null;
    }
    return {
      estimatedLevel: parsed.estimatedLevel,
      recommendedStep: parsed.recommendedStep,
      scores: {
        vocabulary: Number(parsed.scores.vocabulary) || 0,
        grammar: Number(parsed.scores.grammar) || 0,
        reading: Number(parsed.scores.reading) || 0,
      },
      completedAt: typeof parsed.completedAt === "string" ? parsed.completedAt : "",
    };
  } catch {
    return null;
  }
}
