import "./IconButton.scss"

interface IconButtonProps {
    icon: string;
    label: string;
    size?: number;
    type?: "button" | "submit";
}

export function IconButton({ icon, label, size = 32, type = "button" }: IconButtonProps) {
    return (
        <button className="header__icon-button" type={type} aria-label={label}>
            <img src={icon} alt="" width={size} height={size} />
        </button>
    )
}
