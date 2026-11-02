import "./category.scss"

interface CategoryCardProps {
    icon: string;
    text: string;
    href?: string;
    selected?: boolean;
}

export function CategoryCard({ icon, text, href = "#", selected = false }: CategoryCardProps) {
    const className = `category-card${selected ? " category-card--selected" : ""}`

    return (
        <a className={className} href={href} aria-current={selected ? "true" : undefined}>
            <span className="category-card__box">
                <img className="category-card__icon" src={icon} alt="" />
            </span>
            <span className="category-card__text">{text}</span>
        </a>
    )
}
