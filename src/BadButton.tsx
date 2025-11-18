import type { ButtonHTMLAttributes } from "react";

export type BadButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  level?: "mild" | "annoying" | "unusable";
};

export function BadButton({ level = "annoying", children, ...rest }: BadButtonProps) {
  const base = {
    padding: "0.75rem 2.5rem",
    borderRadius: "999px",
    border: "3px solid hotpink",
    background:
      level === "mild"
        ? "yellow"
        : level === "annoying"
        ? "lime"
        : "repeating-linear-gradient(45deg, red, red 5px, yellow 5px, yellow 10px)",
    boxShadow: "0 0 10px red",
    fontWeight: "bold",
    cursor: "pointer" as const,
    animation: level === "unusable" ? "bad-ui-shake 0.2s infinite" : undefined
  };

  return (
    <button style={base} {...rest}>
      {children ?? "Click me (if you dare)"}
    </button>
  );
}
