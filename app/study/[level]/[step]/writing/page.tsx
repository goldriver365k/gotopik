"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import WritingQuestion from "@/components/WritingQuestion";
import { getStepContent, hasWriting, getSectionCount } from "@/lib/content";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import { useSaveProgress } from "@/hooks/useSaveProgress";

export default function WritingPage() {
  const params = useParams<{ level: string; step: string }>();
  const router = useRouter();
  const level = Number(params.level);
  const step = Number(params.step);
  const lang = useLang();
  useSaveProgress(level, step, "writing");
  const content = getStepContent(level, step);
  const showWriting = hasWriting(content);

  // TOPIK 1-2 (and any TOPIK 3+ STEP with no writing items yet) never show
  // this screen — silently continue straight to PRACTICE instead of a
  // dead end, per this stage's fallback rule.
  useEffect(() => {
    if (!showWriting) {
      router.replace(`/study/${params.level}/${params.step}/practice`);
    }
  }, [showWriting, params.level, params.step, router]);

  if (!showWriting) return null;

  return (
    <>
      <Header
        title={`TOPIK ${params.level} · STEP ${params.step}`}
        backHref={`/study/${params.level}/${params.step}/reading`}
      />
      <main className="flex flex-1 flex-col gap-5 px-5 py-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold text-foreground">
            {t("sectionWriting", lang).toUpperCase()}
          </h2>
          <ProgressBar
            value={6}
            max={getSectionCount(content)}
            label={t("learningStage", lang)}
          />
        </div>

        <div className="flex flex-col gap-3">
          {content!.writing!.map((item) => (
            <WritingQuestion key={item.id} data={item} lang={lang} />
          ))}
        </div>

        <div className="mt-2 flex flex-col gap-3">
          <Link href={`/study/${params.level}/${params.step}/reading`}>
            <SecondaryButton fullWidth>{t("previous", lang)}</SecondaryButton>
          </Link>
          <Link href={`/study/${params.level}/${params.step}/practice`}>
            <PrimaryButton fullWidth>{t("next", lang)}</PrimaryButton>
          </Link>
        </div>
      </main>
    </>
  );
}
