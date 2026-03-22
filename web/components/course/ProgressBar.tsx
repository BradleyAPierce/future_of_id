interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-800 rounded-lg h-3 overflow-hidden">
      <div className="bg-blue-500 h-3" style={{ width: `${progress}%` }} />
    </div>
  );
}
