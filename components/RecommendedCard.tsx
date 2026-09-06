"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";
import { getLevelProfile, type LevelProfile } from "@/lib/levelProfile";
import { getSavedSelfLevel } from "@/lib/selfLevel";
import { getSectionPath } from "@/lib/progress";

export default function RecommendedCard() {
  // SSR-safe defaults (no profile) so server and first client render match
  // exactly; the real localStorage data loads after mount.
  const [profile, setProfile] = useState<LevelProfile | null>(null);
  const [hasSelfLevel, setHasSelfLevel] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing client-only localStorage data after hydration
    setProfile(getLevelProfile());
    setHasSelfLevel(getSavedSelfLevel() !== null);
  }, []);

  if (profile) {
    const wordsPath = getSectionPath(
      profile.recommendedLevel,
      profile.recommendedStep,
      "words",
    );

    return (
      <Card className="flex flex-col gap-3">
        <div>
          <p className="text-sm font-bold text-mint-dark">Recommended for You</p>
          <p className="mt-1 text-base font-bold text-foreground">
            TOPIK {profile.recommendedLevel} · STEP {profile.recommendedStep}
          </p>
          <p className="text-sm text-muted">Suggested from your level check</p>
        </div>
        <Link href={wordsPath}>
          <PrimaryButton fullWidth>Start Recommended</PrimaryButton>
        </Link>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col gap-3">
      <div>
        <p className="text-sm font-bold text-mint-dark">Recommended for You</p>
        <p className="mt-1 text-sm text-muted">
          Find your recommended starting point
        </p>
      </div>
      <Link href={hasSelfLevel ? "/quick-check" : "/self-level"}>
        <SecondaryButton fullWidth>
          {hasSelfLevel ? "Complete Quick Check" : "Check My Level"}
        </SecondaryButton>
      </Link>
    </Card>
  );
}
