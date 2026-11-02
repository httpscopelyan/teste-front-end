import { useEffect, useState } from "react"
import { BannerSupport, BrandButton, CategoryList, Footer, Header, HeroBanner, Newsletter, ProductShowcase, type Product } from "../../components"
import { productTags } from "../../mocks/products"
import { getProducts } from "../../service/products"

export function Home() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <CategoryList />
                <ProductShowcase products={products} tags={productTags} />
                <BannerSupport />
                <ProductShowcase products={products} />
                <BannerSupport />
                <BrandButton />
                <ProductShowcase products={products} />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}
