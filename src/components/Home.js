import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HomeWrapper } from "../styles"
import Products from "../common/Products"
import Header from "../common/Header"
import SearchBar from "../common/SearchBar"
import { getProducts } from "../services/mockData"


const Home = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const categories = getProducts()
        setCategories(categories)
    }, [])

  return (
    <HomeWrapper>
        <Header />
        <main>
            <SearchBar />
            {categories.length > 0
            ? categories.map(({ name, products }, id) => (
                <Products key={id}>
                    <Products.Title 
                        name={name} 
                        onClick={() => navigate(`/${name.toLowerCase()}`, {state: {name}})} 
                    />
                    <Products.Showcase>
                        {products?.map((product, id) => (
                            <Products.Card 
                                key={id} 
                                product={product} 
                                onClick={() => navigate(`/`)} 
                            />
                        ))}
                    </Products.Showcase>
                </Products>
            ))
            : <>Loading</>
            }
        </main>
    </HomeWrapper>
  )
}

export default Home