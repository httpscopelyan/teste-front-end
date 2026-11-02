import backgroundImage from "../../assets/secions/background_1.webp"
import { Button } from ".."
import "./HeroBanner.scss"

export function HeroBanner() {
    return (
        <section className="hero-banner">
            <img className="hero-banner__image" src={backgroundImage} alt="" />
            <div className="hero-banner__overlay" />
            <div className="hero-banner__content">
                <h1 className="hero-banner__title">Venha conhecer nossas promoções</h1>
                <p className="hero-banner__subtitle"><span>50% Off</span> nos produtos</p>
                <div className="hero-banner__action">
                    <Button variant="seebutton">Ver produto</Button>
                </div>
            </div>
        </section>
    )
}
