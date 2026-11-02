import logoImage from "../../assets/logotipos/Logo.png"
import "./Logo.scss"

interface LogoProps {
    href?: string;
}

export function Logo({ href = "/" }: LogoProps) {
    return (
        <a className="logo" href={href}>
            <img className="logo__image" src={logoImage} alt="Econverse" />
        </a>
    )
}
