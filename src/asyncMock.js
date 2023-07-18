const products = [
    { 
        id: 1, 
        name: 'Iphone 12',
        price: 1000,
        category: 'iphone',
        img: 'https://oechsle.vteximg.com.br/arquivos/ids/13935443-800-800/image-539bb07600414b8cbf5794dd6ccc9d59.jpg?v=638132430514800000',
        stock: 5,
        description: 'Iphone 12 is the best phone in the world, buy it now!, you will not regret it.'
    },
    {
        id: 2,
        name: 'Samsung Galaxy S22',
        price: 900,
        category: 'samsung',
        img: 'http://oechsle.vteximg.com.br/arquivos/ids/13336199/imageUrl_1.jpg?v=1776009128',
        stock: 5,
        description: 'Samsung Galaxy S21 is the best phone in the world, buy it now!, you will not regret it.'
    },
    {
        id: 3,
        name: 'Xiaomi Redmi Note 10',
        price: 500,
        category: 'xiaomi',
        img: 'http://oechsle.vteximg.com.br/arquivos/ids/10493956/imageUrl_1.jpg?v=1776009095',
        stock: 5,
        description: 'Xiaomi Redmi Note 10 is the best phone in the world, buy it now!, you will not regret it.'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
} 

export const getProductById = (pid) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === pid))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 500)
    })
}