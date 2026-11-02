import { Logo } from "../../Logo/Logo"
import { SearchBar } from "../../SearchBar/SearchBar"
import { IconButton } from "../../IconButton/IconButton"
import ordersIcon from "../../../assets/icons/Group.svg"
import heartIcon from "../../../assets/icons/Heart.svg"
import userIcon from "../../../assets/icons/UserCircle.svg"
import cartIcon from "../../../assets/icons/ShoppingCart.svg"
import "./MainBar.scss"

export function MainBar() {
    return (
        <div className="header__main-bar">
            <Logo />
            <SearchBar />
            <div className="header__icons">
                <IconButton icon={ordersIcon} label="Meus pedidos" size={24} />
                <IconButton icon={heartIcon} label="Favoritos" />
                <IconButton icon={userIcon} label="Minha conta" />
                <IconButton icon={cartIcon} label="Carrinho" />
            </div>
        </div>
    )
}
