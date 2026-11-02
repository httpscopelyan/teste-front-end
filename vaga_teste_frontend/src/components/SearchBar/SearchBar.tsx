import { IconButton } from ".."
import searchIcon from "../../assets/icons/MagnifyingGlass.svg"
import "./SearchBar.scss"

interface SearchBarProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
}

export function SearchBar({ placeholder = "O que você está buscando?", onSearch }: SearchBarProps) {
    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const query = new FormData(event.currentTarget).get("query")
        onSearch?.(String(query ?? ""))
    }

    return (
        <form className="header__search" role="search" onSubmit={handleSubmit}>
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
