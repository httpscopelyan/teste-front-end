import type { ReactNode } from "react"
import "./button.scss"

interface ButtonProps {
    children: ReactNode;
    variant?: "seebutton" | "buy" | "checkbutton";
    fullWidth?: boolean;
    onClick?: () => void;
}

export function Buttons({ children, variant = "seebutton", fullWidth = false, onClick }: ButtonProps) {
    const classes = ["button", `button--${variant}`, fullWidth && "button--full-width"]
        .filter(Boolean)
        .join(" ")

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )
}
