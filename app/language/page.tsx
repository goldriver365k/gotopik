"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import {
  LANGUAGE_OPTIONS,
  LEARNING_LANGUAGE_STORAGE_KEY,
} from "@/lib/languages";

function getSavedLanguage(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(LEARNING_LANGUAGE_STORAGE_KEY);
}

export default function LanguagePage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(getSavedLanguage);

  const handleContinue = () => {
    if (!selected) return;
    localStorage.setItem(LEARNING_LANGUAGE_STORAGE_KEY, selected);
    router.push("/home");
  };

  return (
    <div className="flex min-h-dvh flex-col px-6 pb-8 pt-10">
      <div className="mb-6 flex flex-col gap-1.5">
        <h1 className="text-2xl font-black text-foreground">
          Choose your language
        </h1>
        <p className="text-sm font-medium text-muted">
          Select the language you want to use for explanations.
        </p>
      </div>

      <div className="grid flex-1 auto-rows-min grid-cols-2 gap-3">
        {LANGUAGE_OPTIONS.map((option) => {
          const isSelected = option.code === selected;
          return (
            <Card
              key={option.code}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(option.code)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(option.code);
              }}
              className={`flex cursor-pointer items-center justify-between p-4 transition-colors ${
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
