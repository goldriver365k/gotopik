"use client";

import { useState } from "react";
import Card from "@/components/Card";
import SecondaryButton from "@/components/SecondaryButton";
import type { WritingItem } from "@/types/content";
import { t } from "@/lib/i18n";

type WritingQuestionProps = {
  data: WritingItem;
  lang: string;
};

function pick(map: Record<string, string> | undefined, lang: string): string | null {
  if (!map) return null;
  return map[lang] ?? map.en ?? null;
}

// Rule-based only: the learner writes in the textarea (never saved, never
// graded) and can reveal the sample answer + key point to self-check. No
// AI grading, no similarity scoring — per this stage's cost scope.
export default function WritingQuestion({ data, lang }: WritingQuestionProps) {
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);

  const prompt = pick(data.prompt, lang);
  const sampleAnswer = pick(data.sampleAnswer, lang);
  const explanation = pick(data.explanation, lang);

  return (
    <Card className="flex flex-col gap-3">
      <p className="whitespace-pre-line text-base leading-7 text-foreground">
        {prompt}
      </p>

      {data.keywords && data.keywords.length > 0 ? (
        <div>
          <p className="text-xs font-semibold text-muted">
            {t("keywordsLabel", lang)}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {data.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-mint-light px-2.5 py-1 text-xs font-semibold text-mint-dark"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder={t("writingPlaceholder", lang)}
        rows={4}
        className="w-full resize-none rounded-xl border border-border bg-white p-3 text-sm text-foreground outline-none focus:border-mint"
      />

      <SecondaryButton onClick={() => setRevealed((r) => !r)}>
        {t(revealed ? "hideSampleAnswer" : "showSampleAnswer", lang)}
      </SecondaryButton>

      {revealed ? (
        <div className="flex flex-col gap-2 border-t border-border pt-3">
          {sampleAnswer ? (
            <div>
              <p className="text-xs font-semibold text-muted">
                {t("sampleAnswerLabel", lang)}
              </p>
              <p className="mt-1 whitespace-pre-line text-sm text-foreground">
                {sampleAnswer}
              </p>
            </div>
          ) : null}
          {explanation ? (
            <div>
              <p className="text-xs font-semibold text-muted">
                {t("keyPointLabel", lang)}
              </p>
              <p className="mt-1 text-sm text-muted">{explanation}</p>
            </div>
          ) : null}
        </div>
      ) : null}
    </Card>
  );
}
