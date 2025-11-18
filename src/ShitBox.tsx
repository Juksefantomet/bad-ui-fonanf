import type { ButtonHTMLAttributes } from "react";

export type ShitBoxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  level?: "dark" | "darker" | "pitch-black";
};

export function ShitBox({ level = "dark", children, ...rest }: ShitBoxProps) {
    const cssProp = level === 'dark' ? 'brown' : 'black'

    return(
    <>
    <div style={{color: `${cssProp}`}}>
        THE DARK BOX
    </div>
    </>
    )
}