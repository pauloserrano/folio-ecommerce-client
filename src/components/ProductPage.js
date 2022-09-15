import axios from 'axios';
import { useParams, useEffect } from 'react';

import { individualProduct } from '../services/axios';

const ProductPage = () => {
    // State Variables

    // Logic
    useEffect(async () => {
        const id = useParams.PRODUCT_ID; 
        try {
            const product = await individualProduct(id);
        } catch (error) {
            alert(error.message);
        }
    }, [])

    // UI
    return (
        <>ProductPage</>
    )
}

export default ProductPage;