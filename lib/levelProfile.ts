// Shared localStorage utility for the combined Level Profile screen.
// Level Profile only summarizes existing signals (selfLevel, topikHistory,
// quickCheckResult) and computes a simple recommended starting point — it
// never rewrites those source values, and never touches goTopikProgress.
// The recommendation is a suggestion only, never an official TOPIK grade,
// and never auto-changes the user's actual study position.

import { getLevel } from "@/lib/levels";
import type { TopikHistory } from "@/lib/topikHistory";
import type { QuickCheckResult } from "@/lib/quickCheck";

const STORAGE_KEY = "levelProfile";

// Cost-conscious v1: one representative Level per Self Level answer, not a
// range. topik_experience / not_sure have no number of their own — those
// lean on Previous TOPIK / Quick Check instead (see getRecommendedLevel).
const SELF_LEVEL_ESTIMATE: Record<string, number | undefined> = {
  beginner: 1,
  basic: 2,
  everyday: 3,
  intermediate: 4,
};

// A recent Previous TOPIK result is treated as a signal; an older one is
// ignored outright rather than weighted down gradually — keeps the rule simple.
const RECENT_WHEN: NonNullable<TopikHistory["when"]>[] = ["within_6m", "6_12m"];

const RECOMMENDED_STEP_BY_LEVEL: Record<number, number> = {
  1: 1,
  2: 3,
  3: 4,
  4: 5,
  5: 6,
  6: 6,
};

function clampLevel(level: number): number {
  return Math.min(6, Math.max(1, Math.round(level)));
}

export type RecommendedStart = {
  recommendedLevel: number;
  recommendedStep: number;
};

export type LevelProfileInput = {
  selfLevel: string | null;
  quickCheckResult: QuickCheckResult | null;
  topikHistory: TopikHistory;
};

// Single rule-based helper — the only place this logic branches, so the
// page itself stays free of repeated conditionals.
export function getRecommendedLevel({
  selfLevel,
  quickCheckResult,
  topikHistory,
}: LevelProfileInput): RecommendedStart {
  const quickCheckLevel = quickCheckResult?.estimatedLevel ?? null;
  const selfEstimate = selfLevel ? (SELF_LEVEL_ESTIMATE[selfLevel] ?? null) : null;
  const previousLevel = topikHistory.level;
  const previousIsRecent =
    topikHistory.when != null && RECENT_WHEN.includes(topikHistory.when);

  let recommendedLevel: number;

  if (quickCheckLevel !== null) {
    // Quick Check is the primary basis. Self Level within 1 level of it just
    // confirms the same answer; a bigger gap splits the difference instead
    // of trusting either value alone.
    const diff = selfEstimate !== null ? selfEstimate - quickCheckLevel : 0;
    recommendedLevel =
      selfEstimate === null || Math.abs(diff) <= 1
        ? quickCheckLevel
        : Math.floor((quickCheckLevel + selfEstimate) / 2);

    // A recent Previous TOPIK result exactly one level above nudges the
    // recommendation up slightly — never on its own, and never when old.
    if (previousLevel !== null && previousIsRecent && previousLevel - recommendedLevel === 1) {
      recommendedLevel = Math.round((recommendedLevel + previousLevel) / 2);
    }
  } else if (selfEstimate !== null) {
    recommendedLevel = selfEstimate;
  } else if (previousLevel !== null) {
    recommendedLevel = previousLevel;
  } else {
    recommendedLevel = 1;
  }

  recommendedLevel = clampLevel(recommendedLevel);

  let recommendedStep = RECOMMENDED_STEP_BY_LEVEL[recommendedLevel] ?? 1;
  if (quickCheckResult && quickCheckLevel === recommendedLevel && quickCheckResult.total > 0) {
    const ratio = quickCheckResult.score / quickCheckResult.total;
    if (ratio >= 0.8) recommendedStep += 1;
    else if (ratio <= 0.3) recommendedStep -= 1;
  }

  const stepCount = getLevel(recommendedLevel)?.stepCount ?? recommendedStep;
  recommendedStep = Math.min(stepCount, Math.max(1, recommendedStep));

  return { recommendedLevel, recommendedStep };
}

export type LevelProfile = {
  selfLevel: string | null;
  previousTopikLevel: number | null;
  quickCheckLevel: number | null;
  recommendedLevel: number;
  recommendedStep: number;
  updatedAt: string;
};

export function buildLevelProfile(input: LevelProfileInput): LevelProfile {
  const { recommendedLevel, recommendedStep } = getRecommendedLevel(input);
  return {
    selfLevel: input.selfLevel,
    previousTopikLevel: input.topikHistory.level,
    quickCheckLevel: input.quickCheckResult?.estimatedLevel ?? null,
    recommendedLevel,
    recommendedStep,
    updatedAt: new Date().toISOString(),
  };
}

export function saveLevelProfile(profile: LevelProfile): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch {
    // Storage unavailable or full — fail silently, nothing to recover here.
  }
}
