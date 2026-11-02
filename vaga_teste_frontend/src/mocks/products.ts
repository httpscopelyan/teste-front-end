import type { Product } from "../components/ProductCard/ProductCard"

const placeholderImage = `data:image/svg+xml;utf8,${encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="278" height="228"><rect width="100%" height="100%" fill="#F4F4F4"/></svg>'
)}`

const name = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."

export const products: Product[] = [
    { id: 1, image: placeholderImage, name, price: 28.9, oldPrice: 30.9, installments: { count: 2, value: 49.95 }, freeShipping: true },
    { id: 2, image: placeholderImage, name, price: 59.9, oldPrice: 69.9, installments: { count: 3, value: 19.97 }, freeShipping: true },
    { id: 3, image: placeholderImage, name, price: 129.9, installments: { count: 5, value: 25.98 } },
    { id: 4, image: placeholderImage, name, price: 89.9, oldPrice: 99.9, freeShipping: true },
    { id: 5, image: placeholderImage, name, price: 249.9, oldPrice: 299.9, installments: { count: 10, value: 24.99 }, freeShipping: true },
    { id: 6, image: placeholderImage, name, price: 19.9 },
    { id: 7, image: placeholderImage, name, price: 349.9, oldPrice: 399.9, installments: { count: 6, value: 58.32 } },
    { id: 8, image: placeholderImage, name, price: 74.9, oldPrice: 84.9, installments: { count: 2, value: 37.45 }, freeShipping: true },
]

export const productTags = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS"]