import FeedbackPanel from "@/components/ui/FeedbackPanel";
import Surface from "@/components/ui/Surface";

type AIFeedbackType = "reflection" | "scenario";
type AIFeedbackState = "empty" | "generating" | "complete" | "error";

type AIFeedbackPanelProps = {
  type?: AIFeedbackType;
  state?: AIFeedbackState;
  summary?: string;
  strengths?: string[];
  gap?: string;
  nextStep?: string;
  errorMessage?: string;
  className?: string;
};

export default function AIFeedbackPanel({
  type = "reflection",
  state = "complete",
  summary,
  strengths = [],
  gap,
  nextStep,
  errorMessage,
  className = "",
}: AIFeedbackPanelProps) {
  if (state === "empty") {
    return null;
  }

  if (state === "generating") {
    return (
      <Surface padding="sm" className={`rounded-[var(--radius-lg)] ${className}`}>
        <p className="text-sm text-[var(--muted)]">Generating feedback...</p>
      </Surface>
    );
  }

  if (state === "error") {
    return (
      <FeedbackPanel tone="danger" className={className}>
        {errorMessage ?? "AI feedback failed."}
      </FeedbackPanel>
    );
  }

  const spacingClass = type === "scenario" ? "space-y-6" : "space-y-5";

  return (
    <Surface
      tone={type === "scenario" ? "elevated" : "default"}
      padding="sm"
      className={`${spacingClass} rounded-[var(--radius-lg)] ${className}`}>
      {summary && <p className="text-[var(--text)]">{summary}</p>}

      {strengths.length > 0 && (
        <FeedbackPanel tone="success">
          <ul className="list-disc space-y-2 pl-4">
            {strengths.map((strength) => (
              <li key={strength}>{strength}</li>
            ))}
          </ul>
        </FeedbackPanel>
      )}

      {gap && (
        <FeedbackPanel tone="danger">
          <span className="font-medium text-[var(--text)]">Gap: </span>
          {gap}
        </FeedbackPanel>
      )}

      {nextStep && (
        <FeedbackPanel tone="accent">
          <span className="font-medium text-[var(--text)]">Next step: </span>
          {nextStep}
        </FeedbackPanel>
      )}
    </Surface>
  );
}
