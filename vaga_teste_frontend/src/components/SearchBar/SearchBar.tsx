import { IconButton } from ".."
import searchIcon from "../../assets/icons/MagnifyingGlass.svg"
import "./SearchBar.scss"

interface SearchBarProps {
    placeholder?: string;
}

export function SearchBar({ placeholder = "O que você está buscando?" }: SearchBarProps) {
    return (
        <form className="header__search" role="search">
            <input
                className="header__search-input"
                type="search"
                name="query"
                placeholder={placeholder}
                aria-label={placeholder}
            />
            <IconButton icon={searchIcon} label="Buscar" size={28} type="submit" />
        </form>
    )
}
