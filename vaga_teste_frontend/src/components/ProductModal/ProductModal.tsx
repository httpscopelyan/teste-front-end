import { useEffect, useId, useRef } from "react"
import { Buttons } from ".."
import closeIcon from "../../assets/icons/Close.svg"
import minusIcon from "../../assets/icons/Minus.svg"
import plusIcon from "../../assets/icons/Plus.svg"
import type { Product } from "../../types/product"
import { formatPrice } from "../../utils/formatPrice"
import "./ProductModal.scss"

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
    const titleId = useId()
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (!dialogRef.current?.open) dialogRef.current?.showModal()
    }, [])

    return (
        <dialog
            className="product-modal"
            ref={dialogRef}
            aria-labelledby={titleId}
            onClose={onClose}
            onClick={(event) => event.target === event.currentTarget && dialogRef.current?.close()}
        >
            <div className="product-modal__content">
                <button className="product-modal__close" type="button" aria-label="Fechar" onClick={() => dialogRef.current?.close()}>
                    <img src={closeIcon} alt="" width={13} height={13} />
                </button>
                <img className="product-modal__image" src={product.photo} alt={product.descriptionShort} />
                <div className="product-modal__info">
                    <div className="product-modal__header">
                        <h2 className="product-modal__title" id={titleId}>{product.productName}</h2>
                        <p className="product-modal__price">{formatPrice(product.price)}</p>
                    </div>
                    <div className="product-modal__details">
                        <p className="product-modal__description">{product.descriptionShort}</p>
                        <a className="product-modal__link" href="#">Veja mais detalhes do produto &gt;</a>
                    </div>
                    <div className="product-modal__actions">
                        <div className="product-modal__quantity">
                            <button className="product-modal__step" type="button" aria-label="Diminuir quantidade">
                                <img src={minusIcon} alt="" width={12} height={2} />
                            </button>
                            <output className="product-modal__amount" aria-label="Quantidade">01</output>
                            <button className="product-modal__step" type="button" aria-label="Aumentar quantidade">
                                <img src={plusIcon} alt="" width={12} height={12} />
                            </button>
                        </div>
                        <Buttons variant="modal">Comprar</Buttons>
                    </div>
                </div>
            </div>
        </dialog>
    )
}
