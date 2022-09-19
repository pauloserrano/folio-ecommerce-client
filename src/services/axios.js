import axios from "axios"

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URI || 'http://localhost:5000'
})

const signIn = ({ email, password }) => {
    return api.post('/signin', { email, password })
}

const signUp = ({ name, email, password }) => {
    return api.post('/signup', { name, email, password })
}

const individualProduct = ({ id }) => {
    return api.get(`/products/${id}`);
}

const checkout = ({ userId, products, token }) => {
    const body = { products };
    const config = { headers: { Authorization: `Bearer ${token}` } };
    return api.post(`/checkout/${userId}`, { products }, { headers: { Authorization: `Bearer ${token}` } });
}

const getProducts = () => {
    return api.get('/products')
}

export { signIn, signUp, getProducts, individualProduct, checkout }
