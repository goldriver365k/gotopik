"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import { getDiagnosticResult, type DiagnosticResult } from "@/lib/diagnostic";

export default function DiagnosticResultPage() {
  // SSR-safe default (no result) so server and first client render match
  // exactly; the real localStorage result loads after mount.
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setResult(getDiagnosticResult());
  }, []);

  if (!result) {
    return (
      <>
        <Header title="TOPIK Level Test" />
        <main className="flex flex-1 flex-col justify-center gap-6 px-5 py-6">
          <Card className="flex flex-col items-center gap-2 text-center">
            <p className="text-lg font-black text-foreground">
              No Result Yet
            </p>
            <p className="text-sm text-muted">
              Take the diagnostic test to see your estimated level.
            </p>
          </Card>
          <Link href="/diagnostic">
            <PrimaryButton fullWidth>Take the Test</PrimaryButton>
          </Link>
        </main>
      </>
    );
  }

  const { estimatedLevel, recommendedStep, scores } = result;

  return (
    <>
      <Header title="TOPIK Level Test" />
      <main className="flex flex-1 flex-col gap-6 px-5 py-6">
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="text-sm font-bold text-mint-dark">
            Your Estimated Level
          </p>
          <p className="text-3xl font-black text-foreground">
            TOPIK {estimatedLevel}
          </p>
          <p className="text-sm text-muted">
            This is an estimated level based on your answers.
          </p>
        </div>

        <Card className="flex flex-col gap-4">
          <ProgressBar value={scores.vocabulary} label="Vocabulary" />
          <ProgressBar value={scores.grammar} label="Grammar" />
          <ProgressBar value={scores.reading} label="Reading" />
        </Card>

        <Card className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-muted">
            Recommended Start
          </p>
          <p className="text-base font-bold text-foreground">
            TOPIK {estimatedLevel} · STEP {recommendedStep}
          </p>
        </Card>

        <div className="flex flex-col gap-3">
          <Link href={`/study/${estimatedLevel}/${recommendedStep}`}>
            <PrimaryButton fullWidth>Start Recommended Step</PrimaryButton>
          </Link>
          <Link href="/home">
            <SecondaryButton fullWidth>Choose Another Level</SecondaryButton>
          </Link>
          <Link
            href="/diagnostic"
            className="text-center text-xs font-semibold text-muted"
          >
            Retake Test
          </Link>
        </div>
      </main>
    </>
  );
}
