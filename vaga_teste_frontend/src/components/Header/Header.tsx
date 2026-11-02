import { AnnouncementBar } from "./AnnouncementBar/AnnouncementBar"
import { MainBar } from "./MainBar/MainBar"
import { Navbar } from "./Navbar/Navbar"
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
