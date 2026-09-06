import type { ButtonHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  fullWidth?: boolean;
};

export default function PrimaryButton({
  fullWidth,
  className = "",
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={`${fullWidth ? "w-full" : ""} inline-flex items-center justify-center rounded-xl bg-mint px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-mint-dark active:bg-mint-dark disabled:cursor-not-allowed disabled:bg-border disabled:text-muted ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
