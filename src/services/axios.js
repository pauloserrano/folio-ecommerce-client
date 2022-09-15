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

export { signIn, signUp, individualProduct };