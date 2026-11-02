import { BannerSupport, BrandButton, CategoryList, Footer, Header, HeroBanner, Newsletter, ProductShowcase } from "../../components"
import { products, productTags } from "../../mocks/products"

export function Home() {
    return (
        <main>
            <Header />
            <HeroBanner />
            <CategoryList />
            <ProductShowcase products={products} tags={productTags} />
            <BannerSupport />
            <ProductShowcase products={products} />
            <BannerSupport />
            <BrandButton />
            <ProductShowcase products={products}/>
            <Newsletter/>
            <Footer/>
        </main>
    )
}
