"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Card from "@/components/Card";
import ProgressBar from "@/components/ProgressBar";
import StepList from "@/components/StepList";
import { getLevel } from "@/lib/levels";
import { getStepsWithStatus, type Step } from "@/lib/steps";
import { getProgress, getCompletedStepsForLevel } from "@/lib/progress";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";

export default function LevelPage() {
  const params = useParams<{ level: string }>();
  const levelNumber = Number(params.level);
  const level = getLevel(levelNumber);
  const lang = useLang();

  // SSR-safe default (no completed/in-progress data) so server and first
  // client render match exactly; real progress loads after mount.
  const [steps, setSteps] = useState<Step[]>(() =>
    level ? getStepsWithStatus(level.stepCount, [], null) : [],
  );

  useEffect(() => {
    if (!level) return;
    const completedStepNumbers = getCompletedStepsForLevel(levelNumber);
    const progress = getProgress();
    const inProgressStep =
      progress.currentLevel === levelNumber ? progress.currentStep : null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setSteps(getStepsWithStatus(level.stepCount, completedStepNumbers, inProgressStep));
  }, [level, levelNumber]);

  if (!level) {
    return (
      <main className="flex flex-1 items-center justify-center px-5 py-6">
        <p className="text-sm text-muted">Level not found.</p>
      </main>
    );
  }

  const completedCount = steps.filter((s) => s.status === "completed").length;
  const progressPercent =
    level.stepCount > 0 ? Math.round((completedCount / level.stepCount) * 100) : 0;

  return (
    <>
      <Header title={level.title} backHref="/home" />
      <main className="flex flex-1 flex-col gap-6 px-5 py-6">
        <div>
          <p className="text-sm text-muted">{t("allStepsOpen", lang)}</p>
        </div>

        <Card className="flex flex-col gap-3">
          <ProgressBar value={progressPercent} label={t("progress", lang)} />
          <p className="text-sm text-muted">
            {t("completed", lang)} {completedCount} / {level.stepCount}{" "}
            {t("stepsWord", lang)}
          </p>
        </Card>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            {t("allSteps", lang)}
          </h2>
          <StepList level={level.level} steps={steps} lang={lang} />
        </section>
      </main>
    </>
  );
}
