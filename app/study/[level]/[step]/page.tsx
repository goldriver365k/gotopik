"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import WordCard from "@/components/WordCard";
import { SAMPLE_WORDS } from "@/data/sampleWords";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import { useSaveProgress } from "@/hooks/useSaveProgress";

export default function WordsPage() {
  const params = useParams<{ level: string; step: string }>();
  const lang = useLang();
  useSaveProgress(Number(params.level), Number(params.step), "words");

  return (
    <>
      <Header
        title={`TOPIK ${params.level} · STEP ${params.step}`}
        backHref={`/level/${params.level}`}
      />
      <main className="flex flex-1 flex-col gap-5 px-5 py-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-foreground">
            {t("sectionWords", lang).toUpperCase()}
          </h2>
          <ProgressBar value={1} max={6} label={t("learningStage", lang)} />
        </div>

        <div className="flex flex-col gap-3">
          {SAMPLE_WORDS.map((word) => (
            <WordCard key={word.id} word={word} lang={lang} />
          ))}
        </div>

        <div className="mt-2 flex flex-col gap-3">
          <Link href={`/level/${params.level}`}>
            <SecondaryButton fullWidth>
              {t("backToSteps", lang)}
            </SecondaryButton>
          </Link>
          <Link href={`/study/${params.level}/${params.step}/sentences`}>
            <PrimaryButton fullWidth>{t("next", lang)}</PrimaryButton>
          </Link>
        </div>
      </main>
    </>
  );
}
