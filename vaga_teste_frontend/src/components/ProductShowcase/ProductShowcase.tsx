import { useId, useState } from "react"
import { ProductCarousel, SectionTitle, ShowcaseTags, type Product } from ".."
import "./ProductShowcase.scss"

interface ProductShowcaseProps {
    products: Product[];
    title?: string;
    tags?: string[];
    seeAllLabel?: string;
    seeAllHref?: string;
    onTagChange?: (tag: string) => void;
}

export function ProductShowcase({
    products,
    title = "Produtos relacionados",
    tags,
    seeAllLabel = "Ver todos",
    seeAllHref = "#",
    onTagChange,
}: ProductShowcaseProps) {
    const titleId = useId()
    const [activeTag, setActiveTag] = useState(tags?.[0])

    const handleTagSelect = (tag: string) => {
        setActiveTag(tag)
        onTagChange?.(tag)
    }

    return (
        <section className="product-showcase" aria-labelledby={titleId}>
            <div className="product-showcase__header">
                <SectionTitle id={titleId} title={title} />
                {tags ? (
                    <ShowcaseTags
                        tags={tags}
                        activeTag={activeTag}
                        onSelect={handleTagSelect}
                        seeAllLabel={seeAllLabel}
                        seeAllHref={seeAllHref}
                    />
                ) : (
                    <a className="product-showcase__link" href={seeAllHref}>{seeAllLabel}</a>
                )}
            </div>
            <ProductCarousel products={products} />
        </section>
    )
}
