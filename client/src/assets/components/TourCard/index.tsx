import React from "react";
import './css/style.css';
import { TToursCard } from "../../types/toursCard";

// Карточка тура
export function ToursCard({ title, image, stars, price, country }: TToursCard) {

    return (
        <>
            <div className="tour-card_container">
                <h1>{title}</h1>
                <div className="tour-card_container_image">
                    <img src={image} alt="Картинка тура" />
                </div>
                <div className="tour-card_container_row">
                    <span>Страна</span>
                    <span>{country}</span>
                </div>
                <div className="tour-card_container_row">
                    <span>Количество звёзд</span>
                    <span>{stars}</span>
                </div>
                <div className="tour-card_container_row">
                    <span>Стоимость</span>
                    <span>{price}</span>
                </div>
            </div>
        </>
    )
}