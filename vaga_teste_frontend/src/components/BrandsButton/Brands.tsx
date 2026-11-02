import { useId } from "react"
import { SectionTitle } from ".."
import logo from "../../assets/logotipos/Logo.png"
import "./brands.scss"

const brands = ["Marca 1", "Marca 2", "Marca 3", "Marca 4", "Marca 5"]

export function BrandButton() {
    const titleId = useId()

    return (
        <section className="brands" aria-labelledby={titleId}>
            <SectionTitle id={titleId} title="Navegue por marcas" withLines={false} />
            <ul className="brands__items">
                {brands.map((brand) => (
                    <li key={brand}>
                        <a className="brands__item" href="#">
                            <img src={logo} alt={brand} width={117} />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}
