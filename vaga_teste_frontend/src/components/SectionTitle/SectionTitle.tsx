import "./SectionTitle.scss"

interface SectionTitleProps {
    id: string;
    title: string;
    withLines?: boolean;
}

export function SectionTitle({ id, title, withLines = true }: SectionTitleProps) {
    return (
        <div className="section-title">
            {withLines && <span className="section-title__line" aria-hidden="true" />}
            <h2 className="section-title__text" id={id}>{title}</h2>
            {withLines && <span className="section-title__line" aria-hidden="true" />}
        </div>
    )
}
