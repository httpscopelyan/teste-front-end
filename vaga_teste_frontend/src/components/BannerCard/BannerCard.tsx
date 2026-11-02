import { Button } from ".."
import "./BannerCard.scss"

interface BannerCardProps {
    title: string;
    description: string;
    image: string;
    buttonLabel?: string;
}

export function BannerCard({ title, description, image, buttonLabel = "Confira" }: BannerCardProps) {
    return (
        <article className="banner-card">
            <img className="banner-card__image" src={image} alt="" />
            <div className="banner-card__overlay" />
            <div className="banner-card__content">
                <h2 className="banner-card__title">{title}</h2>
                <p className="banner-card__description">{description}</p>
                <Button variant="checkbutton">{buttonLabel}</Button>
            </div>
        </article>
    )
}
