import { BannerCard } from ".."
import partnersImage from "../../assets/secions/background_2.webp"
import "./BannerSupport.scss"

const banners = [
    { title: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur", image: partnersImage },
    { title: "Parceiros", description: "Lorem ipsum dolor sit amet, consectetur", image: partnersImage },
]

export function BannerSupport() {
    return (
        <section className="banner-support" aria-label="Parceiros">
            <ul className="banner-support__items">
                {banners.map((banner, index) => (
                    <li className="banner-support__item" key={index}>
                        <BannerCard {...banner} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
