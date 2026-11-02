import React from "react";
import './button.scss'

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'seebutton' | 'buy' | 'checkbutton';
    fullWidth?: boolean;
    onClick?: () => void;
}

const Buttons = ( { children, variant = 'seebutton', fullWidth = false, onClick }: ButtonProps) => {

    const classes = [
        'button',
        `button--${variant}`,
        fullWidth && 'button--full-width',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    )

}

export default Buttons