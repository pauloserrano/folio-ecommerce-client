import { useLocation, useNavigate } from "react-router-dom"
import { HomeWrapper } from "../styles"
import Header from "../common/Header"
import SearchBar from "../common/SearchBar"
import Products from "../common/Products"
import Spinner from "../common/Spinner"


const Search = () => {
  const navigate = useNavigate()
  const {state: { category, products }} = useLocation()

  return (
    <HomeWrapper>
      <Header />
      <main>
        <SearchBar />
        {products.length > 0
          ? <Products>
              <Products.Title name={category} />
              <Products.Searched>
                {products.map((book, id) => (
                  <Products.Card 
                      key={id}
                      product={book} 
                      onClick={() => navigate(`/`)} 
                  />
              ))}
            </Products.Searched>
          </Products>
          : <Spinner />
        }
      </main>
    </HomeWrapper>
  )
}

export default Search