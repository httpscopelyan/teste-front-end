import { useEffect, useState } from "react"
import { BannerSupport, Brands, CategoryList, Footer, Header, HeroBanner, Newsletter, ProductShowcase, type Product } from "../../components"
import { getProducts } from "../../service/products"
import "./Home.scss"

const productTags = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS"]

export function Home() {
    const [products, setProducts] = useState<Product[]>([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        getProducts(controller.signal)
            .then(setProducts)
            .catch((error) => {
                if (error.name !== "AbortError") setHasError(true)
            })

        return () => controller.abort()
    }, [])

    return (
        <>
            <Header />
            <main>
                <HeroBanner />
                <CategoryList />
                {hasError && <p className="home__error" role="alert">Não foi possível carregar os produtos.</p>}
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
