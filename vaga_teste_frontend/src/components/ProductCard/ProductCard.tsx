import { Buttons } from ".."
import "./ProductCard.scss"

export interface Product {
    id: string | number;
    image: string;
    name: string;
    price: number;
    oldPrice?: number;
    installments?: { count: number; value: number };
    freeShipping?: boolean;
}

interface ProductCardProps extends Omit<Product, "id"> {
    onBuy?: () => void;
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export function ProductCard({ image, name, price, oldPrice, installments, freeShipping = false, onBuy }: ProductCardProps) {
    return (
        <article className="product-card">
            <img className="product-card__image" src={image} alt="" />
            <div className="product-card__details">
                <h3 className="product-card__name">{name}</h3>
                {oldPrice !== undefined && (
                    <s className="product-card__old-price">{currencyFormatter.format(oldPrice)}</s>
                )}
                <p className="product-card__price">{currencyFormatter.format(price)}</p>
                {installments && (
                    <p className="product-card__installments">
                        ou {installments.count}x de {currencyFormatter.format(installments.value)} sem juros
                    </p>
                )}
                {freeShipping && <p className="product-card__shipping">Frete grátis</p>}
                <div className="product-card__action">
                    <Buttons variant="buy" fullWidth onClick={onBuy}>Comprar</Buttons>
                </div>
            </div>
        </article>
    )
}
