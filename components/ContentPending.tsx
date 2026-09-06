import Link from "next/link";
import Card from "@/components/Card";
import SecondaryButton from "@/components/SecondaryButton";

type ContentPendingProps = {
  backHref: string;
  message?: string;
};

// Shown instead of a study section when getStepContent() has no data yet
// (a whole STEP, or one section of it) — keeps missing content from ever
// crashing a study screen.
export default function ContentPending({
  backHref,
  message = "This lesson content is being prepared.",
}: ContentPendingProps) {
  return (
    <Card className="flex flex-col items-center gap-3 py-8 text-center">
      <p className="text-sm font-semibold text-foreground">{message}</p>
      <Link href={backHref}>
        <SecondaryButton>Back to Steps</SecondaryButton>
      </Link>
    </Card>
  );
}
