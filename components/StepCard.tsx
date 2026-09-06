import Link from "next/link";
import Card from "@/components/Card";
import { getStepStatusLabel, type Step } from "@/lib/steps";

type StepCardProps = {
  level: number;
  step: Step;
  lang: string;
};

const STATUS_TEXT_CLASS: Record<Step["status"], string> = {
  completed: "text-mint-dark",
  in_progress: "text-mint-dark",
  not_started: "text-muted",
};

export default function StepCard({ level, step, lang }: StepCardProps) {
  return (
    <Link href={`/study/${level}/${step.step}`}>
      <Card className="flex items-center justify-between">
        <span className="text-base font-bold text-foreground">
          STEP {step.step}
        </span>
        <span className={`text-xs font-semibold ${STATUS_TEXT_CLASS[step.status]}`}>
          {getStepStatusLabel(step.status, lang)}
        </span>
      </Card>
    </Link>
  );
}
