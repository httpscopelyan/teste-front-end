import type { Product } from "../types/product"

const photo = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"

export const products: Product[] = [
    { productName: "Iphone 11 PRO MAX BRANCO 1", descriptionShort: "Iphone 11 PRO MAX BRANCO 1", photo, price: 15000 },
    { productName: "IPHONE 13 MINI 1", descriptionShort: "IPHONE 13 MINI 1", photo, price: 9000 },
    { productName: "Iphone 11 PRO MAX BRANCO 2", descriptionShort: "Iphone 11 PRO MAX BRANCO 2", photo, price: 14990 },
    { productName: "IPHONE 13 MINI 2", descriptionShort: "IPHONE 13 MINI 2", photo, price: 12000 },
    { productName: "Iphone 11 PRO MAX BRANCO 3", descriptionShort: "Iphone 11 PRO MAX BRANCO 3", photo, price: 4550 },
    { productName: "IPHONE 13 MINI 3", descriptionShort: "IPHONE 13 MINI 3", photo, price: 38000 },
    { productName: "Iphone 11 PRO MAX BRANCO 4", descriptionShort: "Iphone 11 PRO MAX BRANCO 4", photo, price: 42000 },
    { productName: "IPHONE 13 MINI 4", descriptionShort: "IPHONE 13 MINI 4", photo, price: 520 },
]

export const productTags = ["CELULAR", "ACESSÓRIOS", "TABLETS", "NOTEBOOKS", "TVS"]
