"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import StepList from "@/components/StepList";
import ContinueLearningCard from "@/components/ContinueLearningCard";
import { getLevel, type Level } from "@/lib/levels";
import { getStepsWithStatus, type Step } from "@/lib/steps";
import {
  getProgress,
  getCompletedStepsForLevel,
  getLevelProgressPercent,
} from "@/lib/progress";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";

type CurrentLevelInfo = {
  level: Level;
  currentStep: number | null;
  completedCount: number;
  percent: number;
  steps: Step[];
};

export default function StudyPage() {
  const lang = useLang();
  // SSR-safe default (no current level) so server and first client render
  // match exactly; the real localStorage data loads after mount.
  const [currentLevelInfo, setCurrentLevelInfo] = useState<CurrentLevelInfo | null>(
    null,
  );

  useEffect(() => {
    const progress = getProgress();
    const level = progress.currentLevel != null ? getLevel(progress.currentLevel) : null;

    if (!level) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
      setCurrentLevelInfo(null);
      return;
    }

    const completedStepNumbers = getCompletedStepsForLevel(level.level);
    const percent = getLevelProgressPercent(level.level, level.stepCount);
    const steps = getStepsWithStatus(
      level.stepCount,
      completedStepNumbers,
      progress.currentStep,
    );

    setCurrentLevelInfo({
      level,
      currentStep: progress.currentStep,
      completedCount: completedStepNumbers.length,
      percent,
      steps,
    });
  }, []);

  return (
    <>
      <Header title={t("navStudy", lang)} />
      <main className="flex flex-1 flex-col gap-6 px-5 py-6">
        <p className="-mt-2 text-sm text-muted">
          {t("studySubtitle", lang)}
        </p>

        <ContinueLearningCard />

        <section className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-foreground">
            {t("todaysReview", lang)}
          </h2>
          <Card>
            <p className="text-sm text-muted">
              {t("reviewPlaceholder", lang)}
            </p>
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">
              {t("currentLevelTitle", lang)}
            </h2>
            <Link href="/home" className="text-xs font-semibold text-muted">
              {t("changeLevel", lang)}
            </Link>
          </div>

          {currentLevelInfo ? (
            <Card className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-foreground">
                  {currentLevelInfo.level.title}
                </p>
                {currentLevelInfo.currentStep !== null ? (
                  <p className="text-sm text-muted">
                    STEP {currentLevelInfo.currentStep}
                  </p>
                ) : null}
              </div>
              <ProgressBar
                value={currentLevelInfo.percent}
                label={t("progress", lang)}
              />
              <p className="text-sm text-muted">
                {t("completed", lang)} {currentLevelInfo.completedCount} /{" "}
                {currentLevelInfo.level.stepCount}
              </p>
            </Card>
          ) : (
            <Card className="flex flex-col gap-3">
              <p className="text-sm text-muted">
                {t("chooseYourLevelToStart", lang)}
              </p>
              <Link href="/home">
                <SecondaryButton fullWidth>
                  {t("chooseLevel", lang)}
                </SecondaryButton>
              </Link>
            </Card>
          )}
        </section>

        {currentLevelInfo ? (
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-foreground">
              {t("allSteps", lang)}
            </h2>
            <StepList
              level={currentLevelInfo.level.level}
              steps={currentLevelInfo.steps}
              lang={lang}
            />
          </section>
        ) : null}
      </main>
    </>
  );
}
