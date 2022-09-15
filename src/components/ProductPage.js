import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styled from 'styled-components';

import { individualProduct } from '../services/axios';

const ProductPage = () => {
    // State Variables
    const [product, setProduct] = useState({});

    // Logic
    const { PRODUCT_ID } = useParams();

    useEffect(() => {
        console.log(PRODUCT_ID)
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
                    </Cover>
                    <Info>
                        <MainInfo>
                            <h1>{ product.title }</h1>
                            <span>${ product.price }</span>
                        </MainInfo>
                        <Descriptions>
                            <h3>From: { product.from }</h3>
                            <h2>Description</h2>
                            <p>{ product.description }</p>
                        </Descriptions>
                    </Info>
                </ProductStyles> 
                    : 
                <>Loading</> 
                }
            </div>
        </>
    )
}

const Descriptions = Styled.div`
    h3 {
        font-weight: bold;
        font-size: 1rem;
    }
    
    h2 {
            font-weight: bold;
            font-size: 1.2rem;
            margin:0.8rem 0 0.4rem 0;

        }

`;

const Info = Styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700&display=swap');
    font-family: 'Nunito Sans', sans-serif;
    margin: 0 1rem;
`;

const Cover = Styled.div``;

const MainInfo = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.6rem;
    margin: 1.4rem 0 1rem 0;
    
    h1 {

    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700&display=swap');
    font-family: 'Nunito Sans';
    }
`;

const ProductStyles = Styled.div`
    img {
        width: 100%;
    }
`;

export default ProductPage;