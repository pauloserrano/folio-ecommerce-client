import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HomeWrapper } from "../styles"
import Products from "../common/Products"
import Header from "../common/Header"
import SearchBar from "../common/SearchBar"
// import { getProducts } from "../services/mockData"
import { getProducts } from "../services/axios"
import Spinner from "../common/Spinner"


const Home = () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getProducts().then(({ data }) => {
            console.log(data)
            setCategories(data)
        })

    }, [])

  return (
    <HomeWrapper>
        <Header />
        <main>
            <SearchBar />
            {categories.length > 0
            ? categories.map(({ category, products }, id) => (
                <Products key={id}>
                    <Products.Title 
                        name={category} 
                        onClick={() => navigate(`/${category.toLowerCase()}`, { state: { category, products }})} 
                    />
                    <Products.Showcase>
                        {products?.map((product, id) => (
                            <Products.Card 
                                key={id} 
                                product={product} 
                                onClick={() => navigate(`/products/${product._id}`)} 
                            />
                        ))}
                    </Products.Showcase>
                </Products>
            ))
            : <Spinner />
            }
        </main>
    </HomeWrapper>
  )
}

export default Home