import shieldIcon from "../../../assets/icons/ShieldCheck.svg"
import truckIcon from "../../../assets/icons/Truck.svg"
import cardIcon from "../../../assets/icons/CreditCard.webp"
import "./AnnouncementBar.scss"

export function AnnouncementBar() {
    return (
        <div className="header__announcement-bar">
            <ul className="header__announcement-list">
                <li className="header__announcement-item">
                    <img className="header__announcement-icon" src={shieldIcon} alt="" />
                    <span className="header__announcement-text">
                        Compra <span className="header__announcement-marked">100% segura</span>
                    </span>
                </li>
                <li className="header__announcement-item">
                    <img className="header__announcement-icon" src={truckIcon} alt="" />
                    <span className="header__announcement-text">
                        <span className="header__announcement-marked">Frete grátis</span> acima de R$ 200
                    </span>
                </li>
                <li className="header__announcement-item">
                    <img className="header__announcement-icon" src={cardIcon} alt="" />
                    <span className="header__announcement-text">
                        <span className="header__announcement-marked">Parcele</span> suas compras
                    </span>
                </li>
            </ul>
        </div>
    )
}
