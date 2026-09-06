"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import {
  TEST_TYPE_OPTIONS,
  LEVEL_OPTIONS,
  WHEN_OPTIONS,
  getTopikHistory,
  saveTopikHistory,
  type TopikTestType,
  type TopikWhen,
} from "@/lib/topikHistory";

// 0 is a UI-only sentinel for "no level / don't remember" — never a real
// TOPIK level (1–6) — so it's converted back to null before saving.
const NO_LEVEL = 0;
const LEVEL_CHOICES = [
  ...LEVEL_OPTIONS,
  { value: NO_LEVEL, label: "No level / I don't remember" },
];

function ChoiceGrid<T extends string | number>({
  options,
  selected,
  onSelect,
  columns,
}: {
  options: { value: T; label: string }[];
  selected: T | null;
  onSelect: (value: T) => void;
  columns: 2 | 3;
}) {
  return (
    <div className={`grid gap-2 ${columns === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
      {options.map((option) => {
        const isSelected = option.value === selected;
        return (
          <Card
            key={String(option.value)}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(option.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onSelect(option.value);
            }}
            className={`cursor-pointer p-3 text-center transition-colors ${
              isSelected ? "border-mint bg-mint-light" : "border-border bg-white"
            }`}
          >
            <span
              className={`text-xs font-semibold ${
                isSelected ? "text-mint-dark" : "text-foreground"
              }`}
            >
              {option.label}
            </span>
          </Card>
        );
      })}
    </div>
  );
}

export default function TopikHistoryPage() {
  const router = useRouter();
  const [saved] = useState(getTopikHistory);
  const [testType, setTestType] = useState<TopikTestType | null>(saved.testType);
  const [level, setLevel] = useState<number>(saved.level ?? NO_LEVEL);
  const [scoreInput, setScoreInput] = useState(
    saved.score != null ? String(saved.score) : "",
  );
  const [when, setWhen] = useState<TopikWhen | null>(saved.when);

  // Both Continue and Skip move on to Quick Check next — Quick Check has
  // its own Skip straight to /home, so a user can still reach HOME without
  // ever answering a question.
  const goToQuickCheck = () => router.push("/quick-check");

  const handleContinue = () => {
    const trimmedScore = scoreInput.trim();
    const parsedScore = Number(trimmedScore);
    const score = trimmedScore === "" || Number.isNaN(parsedScore) ? null : parsedScore;

    saveTopikHistory({
      testType,
      level: level === NO_LEVEL ? null : level,
      score,
      when,
    });
    goToQuickCheck();
  };

  return (
    <div className="flex min-h-dvh flex-col px-6 pb-8 pt-10">
      <div className="mb-6 flex flex-col gap-1.5">
        <h1 className="text-2xl font-black text-foreground">
          Your TOPIK Experience
        </h1>
        <p className="text-sm font-medium text-muted">
          Tell us about your most recent TOPIK result.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6">
        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-bold text-foreground">
            Which TOPIK test did you take?
          </h2>
          <ChoiceGrid
            options={TEST_TYPE_OPTIONS}
            selected={testType}
            onSelect={setTestType}
            columns={3}
          />
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-bold text-foreground">Previous TOPIK Level</h2>
          <p className="text-xs font-medium text-muted">What level did you receive?</p>
          <ChoiceGrid options={LEVEL_CHOICES} selected={level} onSelect={setLevel} columns={3} />
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-bold text-foreground">
            Do you remember your score?
          </h2>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-muted">Score</span>
            <input
              type="number"
              inputMode="numeric"
              placeholder="e.g. 142"
              value={scoreInput}
              onChange={(e) => setScoreInput(e.target.value)}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground outline-none focus:border-mint"
            />
          </label>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-sm font-bold text-foreground">
            When did you take TOPIK?
          </h2>
          <div className="flex flex-col gap-2">
            {WHEN_OPTIONS.map((option) => {
              const isSelected = option.value === when;
              return (
                <Card
                  key={option.value}
                  role="button"
                  tabIndex={0}
                  onClick={() => setWhen(option.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setWhen(option.value);
                  }}
                  className={`flex cursor-pointer items-center justify-between gap-3 p-4 transition-colors ${
                    isSelected ? "border-mint bg-mint-light" : "border-border bg-white"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      isSelected ? "text-mint-dark" : "text-foreground"
                    }`}
                  >
                    {option.label}
                  </span>
                  {isSelected ? (
                    <span className="text-sm font-bold text-mint-dark">✓</span>
                  ) : null}
                </Card>
              );
            })}
          </div>
        </section>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <PrimaryButton fullWidth onClick={handleContinue}>
          Continue
        </PrimaryButton>
        <SecondaryButton fullWidth onClick={goToQuickCheck}>
          Skip
        </SecondaryButton>
      </div>
    </div>
  );
}
