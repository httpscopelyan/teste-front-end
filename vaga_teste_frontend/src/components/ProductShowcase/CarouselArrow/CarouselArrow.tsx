import type { Ref } from "react"
import caretLeftIcon from "../../../assets/icons/CaretLeft.svg"
import caretRightIcon from "../../../assets/icons/CaretRight.svg"
import "./CarouselArrow.scss"

interface CarouselArrowProps {
    direction: "previous" | "next";
    ref: Ref<HTMLButtonElement>;
}

const arrows = {
    previous: { icon: caretLeftIcon, label: "Produtos anteriores" },
    next: { icon: caretRightIcon, label: "Próximos produtos" },
}

export function CarouselArrow({ direction, ref }: CarouselArrowProps) {
    const { icon, label } = arrows[direction]

    return (
        <button
            className={`product-showcase__arrow product-showcase__arrow--${direction}`}
            type="button"
            aria-label={label}
            ref={ref}
        >
            <img src={icon} alt="" width={7.47} height={12.8} />
        </button>
    )
}
