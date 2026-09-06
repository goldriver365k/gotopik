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
