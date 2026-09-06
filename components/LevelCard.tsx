import Link from "next/link";
import Card from "@/components/Card";
import ProgressBar from "@/components/ProgressBar";
import type { Level } from "@/lib/levels";
import { t } from "@/lib/i18n";

type LevelCardProps = {
  level: Level;
  lang: string;
};

export default function LevelCard({ level, lang }: LevelCardProps) {
  return (
    <Link href={`/level/${level.level}`}>
      <Card className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-foreground">
            {level.title}
          </span>
          <span className="text-xs font-semibold text-muted">
            {t(level.descriptionKey, lang)}
          </span>
        </div>
        <ProgressBar value={level.progress} label={t("progress", lang)} />
      </Card>
    </Link>
  );
}
