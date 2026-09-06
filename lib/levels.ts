import type { UiTextKey } from "@/lib/i18n";

export type Level = {
  level: number;
  title: string;
  description: string;
  descriptionKey: UiTextKey;
  progress: number;
  stepCount: number;
};

export const LEVELS: Level[] = [
  { level: 1, title: "TOPIK 1", description: "Beginner", descriptionKey: "levelBeginner", progress: 20, stepCount: 12 },
  { level: 2, title: "TOPIK 2", description: "Elementary", descriptionKey: "levelElementary", progress: 0, stepCount: 14 },
  { level: 3, title: "TOPIK 3", description: "Intermediate", descriptionKey: "levelIntermediate", progress: 0, stepCount: 16 },
  { level: 4, title: "TOPIK 4", description: "Upper Intermediate", descriptionKey: "levelUpperIntermediate", progress: 0, stepCount: 18 },
  { level: 5, title: "TOPIK 5", description: "Advanced", descriptionKey: "levelAdvanced", progress: 0, stepCount: 20 },
  { level: 6, title: "TOPIK 6", description: "Advanced", descriptionKey: "levelAdvanced", progress: 0, stepCount: 20 },
];

export function getLevel(level: number): Level | undefined {
  return LEVELS.find((item) => item.level === level);
}
