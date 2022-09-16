import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { HomeWrapper } from "../styles"
import Header from "../common/Header"
import SearchBar from "../common/SearchBar"
import Products from "../common/Products"
import { getProductsByCategory } from "../services/mockData"


const Search = () => {
  const navigate = useNavigate()
  const {state: { name }} = useLocation()
  const [books, setBooks] = useState([])

  useEffect(() => {
    const { books } = getProductsByCategory(name)
    setBooks(books)
  }, [])

  return (
    <HomeWrapper>
      <Header />
      <main>
        <SearchBar />
        {books.length > 0
          ? books.map((book, id) => (
            <Products key={id}>
                <Products.Searched>
                  <Products.Card 
                      key={id} 
                      product={book} 
                      onClick={() => navigate(`/`)} 
                  />
                </Products.Searched>
            </Products>
        ))
          : <>Loading</>
        }
      </main>
    </HomeWrapper>
  )
}

export default Search