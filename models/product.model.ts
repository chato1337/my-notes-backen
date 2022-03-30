export interface Product {
    _id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    stock: number,
    rating: Rate
}

interface Rate {
    rate: number,
    count: number
}