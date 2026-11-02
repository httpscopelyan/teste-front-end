import { useId } from "react"
import { Buttons } from ".."
import "./Newsletter.scss"

interface NewsletterProps {
    onSubscribe?: (name: string, email: string) => void;
}

export function Newsletter({ onSubscribe }: NewsletterProps) {
    const titleId = useId()

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        onSubscribe?.(String(data.get("name") ?? ""), String(data.get("email") ?? ""))
    }

    return (
        <section className="newsletter" aria-labelledby={titleId}>
            <div className="newsletter__container">
                <header className="newsletter__header">
                    <h2 className="newsletter__title" id={titleId}>Inscreva-se na nossa newsletter</h2>
                    <p className="newsletter__text">
                        Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                    </p>
                </header>
                <form className="newsletter__form" onSubmit={handleSubmit}>
                    <div className="newsletter__fields">
                        <input
                            className="newsletter__input"
                            type="text"
                            name="name"
                            placeholder="Digite seu nome"
                            aria-label="Nome"
                            required
                        />
                        <input
                            className="newsletter__input"
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            aria-label="E-mail"
                            required
                        />
                        <Buttons variant="subscribe" type="submit">Inscrever</Buttons>
                    </div>
                    <label className="newsletter__terms">
                        <input className="newsletter__checkbox" type="checkbox" name="terms" required />
                        Aceito os termos e condições
                    </label>
                </form>
            </div>
        </section>
    )
}
