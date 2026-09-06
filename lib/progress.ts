// Shared localStorage utility for GO TOPIK learning progress.
// Does not touch `learningLanguage` — that key is owned by lib/languages.ts.

import { getLevel } from "@/lib/levels";
import { t, type UiTextKey } from "@/lib/i18n";

export type StepSection =
  | "words"
  | "sentences"
  | "grammar"
  | "listening"
  | "reading"
  | "practice"
  | "complete";

export type CompletedStep = {
  level: number;
  step: number;
};

export type GoTopikProgress = {
  currentLevel: number | null;
  currentStep: number | null;
  currentSection: StepSection | null;
  completedSteps: CompletedStep[];
  lastVisitedAt: string | null;
};

const STORAGE_KEY = "goTopikProgress";

const DEFAULT_PROGRESS: GoTopikProgress = {
  currentLevel: null,
  currentStep: null,
  currentSection: null,
  completedSteps: [],
  lastVisitedAt: null,
};

export function getProgress(): GoTopikProgress {
  if (typeof window === "undefined") return DEFAULT_PROGRESS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;

    const parsed = JSON.parse(raw);
    return {
      currentLevel: typeof parsed.currentLevel === "number" ? parsed.currentLevel : null,
      currentStep: typeof parsed.currentStep === "number" ? parsed.currentStep : null,
      currentSection:
        typeof parsed.currentSection === "string" ? parsed.currentSection : null,
      completedSteps: Array.isArray(parsed.completedSteps) ? parsed.completedSteps : [],
      lastVisitedAt:
        typeof parsed.lastVisitedAt === "string" ? parsed.lastVisitedAt : null,
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

function saveProgress(progress: GoTopikProgress): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Storage unavailable or full — fail silently, nothing to recover here.
  }
}

export function updateCurrentPosition(
  level: number,
  step: number,
  section: StepSection,
): void {
  const progress = getProgress();
  saveProgress({
    ...progress,
    currentLevel: level,
    currentStep: step,
    currentSection: section,
    lastVisitedAt: new Date().toISOString(),
  });
}

export function markStepComplete(level: number, step: number): void {
  const progress = getProgress();
  const alreadyCompleted = progress.completedSteps.some(
    (item) => item.level === level && item.step === step,
  );

  saveProgress({
    ...progress,
    completedSteps: alreadyCompleted
      ? progress.completedSteps
      : [...progress.completedSteps, { level, step }],
    lastVisitedAt: new Date().toISOString(),
  });
}

export function isStepCompleted(level: number, step: number): boolean {
  return getProgress().completedSteps.some(
    (item) => item.level === level && item.step === step,
  );
}

export function getCompletedStepsForLevel(level: number): number[] {
  return getProgress()
    .completedSteps.filter((item) => item.level === level)
    .map((item) => item.step);
}

export function getLevelProgressPercent(level: number, totalSteps: number): number {
  if (totalSteps <= 0) return 0;
  const completedCount = getCompletedStepsForLevel(level).length;
  return Math.round((completedCount / totalSteps) * 100);
}

const VALID_SECTIONS: StepSection[] = [
  "words",
  "sentences",
  "grammar",
  "listening",
  "reading",
  "practice",
  "complete",
];

const SECTION_LABEL_KEY: Record<StepSection, UiTextKey> = {
  words: "sectionWords",
  sentences: "sectionSentences",
  grammar: "sectionGrammar",
  listening: "sectionListening",
  reading: "sectionReading",
  practice: "sectionPractice",
  complete: "sectionComplete",
};

export function getSectionLabel(section: StepSection, lang: string): string {
  return t(SECTION_LABEL_KEY[section], lang);
}

export function getSectionPath(level: number, step: number, section: StepSection): string {
  const base = `/study/${level}/${step}`;
  if (section === "words") return base;
  return `${base}/${section}`;
}

export type CurrentPosition = {
  level: number;
  step: number;
  section: StepSection;
};

// Returns the user's saved position only if it points somewhere real —
// a known level, a step within that level's range, and a known section.
// Invalid/corrupted saved values (bad level, out-of-range step, unknown
// section) safely resolve to null instead of building a broken link.
export function getValidCurrentPosition(): CurrentPosition | null {
  const { currentLevel, currentStep, currentSection } = getProgress();

  if (currentLevel == null || currentStep == null || currentSection == null) {
    return null;
  }
  if (!VALID_SECTIONS.includes(currentSection)) return null;

  const level = getLevel(currentLevel);
  if (!level) return null;
  if (currentStep < 1 || currentStep > level.stepCount) return null;

  return { level: currentLevel, step: currentStep, section: currentSection };
}
