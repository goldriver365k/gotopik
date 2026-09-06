"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import ListeningQuestion from "@/components/ListeningQuestion";
import ContentPending from "@/components/ContentPending";
import { getStepContent, getSectionCount } from "@/lib/content";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import { useSaveProgress } from "@/hooks/useSaveProgress";

export default function ListeningPage() {
  const params = useParams<{ level: string; step: string }>();
  const level = Number(params.level);
  const step = Number(params.step);
  const lang = useLang();
  useSaveProgress(level, step, "listening");
  const content = getStepContent(level, step);

  return (
    <>
      <Header
        title={`TOPIK ${params.level} · STEP ${params.step}`}
        backHref={`/study/${params.level}/${params.step}/grammar`}
      />
      <main className="flex flex-1 flex-col gap-5 px-5 py-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-foreground">
            {t("sectionListening", lang).toUpperCase()}
          </h2>
          <ProgressBar
            value={4}
            max={getSectionCount(content)}
            label={t("learningStage", lang)}
          />
        </div>

        <div className="flex flex-col gap-3">
          {content && content.listening.length > 0 ? (
            content.listening.map((question) => (
              <ListeningQuestion key={question.id} data={question} lang={lang} />
            ))
          ) : (
            <ContentPending
              backHref={`/study/${params.level}/${params.step}/grammar`}
              message="No listening questions yet for this STEP."
            />
          )}
        </div>

        <div className="mt-2 flex flex-col gap-3">
          <Link href={`/study/${params.level}/${params.step}/grammar`}>
            <SecondaryButton fullWidth>
              {t("previous", lang)}
            </SecondaryButton>
          </Link>
          <Link href={`/study/${params.level}/${params.step}/reading`}>
            <PrimaryButton fullWidth>{t("next", lang)}</PrimaryButton>
          </Link>
        </div>
      </main>
    </>
  );
}
