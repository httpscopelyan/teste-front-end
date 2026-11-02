import { useState, useSyncExternalStore, type CSSProperties } from "react"
import type SwiperClass from "swiper"
import { A11y, EffectFade, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/a11y"
import "swiper/css/effect-fade"
import { CarouselArrow, ProductCard, type Product } from "../.."
import "./ProductCarousel.scss"

interface ProductCarouselProps {
    products: Product[];
}

const desktop = window.matchMedia("(min-width: 960px)")

const getCardsPerPage = () => (desktop.matches ? 4 : 1)

const subscribe = (onChange: () => void) => {
    desktop.addEventListener("change", onChange)

    return () => desktop.removeEventListener("change", onChange)
}

const toPages = (products: Product[], size: number) =>
    Array.from({ length: Math.ceil(products.length / size) }, (_, page) =>
        products.slice(page * size, (page + 1) * size)
    )

const setDirection = (direction: "next" | "prev") => ({ el }: SwiperClass) => {
    el.dataset.direction = direction
}

export function ProductCarousel({ products }: ProductCarouselProps) {
    const [previousButton, setPreviousButton] = useState<HTMLButtonElement | null>(null)
    const [nextButton, setNextButton] = useState<HTMLButtonElement | null>(null)
    const cardsPerPage = useSyncExternalStore(subscribe, getCardsPerPage)

    return (
        <div
            className="product-showcase__carousel"
            style={{ "--cards-per-page": cardsPerPage } as CSSProperties}
        >
            <CarouselArrow direction="previous" ref={setPreviousButton} />
            <Swiper
                key={cardsPerPage}
                className="product-showcase__track"
                modules={[A11y, EffectFade, Navigation]}
                effect="fade"
                speed={0}
                loop
                navigation={{ prevEl: previousButton, nextEl: nextButton }}
                onSlideNextTransitionStart={setDirection("next")}
                onSlidePrevTransitionStart={setDirection("prev")}
            >
                {toPages(products, cardsPerPage).map((page) => (
                    <SwiperSlide key={page[0].productName}>
                        <ul className="product-showcase__cards">
                            {page.map((product, index) => (
                                <li
                                    key={product.productName}
                                    className="product-showcase__card"
                                    style={{ "--card-index": index } as CSSProperties}
                                >
                                    <ProductCard {...product} />
                                </li>
                            ))}
                        </ul>
                    </SwiperSlide>
                ))}
            </Swiper>
            <CarouselArrow direction="next" ref={setNextButton} />
        </div>
    )
}
