import { useState } from "react"
import styled from "styled-components"


const SearchBar = ({ initial='' }) => {
    const [search, setSearch] = useState(initial)

  return (
    <SearchBarWrapper type="text" placeholder="Search Products" value={search} onChange={(e) => setSearch(e.target.value)} />
  )
}

const SearchBarWrapper = styled.input`
    width: 100%;
    padding: 0.5em;
    border: none;
    border-bottom: 1px solid #868686;

    &::placeholder{
        color: #868686;
    }

    &:focus{
        outline: none;
    }
`

export default SearchBar