import type { Product } from "../types/product"

const url = "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(url)
    const data = await response.json()

    return data.products
}
