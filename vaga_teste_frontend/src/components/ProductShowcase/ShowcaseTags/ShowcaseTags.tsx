import "./ShowcaseTags.scss"

interface ShowcaseTagsProps {
    tags: string[];
    activeTag?: string;
    onSelect: (tag: string) => void;
    seeAllLabel: string;
    seeAllHref: string;
}

export function ShowcaseTags({ tags, activeTag, onSelect, seeAllLabel, seeAllHref }: ShowcaseTagsProps) {
    return (
        <ul className="product-showcase__tags" aria-label="Filtrar produtos">
            {tags.map((tag) => {
                const isActive = tag === activeTag

                return (
                    <li key={tag} className="product-showcase__tags-item">
                        <button
                            className={`product-showcase__tag${isActive ? " product-showcase__tag--active" : ""}`}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => onSelect(tag)}
                        >
                            {tag}
                        </button>
                    </li>
                )
            })}
            <li className="product-showcase__tags-item">
                <a className="product-showcase__tag" href={seeAllHref}>{seeAllLabel}</a>
            </li>
        </ul>
    )
}
