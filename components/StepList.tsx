import StepCard from "@/components/StepCard";
import type { Step } from "@/lib/steps";

type StepListProps = {
  level: number;
  steps: Step[];
  lang: string;
};

export default function StepList({ level, steps, lang }: StepListProps) {
  return (
    <div className="flex flex-col gap-3">
      {steps.map((step) => (
        <StepCard key={step.step} level={level} step={step} lang={lang} />
      ))}
    </div>
  );
}
