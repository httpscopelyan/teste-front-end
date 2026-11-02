import { useId } from "react"
import { Button } from ".."
import "./Newsletter.scss"

export function Newsletter() {
    const titleId = useId()

    return (
        <section className="newsletter" aria-labelledby={titleId}>
            <div className="newsletter__container">
                <header className="newsletter__header">
                    <h2 className="newsletter__title" id={titleId}>Inscreva-se na nossa newsletter</h2>
                    <p className="newsletter__text">
                        Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
                    </p>
                </header>
                <form className="newsletter__form">
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
                        <Button variant="subscribe" type="submit">Inscrever</Button>
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
