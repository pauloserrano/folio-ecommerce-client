const categories = [
    { name: "Action", productsId: 1 },
    { name: "Romance", productsId: 2 },
    { name: "Fiction", productsId: 3 }
]

const products = [
    {
        _id: 1,
        books: [
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"},
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"},
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"}
        ]
    },
    {
        _id: 2,
        books: [
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"},
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"},
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"}
        ]
    },
    {
        _id: 3,
        books: [
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"},
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"},
            { title: "lorem", author: "ipsum", price: 30, image: "https://picsum.photos/500/500"}
        ]
    }
]

const getProducts = () => {
    const data = categories.map(category => {        
        return {
            name: category.name,
            products: products.find(product => product._id === category.productsId)?.books
        }
    })

    return data
}

const getProductsByCategory = (name) => {
    const { productsId } = categories.find(category => category.name === name)
    const data = products.find(product => product._id === productsId)
    console.log(data)

    return data
}


export { getProducts, getProductsByCategory }