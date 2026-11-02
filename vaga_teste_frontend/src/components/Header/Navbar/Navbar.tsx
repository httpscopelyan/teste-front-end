import crownIcon from "../../../assets/icons/CrownSimple.svg"
import "./Navbar.scss"

interface NavbarLink {
    label: string;
    href?: string;
    active?: boolean;
}

interface NavbarProps {
    links?: NavbarLink[];
}

const defaultLinks: NavbarLink[] = [
    { label: "Todas Categorias" },
    { label: "Supermercado" },
    { label: "Livros" },
    { label: "Moda" },
    { label: "Lançamentos" },
    { label: "Ofertas do dia", active: true },
]

export function Navbar({ links = defaultLinks }: NavbarProps) {
    return (
        <nav className="header__nav" aria-label="Categorias">
            <ul className="header__nav-list">
                {links.map(({ label, href = "#", active = false }) => (
                    <li key={label}>
                        <a
                            className={`header__nav-link${active ? " header__nav-link--active" : ""}`}
                            href={href}
                            aria-current={active ? "page" : undefined}
                        >
                            {label}
                        </a>
                    </li>
                ))}
                <li>
                    <a className="header__nav-link header__nav-link--subscription" href="#">
                        <img className="header__nav-icon" src={crownIcon} alt="" />
                        Assinatura
                    </a>
                </li>
            </ul>
        </nav>
    )
}
