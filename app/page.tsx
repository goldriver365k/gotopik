"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { LEARNING_LANGUAGE_STORAGE_KEY } from "@/lib/languages";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";

export default function Landing() {
  const router = useRouter();
  const lang = useLang();

  const handleStartLearning = () => {
    const savedLanguage = localStorage.getItem(LEARNING_LANGUAGE_STORAGE_KEY);
    router.push(savedLanguage ? "/home" : "/language");
  };

  return (
    <div className="flex min-h-dvh flex-col px-6 pb-10 pt-8">
      {/* 상단: 로고 영역 + 언어 선택 */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-black tracking-tight text-mint-dark">
          GO TOPIK
        </span>
        <Link
          href="/language"
          className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted"
        >
          {t("language", lang)}
        </Link>
      </div>

      {/* 중앙: 캐릭터 영역 + 타이틀 */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
        <div className="animate-character-float relative h-56 w-56 overflow-hidden rounded-3xl">
          <Image
            src="/character-hanbok.webp"
            alt="GO TOPIK character"
            fill
            priority
            sizes="224px"
            className="object-cover object-top"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-black leading-snug text-foreground">
            {t("landingTitle1", lang)}
            <br />
            {t("landingTitle2", lang)}
          </h1>
          <p className="text-sm font-medium text-muted">
            {t("landingSubtitle", lang)}
          </p>
        </div>
      </div>

      {/* 하단: 버튼 */}
      <div className="flex flex-col gap-3">
        <PrimaryButton fullWidth onClick={handleStartLearning}>
          {t("startLearning", lang)}
        </PrimaryButton>
        <Link href="/diagnostic">
          <SecondaryButton fullWidth>{t("checkMyLevel", lang)}</SecondaryButton>
        </Link>
        <Link
          href="/about-topik"
          className="mt-1 text-center text-xs font-semibold text-muted"
        >
          {t("whatIsTopik", lang)}
        </Link>
      </div>
    </div>
  );
}
