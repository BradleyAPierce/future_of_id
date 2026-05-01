type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-[var(--text)] shadow-sm transition hover:border-[var(--primary)] hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}
