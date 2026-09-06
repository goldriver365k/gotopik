// Shared localStorage utility for the user's self-reported past TOPIK result.
// Reference information only — never used to auto-confirm a current level.
// Stored separately from learningLanguage/selfLevel/goTopikProgress/
// diagnosticResult and never touches any of those keys.

export type TopikTestType = "topik1" | "topik2" | "unknown";
export type TopikWhen = "within_6m" | "6_12m" | "1_2y" | "over_2y" | "unknown";

export type TopikHistory = {
  testType: TopikTestType | null;
  level: number | null;
  score: number | null;
  when: TopikWhen | null;
};

const STORAGE_KEY = "topikHistory";

const DEFAULT_HISTORY: TopikHistory = {
  testType: null,
  level: null,
  score: null,
  when: null,
};

export const TEST_TYPE_OPTIONS: { value: TopikTestType; label: string }[] = [
  { value: "topik1", label: "TOPIK I" },
  { value: "topik2", label: "TOPIK II" },
  { value: "unknown", label: "I'm not sure" },
];

// Cost-conscious v1: TOPIK I and II share the same Level 1–6 picker rather
// than branching the option list per test type.
export const LEVEL_OPTIONS: { value: number; label: string }[] = [
  { value: 1, label: "Level 1" },
  { value: 2, label: "Level 2" },
  { value: 3, label: "Level 3" },
  { value: 4, label: "Level 4" },
  { value: 5, label: "Level 5" },
  { value: 6, label: "Level 6" },
];

export const WHEN_OPTIONS: { value: TopikWhen; label: string }[] = [
  { value: "within_6m", label: "Within 6 months" },
  { value: "6_12m", label: "6–12 months ago" },
  { value: "1_2y", label: "1–2 years ago" },
  { value: "over_2y", label: "More than 2 years ago" },
  { value: "unknown", label: "I don't remember" },
];

export function getTopikHistory(): TopikHistory {
  if (typeof window === "undefined") return DEFAULT_HISTORY;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_HISTORY;

    const parsed = JSON.parse(raw);
    return {
      testType: typeof parsed.testType === "string" ? parsed.testType : null,
      level: typeof parsed.level === "number" ? parsed.level : null,
      score: typeof parsed.score === "number" ? parsed.score : null,
      when: typeof parsed.when === "string" ? parsed.when : null,
    };
  } catch {
    return DEFAULT_HISTORY;
  }
}

export function saveTopikHistory(history: TopikHistory): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch {
    // Storage unavailable or full — fail silently, nothing to recover here.
  }
}
