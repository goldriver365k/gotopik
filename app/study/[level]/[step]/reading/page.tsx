"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import ReadingQuestion from "@/components/ReadingQuestion";
import { SAMPLE_READING } from "@/data/sampleReading";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import { useSaveProgress } from "@/hooks/useSaveProgress";

export default function ReadingPage() {
  const params = useParams<{ level: string; step: string }>();
  const lang = useLang();
  useSaveProgress(Number(params.level), Number(params.step), "reading");

  return (
    <>
      <Header
        title={`TOPIK ${params.level} · STEP ${params.step}`}
        backHref={`/study/${params.level}/${params.step}/listening`}
      />
      <main className="flex flex-1 flex-col gap-5 px-5 py-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-foreground">
            {t("sectionReading", lang).toUpperCase()}
          </h2>
          <ProgressBar value={5} max={6} label={t("learningStage", lang)} />
        </div>

        <div className="flex flex-col gap-3">
          {SAMPLE_READING.map((question) => (
            <ReadingQuestion key={question.id} data={question} lang={lang} />
          ))}
        </div>

        <div className="mt-2 flex flex-col gap-3">
          <Link href={`/study/${params.level}/${params.step}/listening`}>
            <SecondaryButton fullWidth>
              {t("previous", lang)}
            </SecondaryButton>
          </Link>
          <Link href={`/study/${params.level}/${params.step}/practice`}>
            <PrimaryButton fullWidth>{t("next", lang)}</PrimaryButton>
          </Link>
        </div>
      </main>
    </>
  );
}
