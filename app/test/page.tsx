"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import TestFeatureCard from "@/components/TestFeatureCard";
import { getDiagnosticResult, type DiagnosticResult } from "@/lib/diagnostic";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";

export default function TestPage() {
  const lang = useLang();
  // SSR-safe default (no result) so server and first client render match
  // exactly; the real localStorage result loads after mount.
  const [result, setResult] = useState<DiagnosticResult | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setResult(getDiagnosticResult());
  }, []);

  return (
    <>
      <Header title={t("navTest", lang)} />
      <main className="flex flex-1 flex-col gap-4 px-5 py-6">
        <p className="text-sm text-muted">{t("testSubtitle", lang)}</p>
        <Link
          href="/about-topik"
          className="-mt-2 text-xs font-semibold text-mint-dark"
        >
          {t("newToTopik", lang)}
        </Link>

        <div className="flex flex-col gap-3">
          <TestFeatureCard
            title={t("levelTestTitle", lang)}
            description={t("findEstimated", lang)}
            href="/diagnostic"
            lang={lang}
            extra={
              result ? (
                <p className="text-xs font-semibold text-mint-dark">
                  {t("estimatedLevelTitle", lang)}: TOPIK{" "}
                  {result.estimatedLevel} · {t("retakeTest", lang)}
                </p>
              ) : null
            }
          />
          <TestFeatureCard
            title={t("miniTest", lang)}
            description={t("miniTestDesc", lang)}
            lang={lang}
          />
          <TestFeatureCard
            title={t("mockTopik1", lang)}
            description={t("mockTopik1Desc", lang)}
            lang={lang}
          />
          <TestFeatureCard
            title={t("mockTopik2", lang)}
            description={t("mockTopik2Desc", lang)}
            lang={lang}
          />
          <TestFeatureCard
            title={t("wrongAnswers", lang)}
            description={t("wrongAnswersDesc", lang)}
            lang={lang}
          />
          <TestFeatureCard
            title={t("writingPractice", lang)}
            description={t("writingPracticeDesc", lang)}
            lang={lang}
          />
        </div>
      </main>
    </>
  );
}
