import { useEffect, useState } from "react"
import { BannerSupport, Brands, CategoryList, Footer, Header, HeroBanner, Newsletter, ProductShowcase, type Product } from "../../components"
import { getProducts } from "../../service/products"

const productTags = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS"]

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
                <Brands />
                <ProductShowcase products={products} />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}
