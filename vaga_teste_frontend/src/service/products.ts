import type { Product } from "../types/product"

const url = "/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"

function isProduct(item: Partial<Product>): item is Product {
    return (
        typeof item.productName === "string" &&
        typeof item.descriptionShort === "string" &&
        typeof item.photo === "string" &&
        typeof item.price === "number" &&
        Number.isFinite(item.price)
    )
}

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
    const response = await fetch(url, { signal })

    if (!response.ok) throw new Error(`Falha ao buscar os produtos: ${response.status}`)

    const data = await response.json()

    if (!Array.isArray(data?.products)) throw new Error("Resposta da API em formato inesperado")

    return data.products.filter(isProduct)
}
