import type { ButtonHTMLAttributes } from "react";

type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export default function SecondaryButton({
  fullWidth,
  className = "",
  children,
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      className={`${fullWidth ? "w-full" : ""} inline-flex items-center justify-center rounded-xl border border-mint bg-white px-5 py-3 text-sm font-bold text-mint-dark transition-colors hover:bg-mint-light active:bg-mint-light disabled:cursor-not-allowed disabled:border-border disabled:text-muted ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
