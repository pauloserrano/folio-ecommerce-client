import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Styled from 'styled-components';

import { individualProduct, checkout } from '../services/axios';

const ProductPage = () => {
    // State Variables
    const [product, setProduct] = useState({});

    // Logic
    const { PRODUCT_ID } = useParams();

    const navigate = useNavigate();

    const addToCart = () => {

        // creating cart representation
        if(localStorage.getItem("cart") === null) localStorage.setItem("cart", '[]');
        const cart = JSON.parse(localStorage.getItem("cart"));

        // add the new product with the right amount
        let amount = 1;
        for(let i = 0; i < cart.length; i++) {
            if(cart[i].id === PRODUCT_ID) {
                amount = cart[i].amount + 1;
                cart[i].amount = amount;
            }
        }
        if(amount === 1) {
            const cartItem = { 
                price: product.price,
                img: product.img,
                title: product.title,
                id: PRODUCT_ID,
                amount
            };
            cart.push(cartItem);
        }
        localStorage.setItem("cart", JSON.stringify(cart)); // save updated cart
        console.log(cart)
        
        // Message
        const message = (amount === 1) ? `${product.title} added to your cart` : `${amount} ${product.title} on the cart`;
        alert(message);
    }

    const checkoutNow = async () => {
        if(localStorage.getItem("userId") === null) navigate("/signIn");
        try {
            // request data 
            const userId = localStorage.getItem("userId");
            const token = localStorage.getItem("token");
            const products = JSON.parse(localStorage.getItem("cart"));
            // request
            const order = await checkout({ userId, products, token });
            localStorage.removeItem("cart");
            alert("Order sent successfully!")
        } catch (error) {
            console.log(error)
            if(error.status == 500) {
                alert("Internal issue, please try again later.");
            } else alert("Desconnected");
            navigate("/signin");
        }
    }

    useEffect(() => {
        const loadData = async (id) => {
            try {
                const getProduct = await individualProduct({id});
                setProduct({ ...getProduct.data });
    
            } catch (error) {
                alert(error.message);
            }
        }

        loadData(PRODUCT_ID);
    }, [])

    // UI
    return (
        <>
            <div>
                { (product.title) ? 
                <ProductStyles>
                    <Cover>
                        <img src={ product.img } alt='Book cover' />
                        <Link to="/"><div className='back'><ion-icon name="return-left"></ion-icon></div></Link>
                        <div onClick={() => alert("Wishlist still under development")} className='heart'><ion-icon styles={'font-size: 2rem;'} name="heart-empty"></ion-icon></div>
                    </Cover>
                    <Info>
                        <MainInfo>
                            <h1>{ product.title }</h1>
                            <span>${ product.price.toFixed(2) }</span>
                        </MainInfo>
                        <Descriptions>
                            <h3>From: { product.from }</h3>
                            <h3>Category: { product.category }</h3>
                            <h2>DESCRIPTION</h2>
                            <p>{ product.description }</p>
                            <div className='space' ></div>
                        </Descriptions>
                    </Info>
                    <Footer>
                        <button onClick={ click => addToCart() } className='bag'>add to cart</button>
                        <button onClick={ click => checkoutNow() } className='buy'>buy now</button>
                    </Footer>
                </ProductStyles> 
                    : 
                <>Loading</> 
                }
            </div>
        </>
    )
}

const Footer = Styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 1.3rem;
    left: 0;

    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
    
    button {
        text-transform: uppercase;
        font-size: 0.85rem;
        width: 47.5%;
        height: 3.3rem;
    }

    .bag {
        color: #000;
        background-color: #fff;
        border: 0.03px solid #000;
    }

    .buy {
        border: none;
        background-color: #000;
        color: #fff;

    }
    
`;

const Descriptions = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        font-weight: bold;
        font-size: 1rem;
        color: #171717;
    }
    
    h2 {
            font-weight: bold;
            font-size: 1rem;
            margin: 1.8rem 0 0.8rem 0;
            letter-spacing: 0.2rem;
            text-transform: uppercase;
            color: #171717;

        }

        p {
            text-transform: capitalize;
            color: #575757;
            line-height: 149%;
        }

        .space {
            height: 5.3rem;
        }
`;

const Info = Styled.div`
        padding: 0 1rem;
`;

const Cover = Styled.div`
    position: relative;
    ion-icon {
        position: absolute;
        top: 1rem;
        font-size: 2rem;
        z-index: 1;
        color: white;
    }
    .back > ion-icon {
        left: 1.2rem;
    }

    .heart > ion-icon {
        right: 1.2rem;
    }
`;

const MainInfo = Styled.div`
    display: flex;
    align-items: top;
    justify-content: space-between;
    font-weight: 600;
    font-size: 1.6rem;
    margin: 1.4rem 0 1rem 0;
    
    h1 {

    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700&display=swap');
    font-family: 'Nunito Sans';
    text-transform: capitalize;
    }
`;

const ProductStyles = Styled.div`
    img {
        width: 100%;
    }
`;

export default ProductPage;