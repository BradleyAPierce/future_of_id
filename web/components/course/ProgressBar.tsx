interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-lg bg-[var(--border)]">
      <div className="h-3 bg-[var(--success)]" style={{ width: `${progress}%` }} />
    </div>
  );
}
