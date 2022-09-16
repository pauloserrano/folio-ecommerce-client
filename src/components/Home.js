import { useNavigate } from "react-router-dom"
import { HomeWrapper } from "../styles"
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

  return (
    <HomeWrapper>
        <Header />
        <main>
            <SearchBar />
            <Products>
                <Products.Title name="Showcase" onClick={() => navigate('/')} />
                <Products.Showcase>
                    {mockProducts.map((product, id) => (
                        <Products.Card key={id} product={product} />
                    ))}
                </Products.Showcase>
            </Products>
            <Products>
                <Products.Title name="Searched" onClick={() => navigate('/')} />
                <Products.Searched>
                    {mockProducts.map((product, id) => (
                        <Products.Card key={id} product={product} />
                    ))}
                </Products.Searched>
            </Products>
        </main>
    </HomeWrapper>
  )
}

export default Home