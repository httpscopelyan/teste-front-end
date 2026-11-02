import type { ReactNode } from "react"
import "./Button.scss"

interface ButtonProps {
    children: ReactNode;
    variant?: "seebutton" | "buy" | "checkbutton" | "subscribe" | "modal";
    fullWidth?: boolean;
    type?: "button" | "submit";
    onClick?: () => void;
}

export function Button({ children, variant = "seebutton", fullWidth = false, type = "button", onClick }: ButtonProps) {
    const classes = ["button", `button--${variant}`, fullWidth && "button--full-width"]
        .filter(Boolean)
        .join(" ")

    return (
        <button className={classes} type={type} onClick={onClick}>
            {children}
        </button>
    )
}
