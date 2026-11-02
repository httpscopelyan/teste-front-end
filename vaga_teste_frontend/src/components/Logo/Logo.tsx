import logoImage from "../../assets/logotipos/Logo.png"
import "./Logo.scss"

interface LogoProps {
    href?: string;
}

export function Logo({ href = "/" }: LogoProps) {
    return (
        <a className="header__logo" href={href}>
            <img className="header__logo-image" src={logoImage} alt="Econverse" />
        </a>
    )
}
