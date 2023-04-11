import React from "react";
import "./css/style.css";
import { TourSelection } from "../TourSelection";

// Основной контент
export function MainContent() {

    return (
        <>
            <div className="main-content_container">
                <h2>Введите необходимую информацию для подбора тура</h2>
                <TourSelection />
            </div>
        </>
    )
}