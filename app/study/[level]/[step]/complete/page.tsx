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
import { SAMPLE_WORDS } from "@/data/sampleWords";
import { SAMPLE_SENTENCES } from "@/data/sampleSentences";
import { SAMPLE_GRAMMAR } from "@/data/sampleGrammar";
import { SAMPLE_PRACTICE } from "@/data/samplePractice";
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
  const total = Number(searchParams.get("total")) || SAMPLE_PRACTICE.length;
  const score = Number(searchParams.get("score")) || 0;
  const accuracy = total > 0 ? Math.round((score / total) * 100) : 0;

  const levelData = getLevel(level);
  const stepCount = levelData?.stepCount ?? step;
  const isLastStep = step >= stepCount;
  const nextStep = step + 1;

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
              <span className="font-semibold">{SAMPLE_WORDS.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("sectionSentences", lang)}</span>
              <span className="font-semibold">{SAMPLE_SENTENCES.length}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted">{t("sectionGrammar", lang)}</span>
              <span className="font-semibold">{SAMPLE_GRAMMAR.length}</span>
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

        <div className="flex flex-col gap-2">
          <ProgressBar
            value={step}
            max={stepCount}
            label={`${step} ${t("ofWord", lang)} ${stepCount} ${t("stepsWord", lang)}`}
          />
        </div>

        <div className="mt-2 flex flex-col gap-3">
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
          <Link href="/home">
            <SecondaryButton fullWidth>{t("homeButton", lang)}</SecondaryButton>
          </Link>
        </div>
      </main>
    </>
  );
}
