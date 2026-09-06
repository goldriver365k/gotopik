"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import WordCard from "@/components/WordCard";
import ContentPending from "@/components/ContentPending";
import { getStepContent, getSectionCount } from "@/lib/content";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import { useSaveProgress } from "@/hooks/useSaveProgress";

export default function WordsPage() {
  const params = useParams<{ level: string; step: string }>();
  const level = Number(params.level);
  const step = Number(params.step);
  const lang = useLang();
  useSaveProgress(level, step, "words");
  const content = getStepContent(level, step);

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
          <ProgressBar
            value={1}
            max={getSectionCount(content)}
            label={t("learningStage", lang)}
          />
        </div>

        <div className="flex flex-col gap-3">
          {content && content.words.length > 0 ? (
            content.words.map((word) => (
              <WordCard key={word.id} word={word} lang={lang} />
            ))
          ) : (
            <ContentPending backHref={`/level/${params.level}`} />
          )}
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
