import { useId, useState } from "react"
import type { Product } from "../ProductCard/ProductCard"
import { ProductCarousel } from "./ProductCarousel/ProductCarousel"
import { ShowcaseTags } from "./ShowcaseTags/ShowcaseTags"
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
                <div className="product-showcase__title">
                    <span className="product-showcase__title-line" aria-hidden="true" />
                    <h2 className="product-showcase__title-text" id={titleId}>{title}</h2>
                    <span className="product-showcase__title-line" aria-hidden="true" />
                </div>
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
