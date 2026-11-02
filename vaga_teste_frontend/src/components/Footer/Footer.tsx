import facebookIcon from "../../assets/icons/facebook.svg"
import instagramIcon from "../../assets/icons/instagram.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import logoImage from "../../assets/logotipos/Logo.png"
import "./Footer.scss"

const columns = [
    { title: "Institucional", links: ["Sobre Nós", "Movimento", "Trabalhe conosco"] },
    { title: "Ajuda", links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"] },
    { title: "Termos", links: ["Termos e Condições", "Política de Privacidade", "Troca e Devolução"] },
]

const socials = [
    { name: "Instagram", icon: instagramIcon },
    { name: "Facebook", icon: facebookIcon },
    { name: "LinkedIn", icon: linkedinIcon },
]

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__container">
                    <div className="footer__about">
                        <div className="footer__brand">
                            <a href="/">
                                <img src={logoImage} alt="Econverse" width={164} height={48} />
                            </a>
                            <p className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <ul className="footer__socials">
                            {socials.map(({ name, icon }) => (
                                <li key={name}>
                                    <a href="#" aria-label={name}>
                                        <img src={icon} alt="" width={24} height={24} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <span className="footer__divider" aria-hidden="true" />
                    <div className="footer__links">
                        {columns.map(({ title, links }) => (
                            <nav className="footer__column" key={title} aria-label={title}>
                                <h2 className="footer__title">{title}</h2>
                                <ul className="footer__list">
                                    {links.map((link) => (
                                        <li key={link}>
                                            <a className="footer__link" href="#">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}
                    </div>
                </div>
            </div>
            <p className="footer__copyright">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </footer>
    )
}
