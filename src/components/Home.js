import { useNavigate } from "react-router-dom"
import { HomeWrapper } from "../styles"
import useGlobalContext from "../hooks/useGlobalContext"
import Products from "../common/Products"
import Header from "../common/Header"
import SearchBar from "../common/SearchBar"


const mockProducts = [
    { title: 'Lorem', author: 'Ipsum', price: 30},
    { title: 'Lorem', author: 'Ipsum', price: 30},
    { title: 'Lorem', author: 'Ipsum', price: 30}
]


const Home = () => {
    const navigate = useNavigate()
    const { cart } = useGlobalContext()

  return (
    <HomeWrapper>
        <Header cartSize={cart.length} />
        <main>
            <SearchBar />
            <Products>
                <Products.Title name="Showcase" onClick={() => navigate('/')} />
                <Products.Showcase>
                    {mockProducts.map((product, id) => (
                        <Products.Card 
                            key={id} 
                            product={product} 
                            onClick={() => navigate('/')} 
                        />
                    ))}
                </Products.Showcase>
            </Products>
            <Products>
                <Products.Title name="Searched" onClick={() => navigate('/')} />
                <Products.Searched>
                    {mockProducts.map((product, id) => (
                        <Products.Card 
                            key={id} 
                            product={product} 
                            onClick={() => navigate('/')}
                        />
                    ))}
                </Products.Searched>
            </Products>
        </main>
    </HomeWrapper>
  )
}

export default Home