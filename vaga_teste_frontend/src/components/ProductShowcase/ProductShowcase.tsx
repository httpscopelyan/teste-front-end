import { useId } from "react"
import { ProductCarousel, SectionTitle, ShowcaseTags, type Product } from ".."
import "./ProductShowcase.scss"

interface ProductShowcaseProps {
    products: Product[];
    title?: string;
    tags?: string[];
    seeAllLabel?: string;
    seeAllHref?: string;
}

export function ProductShowcase({
    products,
    title = "Produtos relacionados",
    tags,
    seeAllLabel = "Ver todos",
    seeAllHref = "#",
}: ProductShowcaseProps) {
    const titleId = useId()

    return (
        <section className="product-showcase" aria-labelledby={titleId}>
            <div className="product-showcase__header">
                <SectionTitle id={titleId} title={title} />
                {tags ? (
                    <ShowcaseTags
                        tags={tags}
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
