import React from "react";
import burger from "./media/images/burger.jpg"
import arrow from  "./media/icons/arrow.png"

const MainBlock = () => {
    return(
        <div className="main-block">
            <div className="content">
                <p className="main-block-first-text">Доставка вкусной еды <br/> до 30 минут + напиток <br/> в подарок!</p>
                <p className="main-block-second-text">Доставим заказ вовремя и можете рассчитывать, что <br/> еда будет доставлен всегда горячим и ароматным.</p>
                <button className="main-block-btn">Перейти в меню <img src={arrow} alt=""/></button>
            </div>
            <img className="burger-img" src={burger} alt=""/>
        </div>
    )
}

export default MainBlock;