"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import {
  SELF_LEVEL_OPTIONS,
  SELF_LEVEL_STORAGE_KEY,
  getSavedSelfLevel,
} from "@/lib/selfLevel";

export default function SelfLevelPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(getSavedSelfLevel);

  const handleContinue = () => {
    if (!selected) return;
    localStorage.setItem(SELF_LEVEL_STORAGE_KEY, selected);
    router.push("/home");
  };

  return (
    <div className="flex min-h-dvh flex-col px-6 pb-8 pt-10">
      <div className="mb-6 flex flex-col gap-1.5">
        <h1 className="text-2xl font-black text-foreground">
          How is your Korean?
        </h1>
        <p className="text-sm font-medium text-muted">
          Choose the option that best describes your current Korean level.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-3">
        {SELF_LEVEL_OPTIONS.map((option) => {
          const isSelected = option.value === selected;
          return (
            <Card
              key={option.value}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(option.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(option.value);
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

      <div className="mt-6">
        <PrimaryButton fullWidth disabled={!selected} onClick={handleContinue}>
          Continue
        </PrimaryButton>
      </div>
    </div>
  );
}
