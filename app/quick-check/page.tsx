"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import { QUICK_CHECK_QUESTIONS } from "@/data/quickCheckQuestions";
import { calculateQuickCheckResult, saveQuickCheckResult } from "@/lib/quickCheck";

type Phase = "intro" | "quiz";

export default function QuickCheckPage() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selections, setSelections] = useState<Record<number, number>>({});

  const total = QUICK_CHECK_QUESTIONS.length;
  const currentQuestion = QUICK_CHECK_QUESTIONS[currentIndex];
  const selected = selections[currentQuestion.id] ?? null;
  const isLast = currentIndex === total - 1;

  const handleSelect = (optionIndex: number) => {
    setSelections((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
  };

  const handleNext = () => {
    if (isLast) {
      const result = calculateQuickCheckResult(selections);
      saveQuickCheckResult(result);
      router.push("/home");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex((i) => Math.max(0, i - 1));
  };

  if (phase === "intro") {
    return (
      <div className="flex min-h-dvh flex-col px-6 pb-8 pt-10">
        <div className="flex flex-1 flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-black text-foreground">
              Quick Level Check
            </h1>
            <p className="text-sm text-muted">
              Answer a few questions to help us recommend where to start.
            </p>
          </div>

          <Card className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted">Questions</span>
              <span className="font-semibold text-foreground">{total} Questions</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted">Time</span>
              <span className="font-semibold text-foreground">About 2 minutes</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted">Covers</span>
              <span className="font-semibold text-foreground">
                Vocabulary, Grammar, Reading, Listening
              </span>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-3">
          <PrimaryButton fullWidth onClick={() => setPhase("quiz")}>
            Start Quick Check
          </PrimaryButton>
          <Link href="/home">
            <SecondaryButton fullWidth>Skip Quick Check</SecondaryButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header
        title="Quick Level Check"
        right={
          <Link href="/home" className="text-xs font-semibold text-muted">
            Skip
          </Link>
        }
      />
      <main className="flex flex-1 flex-col gap-5 px-5 py-6">
        <ProgressBar
          value={currentIndex + 1}
          max={total}
          label={`Question ${currentIndex + 1} / ${total}`}
        />

        <Card className="flex flex-col gap-4">
          {currentQuestion.passage ? (
            <div>
              <p className="text-xs font-semibold text-muted">READ</p>
              <p className="mt-2 whitespace-pre-line text-base leading-8 text-foreground">
                {currentQuestion.passage}
              </p>
            </div>
          ) : null}

          {currentQuestion.listeningScript ? (
            <div>
              <p className="text-xs font-semibold text-muted">
                Listen and choose the best answer
              </p>
              <p className="mt-2 whitespace-pre-line text-base leading-8 text-foreground">
                {currentQuestion.listeningScript}
              </p>
            </div>
          ) : null}

          <div
            className={
              currentQuestion.passage || currentQuestion.listeningScript
                ? "border-t border-border pt-3"
                : undefined
            }
          >
            <p className="whitespace-pre-line text-base font-bold text-foreground">
              {currentQuestion.question}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selected === index;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(index)}
                  className={`rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    isSelected
                      ? "border-mint bg-mint-light text-mint-dark"
                      : "border-border bg-white text-foreground"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </Card>

        <div className="flex flex-col gap-3">
          {currentIndex > 0 ? (
            <SecondaryButton fullWidth onClick={handlePrevious}>
              Previous
            </SecondaryButton>
          ) : null}
          <PrimaryButton fullWidth disabled={selected === null} onClick={handleNext}>
            {isLast ? "Finish" : "Next"}
          </PrimaryButton>
        </div>
      </main>
    </>
  );
}
