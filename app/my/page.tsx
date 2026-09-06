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
import { getSavedSelfLevel, getSelfLevelShortLabel } from "@/lib/selfLevel";
import { getTopikHistory, type TopikHistory } from "@/lib/topikHistory";
import { getQuickCheckResult, type QuickCheckResult } from "@/lib/quickCheck";
import { getLevelProfile, type LevelProfile } from "@/lib/levelProfile";
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
  selfLevelLabel: string | null;
  topikHistory: TopikHistory;
  quickCheckResult: QuickCheckResult | null;
  levelProfile: LevelProfile | null;
};

const DEFAULT_TOPIK_HISTORY: TopikHistory = {
  testType: null,
  level: null,
  score: null,
  when: null,
};

const DEFAULT_DATA: MyPageData = {
  languageLabel: "English",
  levels: LEVELS.map((level) => ({ ...level, progress: 0, completedCount: 0 })),
  diagnosticResult: null,
  completedStepsTotal: 0,
  currentLevelTitle: null,
  currentStep: null,
  selfLevelLabel: null,
  topikHistory: DEFAULT_TOPIK_HISTORY,
  quickCheckResult: null,
  levelProfile: null,
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

    const selfLevel = getSavedSelfLevel();

    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setData({
      languageLabel,
      levels,
      diagnosticResult: getDiagnosticResult(),
      completedStepsTotal: progress.completedSteps.length,
      currentLevelTitle,
      currentStep: progress.currentStep,
      selfLevelLabel: selfLevel ? getSelfLevelShortLabel(selfLevel) : null,
      topikHistory: getTopikHistory(),
      quickCheckResult: getQuickCheckResult(),
      levelProfile: getLevelProfile(),
    });
  }, []);

  // Full Level Test result outranks Quick Check as the more thorough,
  // more recently-taken-on-purpose estimate; if neither exists, hide it.
  const estimatedLevel = data.diagnosticResult
    ? { level: data.diagnosticResult.estimatedLevel, source: "From Level Test" }
    : data.quickCheckResult
      ? { level: data.quickCheckResult.estimatedLevel, source: "From Quick Check" }
      : null;

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
          <h2 className="text-lg font-bold text-foreground">Current Study</h2>
          <ContinueLearningCard />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold text-foreground">My Level Profile</h2>
          <Card className="flex flex-col gap-4">
            {data.selfLevelLabel ? (
              <div>
                <p className="text-xs font-semibold text-muted">Self Assessment</p>
                <p className="text-base font-bold text-foreground">
                  {data.selfLevelLabel}
                </p>
              </div>
            ) : null}

            {data.topikHistory.level !== null ? (
              <div>
                <p className="text-xs font-semibold text-muted">Previous TOPIK</p>
                <p className="text-base font-bold text-foreground">
                  TOPIK {data.topikHistory.level}
                </p>
              </div>
            ) : null}

            {estimatedLevel ? (
              <div>
                <p className="text-xs font-semibold text-muted">Estimated Level</p>
                <p className="text-base font-bold text-foreground">
                  TOPIK {estimatedLevel.level}
                </p>
                <p className="text-xs text-muted">{estimatedLevel.source}</p>
              </div>
            ) : null}

            {data.levelProfile ? (
              <div>
                <p className="text-xs font-semibold text-muted">Recommended Start</p>
                <p className="text-base font-bold text-foreground">
                  TOPIK {data.levelProfile.recommendedLevel} · STEP{" "}
                  {data.levelProfile.recommendedStep}
                </p>
              </div>
            ) : null}

            {!data.selfLevelLabel &&
            data.topikHistory.level === null &&
            !estimatedLevel &&
            !data.levelProfile ? (
              <p className="text-sm text-muted">No level information yet.</p>
            ) : null}
          </Card>

          <div className="flex flex-col gap-2">
            <Link
              href="/self-level"
              className="text-center text-xs font-semibold text-mint-dark"
            >
              Update Self Assessment
            </Link>
            {data.topikHistory.level !== null ? (
              <Link
                href="/topik-history"
                className="text-center text-xs font-semibold text-mint-dark"
              >
                Update TOPIK History
              </Link>
            ) : null}
          </div>
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
            <div className="flex items-center justify-between pt-3">
              <span className="text-sm font-semibold text-foreground">
                About TOPIK
              </span>
              <Link
                href="/about-topik"
                className="text-xs font-semibold text-mint-dark"
              >
                View
              </Link>
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
