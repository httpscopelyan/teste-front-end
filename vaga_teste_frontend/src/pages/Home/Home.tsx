import { CategoryList } from "../../components/CategoryCard/CategoryList/CategoryList";
import { Header } from "../../components/Header/Header";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";
import { ProductShowcase } from "../../components/ProductShowcase/ProductShowcase";
import { products, productTags } from "../../mocks/products";


const Home = () => {
    return ( 
        <main>
            <Header/>
            <HeroBanner/>
            <CategoryList />
            <ProductShowcase products={products} tags={productTags}/>

        </main>
    )
}

export default Home