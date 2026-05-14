import type { TextareaHTMLAttributes } from "react";

type TextAreaFieldProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  "onChange"
> & {
  label?: string;
  helperText?: string;
  error?: string | null;
  onChange: (value: string) => void;
  showCharacterCount?: boolean;
  minLength?: number;
};

export default function TextAreaField({
  id,
  label,
  helperText,
  error,
  value,
  onChange,
  maxLength,
  minLength,
  showCharacterCount = false,
  className = "",
  ...props
}: TextAreaFieldProps) {
  const currentLength = typeof value === "string" ? value.trim().length : 0;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-[var(--text)]">
          {label}
        </label>
      )}

      <textarea
        id={id}
        value={value}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg)] p-3 text-[var(--text)] placeholder:text-[var(--muted)] transition focus:border-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        {...props}
      />

      {(helperText || error || showCharacterCount) && (
        <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className={error ? "text-[var(--danger-hover)]" : "text-[var(--muted)]"}>
            {error ?? helperText}
          </p>

          {showCharacterCount && maxLength && (
            <p className="text-[var(--muted)]">
              {currentLength} / {maxLength} characters
              {minLength ? ` (${minLength} minimum)` : ""}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
