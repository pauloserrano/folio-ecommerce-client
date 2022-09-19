import { useEffect, useState } from "react";

import Products from '../common/Products.js';
import Header from "../common/Header.js";
import HomeWrapper from "../styles/HomeWrapper.jsx";
import { Navigate } from "react-router-dom";

const Cart = () => {
    
    // SV
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")));
    // Logic

    // UI
    return (
        <HomeWrapper>
            <Header />
            <Products>
                { 
                    products.map( (p, i) => {
                    <Products.Card key={i} product={p} onClick={() => Navigate(`/products/${p.id}}`) } >
                    
                    </Products.Card>
                })

                }
            </Products>
        </HomeWrapper>
    )
}

export default Cart;