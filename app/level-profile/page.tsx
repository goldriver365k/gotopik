"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { getSavedSelfLevel, getSelfLevelShortLabel } from "@/lib/selfLevel";
import { getTopikHistory, type TopikHistory } from "@/lib/topikHistory";
import { getQuickCheckResult, type QuickCheckResult } from "@/lib/quickCheck";
import { getSectionPath } from "@/lib/progress";
import {
  buildLevelProfile,
  saveLevelProfile,
  type LevelProfile,
} from "@/lib/levelProfile";

type ProfileData = {
  selfLevel: string | null;
  topikHistory: TopikHistory;
  quickCheckResult: QuickCheckResult | null;
};

export default function LevelProfilePage() {
  // SSR-safe default (no data loaded yet) so server and first client render
  // match exactly; the real localStorage-derived profile loads after mount.
  const [data, setData] = useState<ProfileData | null>(null);
  const [profile, setProfile] = useState<LevelProfile | null>(null);

  useEffect(() => {
    const selfLevel = getSavedSelfLevel();
    const topikHistory = getTopikHistory();
    const quickCheckResult = getQuickCheckResult();

    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setData({ selfLevel, topikHistory, quickCheckResult });

    if (selfLevel !== null || quickCheckResult !== null || topikHistory.level !== null) {
      const nextProfile = buildLevelProfile({ selfLevel, quickCheckResult, topikHistory });
      saveLevelProfile(nextProfile);
      setProfile(nextProfile);
    }
  }, []);

  if (!data || !profile) {
    return (
      <>
        <Header title="Your Level Profile" backHref="/home" />
        <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center">
          <p className="text-base font-bold text-foreground">No profile yet</p>
          <p className="text-sm text-muted">
            Start with a quick self-assessment so we can suggest where to
            begin.
          </p>
          <Link href="/self-level" className="w-full">
            <PrimaryButton fullWidth>Start Self Assessment</PrimaryButton>
          </Link>
        </main>
      </>
    );
  }

  const { selfLevel, topikHistory, quickCheckResult } = data;
  const selfLevelLabel = selfLevel ? getSelfLevelShortLabel(selfLevel) : null;
  const wordsPath = getSectionPath(profile.recommendedLevel, profile.recommendedStep, "words");

  return (
    <>
      <Header title="Your Level Profile" backHref="/home" />
      <main className="flex flex-1 flex-col gap-6 px-5 py-6">
        <p className="text-sm text-muted">
          We use your self-assessment and quick check to suggest where to
          start.
        </p>

        <div className="flex flex-col gap-3">
          {selfLevelLabel ? (
            <Card className="flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted">Self Assessment</p>
              <p className="text-base font-bold text-foreground">{selfLevelLabel}</p>
            </Card>
          ) : null}

          {topikHistory.level !== null ? (
            <Card className="flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted">Previous TOPIK</p>
              <p className="text-base font-bold text-foreground">
                Level {topikHistory.level}
              </p>
            </Card>
          ) : null}

          {quickCheckResult ? (
            <Card className="flex flex-col gap-1">
              <p className="text-xs font-semibold text-muted">Quick Check</p>
              <p className="text-base font-bold text-foreground">
                Estimated TOPIK {quickCheckResult.estimatedLevel}
              </p>
            </Card>
          ) : (
            <Card className="flex flex-col gap-2">
              <p className="text-sm text-muted">
                Complete the Quick Check for a better recommendation.
              </p>
              <Link href="/quick-check">
                <SecondaryButton fullWidth>Take Quick Check</SecondaryButton>
              </Link>
            </Card>
          )}

          <Card className="flex flex-col gap-1 border-mint bg-mint-light">
            <p className="text-xs font-semibold text-mint-dark">Recommended Start</p>
            <p className="text-lg font-black text-foreground">
              TOPIK {profile.recommendedLevel} · STEP {profile.recommendedStep}
            </p>
          </Card>
        </div>

        <div className="flex flex-col gap-3">
          <Link href={wordsPath}>
            <PrimaryButton fullWidth>Start Recommended</PrimaryButton>
          </Link>
          <Link href="/home">
            <SecondaryButton fullWidth>Choose My Level</SecondaryButton>
          </Link>
          <Link
            href="/diagnostic"
            className="text-center text-xs font-semibold text-muted"
          >
            Take Full Level Test
          </Link>
        </div>
      </main>
    </>
  );
}
