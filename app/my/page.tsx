"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import ContinueLearningCard from "@/components/ContinueLearningCard";
import { LEVELS, getLevel, type Level } from "@/lib/levels";
import {
  getProgress,
  getCompletedStepsForLevel,
  getLevelProgressPercent,
} from "@/lib/progress";
import { getDiagnosticResult, type DiagnosticResult } from "@/lib/diagnostic";
import {
  LANGUAGE_OPTIONS,
  LEARNING_LANGUAGE_STORAGE_KEY,
} from "@/lib/languages";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";

type LevelWithCompleted = Level & { completedCount: number };

type MyPageData = {
  languageLabel: string;
  levels: LevelWithCompleted[];
  diagnosticResult: DiagnosticResult | null;
  completedStepsTotal: number;
  currentLevelTitle: string | null;
  currentStep: number | null;
};

const DEFAULT_DATA: MyPageData = {
  languageLabel: "English",
  levels: LEVELS.map((level) => ({ ...level, progress: 0, completedCount: 0 })),
  diagnosticResult: null,
  completedStepsTotal: 0,
  currentLevelTitle: null,
  currentStep: null,
};

export default function MyPage() {
  const lang = useLang();
  // SSR-safe default so server and first client render match exactly;
  // real localStorage data loads after mount.
  const [data, setData] = useState<MyPageData>(DEFAULT_DATA);

  useEffect(() => {
    const progress = getProgress();
    const languageCode = localStorage.getItem(LEARNING_LANGUAGE_STORAGE_KEY);
    const languageLabel =
      LANGUAGE_OPTIONS.find((option) => option.code === languageCode)?.label ??
      "English";

    const levels: LevelWithCompleted[] = LEVELS.map((level) => ({
      ...level,
      progress: getLevelProgressPercent(level.level, level.stepCount),
      completedCount: getCompletedStepsForLevel(level.level).length,
    }));

    const currentLevelTitle =
      progress.currentLevel != null
        ? (getLevel(progress.currentLevel)?.title ?? null)
        : null;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setData({
      languageLabel,
      levels,
      diagnosticResult: getDiagnosticResult(),
      completedStepsTotal: progress.completedSteps.length,
      currentLevelTitle,
      currentStep: progress.currentStep,
    });
  }, []);

  return (
    <>
      <Header title={t("navMy", lang)} />
      <main className="flex flex-1 flex-col gap-6 px-5 py-6">
        <p className="-mt-2 text-sm text-muted">
          {t("myPageSubtitle", lang)}
        </p>

        <Card className="flex flex-col gap-1">
          <p className="text-sm font-bold text-foreground">
            {t("guestLabel", lang)}
          </p>
          <p className="text-xs text-muted">{t("guestNote", lang)}</p>
        </Card>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            {t("continueLearning", lang)}
          </h2>
          <ContinueLearningCard />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            {t("progressByLevel", lang)}
          </h2>
          <Card className="flex flex-col gap-4">
            {data.levels.map((level) => (
              <div key={level.level}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">
                    {level.title}
                  </span>
                  <span className="text-muted">{level.progress}%</span>
                </div>
                <ProgressBar value={level.progress} />
                <p className="mt-1 text-xs text-muted">
                  {level.completedCount} / {level.stepCount}{" "}
                  {t("stepsWord", lang)}
                </p>
              </div>
            ))}
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            {t("learningLanguageTitle", lang)}
          </h2>
          <Card className="flex flex-col gap-3">
            <p className="text-base font-bold text-foreground">
              {data.languageLabel}
            </p>
            <Link href="/language">
              <SecondaryButton fullWidth>
                {t("changeLanguage", lang)}
              </SecondaryButton>
            </Link>
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            {data.diagnosticResult
              ? t("estimatedLevelTitle", lang)
              : t("levelTestTitle", lang)}
          </h2>
          <Card className="flex flex-col gap-3">
            {data.diagnosticResult ? (
              <>
                <p className="text-2xl font-black text-foreground">
                  TOPIK {data.diagnosticResult.estimatedLevel}
                </p>
                <p className="text-sm text-muted">
                  {t("recommendedWord", lang)}: TOPIK{" "}
                  {data.diagnosticResult.estimatedLevel} · STEP{" "}
                  {data.diagnosticResult.recommendedStep}
                </p>
                <Link href="/diagnostic">
                  <SecondaryButton fullWidth>
                    {t("retakeLevelTest", lang)}
                  </SecondaryButton>
                </Link>
              </>
            ) : (
              <>
                <p className="text-sm text-muted">
                  {t("findEstimated", lang)}
                </p>
                <Link href="/diagnostic">
                  <PrimaryButton fullWidth>
                    {t("checkMyLevel", lang)}
                  </PrimaryButton>
                </Link>
              </>
            )}
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            {t("studySummary", lang)}
          </h2>
          <Card className="flex flex-col gap-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted">
                {t("completedStepsWord", lang)}
              </span>
              <span className="font-semibold text-foreground">
                {data.completedStepsTotal}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("currentLevelWord", lang)}</span>
              <span className="font-semibold text-foreground">
                {data.currentLevelTitle ?? "-"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("currentStepWord", lang)}</span>
              <span className="font-semibold text-foreground">
                {data.currentStep !== null ? `STEP ${data.currentStep}` : "-"}
              </span>
            </div>
          </Card>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">
            {t("settingsTitle", lang)}
          </h2>
          <Card className="flex flex-col divide-y divide-border">
            <div className="flex items-center justify-between pb-3">
              <span className="text-sm font-semibold text-foreground">
                {t("languageWord", lang)}
              </span>
              <Link
                href="/language"
                className="text-xs font-semibold text-mint-dark"
              >
                {t("changeWord", lang)}
              </Link>
            </div>
            <div className="flex items-center justify-between py-3">
              <span className="text-sm font-semibold text-muted">
                {t("notifications", lang)}
              </span>
              <span className="text-xs text-muted">
                {t("comingSoon", lang)}
              </span>
            </div>
            <div className="flex items-center justify-between pt-3">
              <span className="text-sm font-semibold text-muted">
                {t("account", lang)}
              </span>
              <span className="text-xs text-muted">
                {t("availableAfterSignIn", lang)}
              </span>
            </div>
          </Card>
        </section>

        <p className="text-center text-xs text-muted">
          {t("signInNote", lang)}
        </p>
      </main>
    </>
  );
}
