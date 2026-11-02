import { CategoryList } from "../../components/CategoryCard/CategoryList/CategoryList";
import { Header } from "../../components/Header/Header";
import { HeroBanner } from "../../components/HeroBanner/HeroBanner";


const Home = () => {
    return ( 
        <main>
            <Header/>
            <HeroBanner/>
            <CategoryList />

        </main>
    )
}

export default Home