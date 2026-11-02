import { Button } from ".."
import type { Product } from "../../types/product"
import { formatPrice } from "../../utils/formatPrice"
import "./ProductCard.scss"

interface ProductCardProps extends Product {
    onBuy?: () => void;
}

export function ProductCard({ productName, descriptionShort, photo, price, onBuy }: ProductCardProps) {
    return (
        <article className="product-card">
            <img className="product-card__image" src={photo} alt={descriptionShort} />
            <div className="product-card__details">
                <h3 className="product-card__name">{productName}</h3>
                <s className="product-card__old-price">R$ 00,00</s>
                <p className="product-card__price">{formatPrice(price)}</p>
                <p className="product-card__installments">ou 2x de R$ 49,95 sem juros</p>
                <p className="product-card__shipping">Frete grátis</p>
                <div className="product-card__action">
                    <Button variant="buy" fullWidth onClick={onBuy}>Comprar</Button>
                </div>
            </div>
        </article>
    )
}
