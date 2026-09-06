"use client";

import { useState, type ReactNode } from "react";
import PrimaryButton from "@/components/PrimaryButton";
import { t } from "@/lib/i18n";

type QuizQuestionProps = {
  options: string[];
  correctAnswer: number;
  explanation: string;
  lang: string;
  onCheck?: (isCorrect: boolean) => void;
  afterResult?: ReactNode;
};

export default function QuizQuestion({
  options,
  correctAnswer,
  explanation,
  lang,
  onCheck,
  afterResult,
}: QuizQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const isCorrect = checked && selected === correctAnswer;

  const handleSelect = (index: number) => {
    setSelected(index);
    setChecked(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => {
          const isSelected = selected === index;
          const isCorrectOption = index === correctAnswer;
          const showAsCorrect = checked && isCorrectOption;
          const showAsWrong = checked && isSelected && !isCorrectOption;

          return (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(index)}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                showAsCorrect
                  ? "border-mint bg-mint-light text-mint-dark"
                  : showAsWrong
                    ? "border-border bg-white text-muted"
                    : isSelected
                      ? "border-mint bg-mint-light text-mint-dark"
                      : "border-border bg-white text-foreground"
              }`}
            >
              <span>{option}</span>
              {showAsCorrect ? (
                <span className="text-xs">{t("correctAnswer", lang)}</span>
              ) : null}
              {showAsWrong ? (
                <span className="text-xs">{t("yourAnswer", lang)}</span>
              ) : null}
            </button>
          );
        })}
      </div>

      <PrimaryButton
        fullWidth
        disabled={selected === null}
        onClick={() => {
          setChecked(true);
          onCheck?.(selected === correctAnswer);
        }}
      >
        {t("checkAnswer", lang)}
      </PrimaryButton>

      {checked ? (
        <div className="border-t border-border pt-3">
          <p
            className={`text-sm font-bold ${isCorrect ? "text-mint-dark" : "text-foreground"}`}
          >
            {isCorrect ? t("correct", lang) : t("incorrect", lang)}
          </p>
          <p className="mt-1 text-sm text-muted">
            {t("correctAnswer", lang)}: {options[correctAnswer]}
          </p>
          <p className="mt-2 text-sm text-foreground">{explanation}</p>
          {afterResult}
        </div>
      ) : null}
    </>
  );
}
