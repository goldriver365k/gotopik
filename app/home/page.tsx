"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import LevelCard from "@/components/LevelCard";
import ContinueLearningCard from "@/components/ContinueLearningCard";
import RecommendedCard from "@/components/RecommendedCard";
import { LEVELS, type Level } from "@/lib/levels";
import { getLevelProgressPercent } from "@/lib/progress";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";

export default function Home() {
  const lang = useLang();
  // SSR-safe default (sample level progress) so server and first client
  // render match exactly; real localStorage progress loads after mount.
  const [levels, setLevels] = useState<Level[]>(LEVELS);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setLevels(
      LEVELS.map((level) => ({
        ...level,
        progress: getLevelProgressPercent(level.level, level.stepCount),
      })),
    );
  }, []);

  return (
    <>
      <Header
        title="GO TOPIK"
        right={
          <Link
            href="/language"
            className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted"
          >
            {t("language", lang)}
          </Link>
        }
      />
      <main className="flex flex-1 flex-col gap-6 px-5 py-6">
        <section className="flex flex-col gap-3">
          <ContinueLearningCard />
        </section>

        <section className="flex flex-col gap-3">
          <RecommendedCard />
        </section>

        <section id="levels" className="flex flex-col gap-3">
          <div>
            <h2 className="text-lg font-bold text-foreground">
              {t("chooseYourLevel", lang)}
            </h2>
            <p className="text-sm text-muted">{t("allLevelsOpen", lang)}</p>
          </div>

          <div className="flex flex-col gap-3">
            {levels.map((level) => (
              <LevelCard key={level.level} level={level} lang={lang} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
