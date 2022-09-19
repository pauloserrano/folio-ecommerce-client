import { useState } from "react"
import { TbSearch as Search } from "react-icons/tb"
import styled from "styled-components"


const SearchBar = ({ initial='' }) => {
    const [search, setSearch] = useState(initial)

  return (
    <SearchBarWrapper>
      <input 
        type="text" 
        placeholder="Search Products" 
        name="q" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
      />
      <button>
        <Search size={20} />
      </button>
    </SearchBarWrapper>
  )
}

const SearchBarWrapper = styled.form`
  position: relative;

  input{
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
  }

  button{
    border: none;
    background-color: transparent;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`

export default SearchBar