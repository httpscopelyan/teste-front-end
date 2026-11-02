import { AnnouncementBar, MainBar, Navbar } from ".."
import "./Header.scss"

export function Header() {
    return (
        <header className="header">
            <AnnouncementBar />
            <MainBar />
            <Navbar />
        </header>
    )
}
