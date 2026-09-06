"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import ReadingQuestion from "@/components/ReadingQuestion";
import ContentPending from "@/components/ContentPending";
import { getStepContent, hasWriting, getSectionCount } from "@/lib/content";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import { useSaveProgress } from "@/hooks/useSaveProgress";

export default function ReadingPage() {
  const params = useParams<{ level: string; step: string }>();
  const level = Number(params.level);
  const step = Number(params.step);
  const lang = useLang();
  useSaveProgress(level, step, "reading");
  const content = getStepContent(level, step);
  // TOPIK 1-2 never set `writing`, so this always resolves to practice for
  // them — only a TOPIK 3+ STEP with real writing items inserts that stop.
  const nextHref = hasWriting(content)
    ? `/study/${params.level}/${params.step}/writing`
    : `/study/${params.level}/${params.step}/practice`;

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
          <ProgressBar
            value={5}
            max={getSectionCount(content)}
            label={t("learningStage", lang)}
          />
        </div>

        <div className="flex flex-col gap-3">
          {content && content.reading.length > 0 ? (
            content.reading.map((question) => (
              <ReadingQuestion key={question.id} data={question} lang={lang} />
            ))
          ) : (
            <ContentPending
              backHref={`/study/${params.level}/${params.step}/listening`}
              message="No reading questions yet for this STEP."
            />
          )}
        </div>

        <div className="mt-2 flex flex-col gap-3">
          <Link href={`/study/${params.level}/${params.step}/listening`}>
            <SecondaryButton fullWidth>
              {t("previous", lang)}
            </SecondaryButton>
          </Link>
          <Link href={nextHref}>
            <PrimaryButton fullWidth>{t("next", lang)}</PrimaryButton>
          </Link>
        </div>
      </main>
    </>
  );
}
