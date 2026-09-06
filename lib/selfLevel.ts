// Shared localStorage utility for the user's self-reported Korean level.
// Stored separately from goTopikProgress/diagnosticResult — a self-reported
// level is just a starting signal and must never overwrite learning progress
// or diagnostic test results.

export type SelfLevelOption = {
  value: string;
  label: string;
};

export const SELF_LEVEL_STORAGE_KEY = "selfLevel";

export const SELF_LEVEL_OPTIONS: SelfLevelOption[] = [
  { value: "beginner", label: "I'm just starting." },
  { value: "basic", label: "I know basic words and short sentences." },
  { value: "everyday", label: "I can understand everyday Korean." },
  { value: "intermediate", label: "I can read longer Korean texts." },
  { value: "topik_experience", label: "I've taken TOPIK before." },
  { value: "not_sure", label: "I'm not sure." },
];

export function getSavedSelfLevel(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(SELF_LEVEL_STORAGE_KEY);
}

// Short display label for screens (like Level Profile) that show the raw
// selfLevel value back to the user instead of its full option sentence.
const SELF_LEVEL_SHORT_LABELS: Record<string, string> = {
  beginner: "Just Starting",
  basic: "Basic",
  everyday: "Everyday",
  intermediate: "Intermediate",
  topik_experience: "TOPIK Experience",
  not_sure: "Not Sure",
};

export function getSelfLevelShortLabel(value: string): string {
  return SELF_LEVEL_SHORT_LABELS[value] ?? value;
}
