import React from "react";
import icon from "./media/icons/logo1.png";
import vector from "./media/icons/Vector 1.png";
import call from "./media/icons/call-vector.png";
import cart from "./media/icons/buy-cart.png"

const Header = () => {
    return(

            <header>
                <div className="header">
                <div className="logo-food-planet">
                    <img src={icon} alt="#" />
                </div>
                <div className="menu">
                    <ul>
                        <li className="links">
                            <a>Главная</a>
                            <a>Меню <img src={vector} alt="" /></a>
                            <a>Доставка</a>
                            <a>Контакты</a>
                            <a><img src={call} alt=""/>+996500405988</a>
                            <a><img src={cart} alt=""/></a>
                        </li>

                    </ul>
                </div>
                </div>
            </header>

    )
}
export default Header;