"use client";

import { useState } from "react";
import Card from "@/components/Card";
import ListenButton from "@/components/ListenButton";
import QuizQuestion from "@/components/QuizQuestion";
import PrimaryButton from "@/components/PrimaryButton";
import type { PracticeQuestionData } from "@/data/samplePractice";
import { t } from "@/lib/i18n";

type PracticeQuestionProps = {
  data: PracticeQuestionData;
  lang: string;
  isLast: boolean;
  onAnswered: (isCorrect: boolean) => void;
  onNext: () => void;
};

function pick(map: Record<string, string>, lang: string): string {
  return map[lang] ?? map.en;
}

export default function PracticeQuestion({
  data,
  lang,
  isLast,
  onAnswered,
  onNext,
}: PracticeQuestionProps) {
  const [hasAnswered, setHasAnswered] = useState(false);
  const explanation = pick(data.explanation, lang);
  const hasMedia = Boolean(data.audioText) || Boolean(data.passage);

  const handleCheck = (isCorrect: boolean) => {
    if (!hasAnswered) {
      setHasAnswered(true);
      onAnswered(isCorrect);
    }
  };

  return (
    <Card className="flex flex-col gap-4">
      {data.audioText ? (
        <div>
          <p className="text-xs font-semibold text-muted">
            {t("listen", lang)}
          </p>
          <ListenButton lang={lang} />
        </div>
      ) : null}

      {data.passage ? (
        <div>
          <p className="text-xs font-semibold text-muted">
            {t("read", lang)}
          </p>
          <p className="mt-2 whitespace-pre-line text-base leading-8 text-foreground">
            {data.passage}
          </p>
        </div>
      ) : null}

      <div className={hasMedia ? "border-t border-border pt-3" : undefined}>
        <p className="whitespace-pre-line text-base font-bold text-foreground">
          {data.question}
        </p>
      </div>

      <QuizQuestion
        options={data.options}
        correctAnswer={data.correctAnswer}
        explanation={explanation}
        lang={lang}
        onCheck={handleCheck}
        afterResult={
          <PrimaryButton fullWidth onClick={onNext} className="mt-3">
            {isLast ? t("seeResults", lang) : t("nextQuestion", lang)}
          </PrimaryButton>
        }
      />
    </Card>
  );
}
