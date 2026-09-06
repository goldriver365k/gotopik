import { t, type UiTextKey } from "@/lib/i18n";

export type StepStatus = "completed" | "in_progress" | "not_started";

export type Step = {
  step: number;
  status: StepStatus;
};

// Computes STEP statuses from real completed-step data (from localStorage via
// lib/progress.ts) plus the user's current in-progress step, if any.
// Status is display-only — every STEP stays clickable regardless of status.
export function getStepsWithStatus(
  stepCount: number,
  completedStepNumbers: number[],
  inProgressStep: number | null,
): Step[] {
  const completedSet = new Set(completedStepNumbers);

  return Array.from({ length: stepCount }, (_, index) => {
    const step = index + 1;
    let status: StepStatus = "not_started";
    if (completedSet.has(step)) status = "completed";
    else if (step === inProgressStep) status = "in_progress";
    return { step, status };
  });
}

const STEP_STATUS_KEY: Record<StepStatus, UiTextKey> = {
  completed: "completed",
  in_progress: "inProgress",
  not_started: "notStarted",
};

export function getStepStatusLabel(status: StepStatus, lang: string): string {
  return t(STEP_STATUS_KEY[status], lang);
}
