"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import SecondaryButton from "@/components/SecondaryButton";
import PrimaryButton from "@/components/PrimaryButton";
import ProgressBar from "@/components/ProgressBar";
import PracticeQuestion from "@/components/PracticeQuestion";
import { SAMPLE_PRACTICE } from "@/data/samplePractice";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import { useSaveProgress } from "@/hooks/useSaveProgress";

export default function PracticePage() {
  const params = useParams<{ level: string; step: string }>();
  const lang = useLang();
  useSaveProgress(Number(params.level), Number(params.step), "practice");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = SAMPLE_PRACTICE.length;
  const currentQuestion = SAMPLE_PRACTICE[currentIndex];
  const isLast = currentIndex === total - 1;
  const accuracy = Math.round((score / total) * 100);

  const handleAnswered = (isCorrect: boolean) => {
    if (isCorrect) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (isLast) {
      setFinished(true);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  return (
    <>
      <Header
        title={`TOPIK ${params.level} · STEP ${params.step}`}
        backHref={`/study/${params.level}/${params.step}/reading`}
      />
      <main className="flex flex-1 flex-col gap-5 px-5 py-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-foreground">
            {t("sectionPractice", lang).toUpperCase()}
          </h2>
          <ProgressBar value={6} max={6} label={t("learningStage", lang)} />
        </div>

        {finished ? (
          <Card className="flex flex-col gap-4 text-center">
            <p className="text-lg font-black text-foreground">
              {t("practiceComplete", lang)}
            </p>
            <div>
              <p className="text-xs font-semibold text-muted">
                {t("score", lang)}
              </p>
              <p className="mt-1 text-2xl font-black text-mint-dark">
                {score} / {total}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-muted">
                {t("accuracy", lang)}
              </p>
              <p className="mt-1 text-2xl font-black text-mint-dark">
                {accuracy}%
              </p>
            </div>
            <Link
              href={`/study/${params.level}/${params.step}/complete?score=${score}&total=${total}`}
            >
              <PrimaryButton fullWidth>{t("finishStep", lang)}</PrimaryButton>
            </Link>
          </Card>
        ) : (
          <>
            <ProgressBar
              value={currentIndex + 1}
              max={total}
              label={`${t("questionLabel", lang)} ${currentIndex + 1} / ${total}`}
            />

            <PracticeQuestion
              key={currentQuestion.id}
              data={currentQuestion}
              lang={lang}
              isLast={isLast}
              onAnswered={handleAnswered}
              onNext={handleNext}
            />

            <Link href={`/study/${params.level}/${params.step}/reading`}>
              <SecondaryButton fullWidth>
                {t("previous", lang)}
              </SecondaryButton>
            </Link>
          </>
        )}
      </main>
    </>
  );
}
