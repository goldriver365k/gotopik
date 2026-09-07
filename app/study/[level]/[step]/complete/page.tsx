"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import PencilCharacter from "@/components/PencilCharacter";
import { getStepContent } from "@/lib/content";
import { getLevel } from "@/lib/levels";
import { markStepComplete, updateCurrentPosition } from "@/lib/progress";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";

export default function CompletePage() {
  const params = useParams<{ level: string; step: string }>();
  const searchParams = useSearchParams();
  const lang = useLang();

  const level = Number(params.level);
  const step = Number(params.step);
  const content = getStepContent(level, step);
  const total = Number(searchParams.get("total")) || content?.practice.length || 0;
  const score = Number(searchParams.get("score")) || 0;
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;

  const levelData = getLevel(level);
  const stepCount = levelData?.stepCount ?? step;
  const isLastStep = step >= stepCount;
  const nextStep = step + 1;

  // STEP 12 is TOPIK 1's review STEP, not a normal lesson — its COMPLETE
  // screen adds a short readiness note on top of the usual stats, but
  // never blocks TOPIK 2: it stays freely selectable either way.
  const isTopik1Review = level === 1 && step === 12;
  const readinessMessage =
    accuracy >= 80
      ? "Ready to try TOPIK 2"
      : accuracy >= 60
        ? "Good progress. Review weak areas and continue."
        : "Review TOPIK 1 again before moving on.";

  // STEP 14 is TOPIK 2's comprehensive review STEP. Same pattern as TOPIK 1's
  // STEP 12 above: an extra readiness note, never a gate — TOPIK 3 stays
  // freely selectable whether or not this STEP is completed or passed.
  const isTopik2Review = level === 2 && step === 14;
  const topik2ReadinessMessage =
    accuracy >= 80
      ? "Ready to try TOPIK 3"
      : accuracy >= 60
        ? "Good progress. Review weak areas and continue."
        : "More TOPIK 2 review is recommended.";

  // STEP 16 is TOPIK 3's comprehensive review STEP. Same pattern as
  // TOPIK 1's STEP 12 and TOPIK 2's STEP 14 above: an extra readiness
  // note, never a gate — TOPIK 4 stays freely selectable whether or not
  // this STEP is completed or passed.
  const isTopik3Review = level === 3 && step === 16;
  const topik3ReadinessMessage =
    accuracy >= 80
      ? "Ready to explore TOPIK 4"
      : accuracy >= 60
        ? "Good progress. Review some TOPIK 3 topics."
        : "More TOPIK 3 review is recommended.";

  // STEP 18 is TOPIK 4's comprehensive review STEP. Same pattern as
  // TOPIK 1's STEP 12, TOPIK 2's STEP 14, and TOPIK 3's STEP 16 above:
  // an extra readiness note, never a gate — TOPIK 5 stays freely
  // selectable whether or not this STEP is completed or passed.
  const isTopik4Review = level === 4 && step === 18;
  const topik4ReadinessMessage =
    accuracy >= 80
      ? "Ready to explore TOPIK 5"
      : accuracy >= 60
        ? "Good progress. Review a few TOPIK 4 topics."
        : "More TOPIK 4 review is recommended.";

  useEffect(() => {
    markStepComplete(level, step);
    updateCurrentPosition(level, step, "complete");
  }, [level, step]);

  return (
    <>
      <Header
        title={`TOPIK ${params.level} · STEP ${params.step}`}
        backHref={`/study/${params.level}/${params.step}/practice`}
      />
      <main className="flex flex-1 flex-col gap-6 px-5 py-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-mint-light">
            <PencilCharacter size={56} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-foreground">
              {t("stepComplete", lang)}
            </h1>
            <p className="mt-1 text-sm text-muted">{t("greatJob", lang)}</p>
          </div>
        </div>

        <Card className="flex flex-col gap-2">
          <p className="text-sm font-bold text-mint-dark">
            STEP {step} {t("sectionComplete", lang)}
          </p>
          <div className="mt-1 flex flex-col gap-1.5 text-sm text-foreground">
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("sectionWords", lang)}</span>
              <span className="font-semibold">{content?.words.length ?? 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("sectionSentences", lang)}</span>
              <span className="font-semibold">{content?.sentences.length ?? 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("sectionGrammar", lang)}</span>
              <span className="font-semibold">{content?.grammar.length ?? 0}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("practiceScore", lang)}</span>
              <span className="font-semibold">
                {score} / {total}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("accuracy", lang)}</span>
              <span className="font-semibold">{accuracy}%</span>
            </div>
          </div>
        </Card>

        {isTopik1Review ? (
          <Card className="flex flex-col gap-1 text-center">
            <p className="text-sm font-bold text-mint-dark">TOPIK 1 Complete</p>
            <p className="text-sm text-muted">
              You&apos;ve reviewed the key skills from TOPIK 1.
            </p>
            <p className="mt-1 text-base font-bold text-foreground">
              {readinessMessage}
            </p>
          </Card>
        ) : null}

        {isTopik2Review ? (
          <Card className="flex flex-col gap-1 text-center">
            <p className="text-sm font-bold text-mint-dark">TOPIK 2 Complete</p>
            <p className="text-sm text-muted">
              You&apos;ve reviewed the key skills from TOPIK 2.
            </p>
            <p className="mt-1 text-base font-bold text-foreground">
              {topik2ReadinessMessage}
            </p>
          </Card>
        ) : null}

        {isTopik3Review ? (
          <Card className="flex flex-col gap-1 text-center">
            <p className="text-sm font-bold text-mint-dark">TOPIK 3 Complete</p>
            <p className="text-sm text-muted">
              You&apos;ve reviewed the key skills from TOPIK 3.
            </p>
            <p className="mt-1 text-base font-bold text-foreground">
              {topik3ReadinessMessage}
            </p>
          </Card>
        ) : null}

        {isTopik4Review ? (
          <Card className="flex flex-col gap-1 text-center">
            <p className="text-sm font-bold text-mint-dark">TOPIK 4 Review Complete</p>
            <p className="text-sm text-muted">
              You&apos;ve reviewed the key skills from TOPIK 4.
            </p>
            <p className="mt-1 text-base font-bold text-foreground">
              {topik4ReadinessMessage}
            </p>
          </Card>
        ) : null}

        <div className="flex flex-col gap-2">
          <ProgressBar
            value={step}
            max={stepCount}
            label={`${step} ${t("ofWord", lang)} ${stepCount} ${t("stepsWord", lang)}`}
          />
        </div>

        <div className="mt-2 flex flex-col gap-3">
          {isTopik1Review ? (
            <>
              <Link href="/level/2">
                <PrimaryButton fullWidth>Continue to TOPIK 2</PrimaryButton>
              </Link>
              <Link href={`/level/${params.level}`}>
                <SecondaryButton fullWidth>Review TOPIK 1</SecondaryButton>
              </Link>
            </>
          ) : isTopik2Review ? (
            <>
              <Link href="/level/3">
                <PrimaryButton fullWidth>Try TOPIK 3</PrimaryButton>
              </Link>
              <Link href={`/level/${params.level}`}>
                <SecondaryButton fullWidth>Review TOPIK 2</SecondaryButton>
              </Link>
            </>
          ) : isTopik3Review ? (
            <>
              <Link href="/level/4">
                <PrimaryButton fullWidth>Try TOPIK 4</PrimaryButton>
              </Link>
              <Link href={`/level/${params.level}`}>
                <SecondaryButton fullWidth>Review TOPIK 3</SecondaryButton>
              </Link>
            </>
          ) : isTopik4Review ? (
            <>
              <Link href="/level/5">
                <PrimaryButton fullWidth>Explore TOPIK 5</PrimaryButton>
              </Link>
              <Link href={`/level/${params.level}`}>
                <SecondaryButton fullWidth>Review TOPIK 4</SecondaryButton>
              </Link>
            </>
          ) : (
            <>
              {isLastStep ? (
                <Link href={`/level/${params.level}`}>
                  <PrimaryButton fullWidth>
                    {t("backToLevel", lang)}
                  </PrimaryButton>
                </Link>
              ) : (
                <Link href={`/study/${params.level}/${nextStep}`}>
                  <PrimaryButton fullWidth>{t("nextStep", lang)}</PrimaryButton>
                </Link>
              )}
              <Link href={`/study/${params.level}/${params.step}`}>
                <SecondaryButton fullWidth>{t("review", lang)}</SecondaryButton>
              </Link>
            </>
          )}
          <Link href="/home">
            <SecondaryButton fullWidth>{t("homeButton", lang)}</SecondaryButton>
          </Link>
        </div>
      </main>
    </>
  );
}
