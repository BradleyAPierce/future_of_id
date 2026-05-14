import Link from "next/link";
import { forwardRef } from "react";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  Ref,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost" | "danger";
type ButtonSize = "sm" | "md";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type LinkButtonProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--primary)] bg-[var(--primary)] text-[var(--bg)] shadow-[var(--shadow-sm)] hover:bg-[var(--primary-hover)] hover:shadow-[var(--shadow-md)]",
  secondary:
    "border border-[var(--border)] bg-transparent text-[var(--text)] shadow-[var(--shadow-sm)] hover:border-[var(--primary)] hover:bg-[var(--surface-elevated)] hover:shadow-[var(--shadow-md)]",
  accent:
    "border border-[var(--accent)] bg-transparent text-[var(--accent-hover)] shadow-[var(--shadow-sm)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)] hover:shadow-[var(--shadow-md)]",
  ghost:
    "border border-transparent bg-transparent text-[var(--text)] hover:bg-[var(--surface-elevated)]",
  danger:
    "border border-[var(--danger)] bg-[var(--danger)] text-[var(--bg)] shadow-[var(--shadow-sm)] hover:bg-[var(--danger-hover)] hover:shadow-[var(--shadow-md)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
};

function getButtonClasses({
  variant,
  size,
  className,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  className?: string;
}) {
  return `inline-flex items-center justify-center rounded-[var(--radius-md)] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:cursor-not-allowed disabled:border-[var(--border)] disabled:bg-[var(--border)] disabled:text-[var(--muted)] disabled:shadow-none disabled:hover:bg-[var(--border)] disabled:hover:shadow-none ${sizeClasses[size]} ${variantClasses[variant]} ${className ?? ""}`;
}

const Button = forwardRef<HTMLAnchorElement | HTMLButtonElement, ButtonProps>(
  function Button(
    { children, variant = "primary", size = "md", className, ...props },
    ref,
  ) {
    const buttonClasses = getButtonClasses({ variant, size, className });

    if ("href" in props && props.href) {
      const { href, ...linkProps } = props as LinkButtonProps;

      return (
        <Link
          {...linkProps}
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
          className={buttonClasses}>
          {children}
        </Link>
      );
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
      <button
        {...buttonProps}
        ref={ref as Ref<HTMLButtonElement>}
        className={buttonClasses}>
        {children}
      </button>
    );
  },
);

export default Button;
