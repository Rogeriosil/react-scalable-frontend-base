import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", style, ...props }: Props) {
  const base: React.CSSProperties = {
    borderRadius: 12,
    padding: "10px 14px",
    border: "1px solid transparent",
    cursor: "pointer",
    fontWeight: 600,
    transition: "transform .08s ease, background .15s ease, border-color .15s ease",
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: { background: "var(--primary)", color: "white" },
    ghost: { background: "transparent", color: "var(--text)", borderColor: "var(--border)" },
  };

  return (
    <button
      {...props}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    />
  );
}
