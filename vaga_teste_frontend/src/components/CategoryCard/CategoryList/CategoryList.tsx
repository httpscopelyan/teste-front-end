import { CategoryCard } from "../CategoryCard"
import techIcon from "../../../assets/icons/category_icons/tech.webp"
import supermarketIcon from "../../../assets/icons/category_icons/supermercados 1.webp"
import drinkIcon from "../../../assets/icons/category_icons/bebidas.webp"
import wrenchIcon from "../../../assets/icons/category_icons/ferramentas 1.webp"
import healthIcon from "../../../assets/icons/category_icons/saude.webp"
import fitnessIcon from "../../../assets/icons/category_icons/corrida 1.webp"
import fashionIcon from "../../../assets/icons/category_icons/moda 1.svg"
import "./CategoryList.scss"

const categories = [
    { icon: techIcon, text: "Tecnologia", selected: true },
    { icon: supermarketIcon, text: "Supermercado" },
    { icon: drinkIcon, text: "Bebidas" },
    { icon: wrenchIcon, text: "Ferramentas" },
    { icon: healthIcon, text: "Saúde" },
    { icon: fitnessIcon, text: "Esportes e Fitness" },
    { icon: fashionIcon, text: "Moda" },
]

export function CategoryList() {
    return (
        <section className="category-list" aria-labelledby="category-list-title">
            {/* <h2 id="category-list-title" className="category-list__title">
                Compre por categoria
            </h2> */}
            <ul className="category-list__items">
                {categories.map(({ icon, text, selected }) => (
                    <li key={text}>
                        <CategoryCard icon={icon} text={text} selected={selected} />
                    </li>
                ))}
            </ul>
        </section>
    )
}