import Surface from "./Surface";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <Surface
      padding="md"
      interactive
      className={`rounded-2xl ${className}`}>
      {children}
    </Surface>
  );
}
