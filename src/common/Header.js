import styled from "styled-components"
import { Link } from "react-router-dom"
import { RiMenu2Line as Menu } from "react-icons/ri"
import { BsHandbag as Bag, BsHeart as Wishlist } from "react-icons/bs"
import useGlobalContext from "../hooks/useGlobalContext"


const Header = ({ iconSize=20 }) => {
    const { cart } = useGlobalContext()

  return (
    <HeaderWrapper>
        <Menu className="menu" size={iconSize} />
        <h1>
            <Link to="/">Fólio</Link>
        </h1>
        <div>
            <Wishlist className="wishlist" size={iconSize} />
            <Link to="/cart" >
            <span className="bag-container">
                <Bag className="bag-icon" size={iconSize} />
                <span className="bag-items">{cart.length}</span>
            </span>
            </Link>
        </div>
    </HeaderWrapper>
  )
}


const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    margin: 1em 0 2.5em;

    h1{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 0.1em;
        font-weight: bold;
        text-transform: uppercase;
        color: #171717;
    
        a{
            text-decoration: none;
            color: inherit;
        }
    }

    .wishlist, .menu, .bag-container{
        cursor: pointer;
    }

    .bag-container{
        margin-left: 0.5rem;
        position: relative;

        .bag-items{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 11px;
            height: 11px;
            position: absolute;
            right: 0;
            top: -3px;
            font-size: 8px;
            font-weight: 600;
            padding: 2px;
            border-radius: 50%;
            color: #fff;
            background-color: #171717;
            outline: 2px solid #fff;
        }
    }
`

export default Header