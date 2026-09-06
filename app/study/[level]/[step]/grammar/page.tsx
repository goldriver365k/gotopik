"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import GrammarCard from "@/components/GrammarCard";
import ContentPending from "@/components/ContentPending";
import { getStepContent } from "@/lib/content";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import { useSaveProgress } from "@/hooks/useSaveProgress";

export default function GrammarPage() {
  const params = useParams<{ level: string; step: string }>();
  const level = Number(params.level);
  const step = Number(params.step);
  const lang = useLang();
  useSaveProgress(level, step, "grammar");
  const content = getStepContent(level, step);

  return (
    <>
      <Header
        title={`TOPIK ${params.level} · STEP ${params.step}`}
        backHref={`/study/${params.level}/${params.step}/sentences`}
      />
      <main className="flex flex-1 flex-col gap-5 px-5 py-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-foreground">
            {t("sectionGrammar", lang).toUpperCase()}
          </h2>
          <ProgressBar value={3} max={6} label={t("learningStage", lang)} />
        </div>

        <div className="flex flex-col gap-3">
          {content && content.grammar.length > 0 ? (
            content.grammar.map((grammar) => (
              <GrammarCard key={grammar.id} grammar={grammar} lang={lang} />
            ))
          ) : (
            <ContentPending
              backHref={`/study/${params.level}/${params.step}/sentences`}
              message="No grammar points yet for this STEP."
            />
          )}
        </div>

        <div className="mt-2 flex flex-col gap-3">
          <Link href={`/study/${params.level}/${params.step}/sentences`}>
            <SecondaryButton fullWidth>
              {t("previous", lang)}
            </SecondaryButton>
          </Link>
          <Link href={`/study/${params.level}/${params.step}/listening`}>
            <PrimaryButton fullWidth>{t("next", lang)}</PrimaryButton>
          </Link>
        </div>
      </main>
    </>
  );
}
