"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import ProgressBar from "@/components/ProgressBar";
import { getLevel } from "@/lib/levels";
import { useLang } from "@/hooks/useLang";
import { t } from "@/lib/i18n";
import {
  getLevelProgressPercent,
  getValidCurrentPosition,
  getSectionPath,
  getSectionLabel,
  type CurrentPosition,
} from "@/lib/progress";

export default function ContinueLearningCard() {
  const lang = useLang();
  // SSR-safe default (no position) so server and first client render match
  // exactly; the real localStorage position loads after mount.
  const [position, setPosition] = useState<CurrentPosition | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setPosition(getValidCurrentPosition());
  }, []);

  const positionLevel = position ? getLevel(position.level) : null;
  const positionProgress =
    position && positionLevel
      ? getLevelProgressPercent(position.level, positionLevel.stepCount)
      : null;

  if (position) {
    return (
      <Card className="flex flex-col gap-3">
        <div>
          <p className="text-sm font-bold text-mint-dark">
            {t("continueLearning", lang)}
          </p>
          <p className="mt-1 text-base font-bold text-foreground">
            TOPIK {position.level} · STEP {position.step}
          </p>
          <p className="text-sm text-muted">
            {getSectionLabel(position.section, lang)}
          </p>
        </div>
        {positionProgress !== null ? (
          <ProgressBar value={positionProgress} label={t("progress", lang)} />
        ) : null}
        <Link href={getSectionPath(position.level, position.step, position.section)}>
          <PrimaryButton fullWidth>{t("continue", lang)}</PrimaryButton>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col gap-3">
      <div>
        <p className="text-sm font-bold text-mint-dark">
          {t("startLearningTitle", lang)}
        </p>
        <p className="mt-1 text-sm text-muted">
          {t("chooseLevelToBegin", lang)}
        </p>
      </div>
      <Link href="/home#levels">
        <SecondaryButton fullWidth>{t("chooseLevel", lang)}</SecondaryButton>
      </Link>
    </Card>
  );
}
