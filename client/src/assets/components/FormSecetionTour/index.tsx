import React, { useState } from "react";
import "./css/style.css";
import { countriesArray } from "../../data/countries";

export function FormSelectionTour() {
    const [countryInput, setInputValue] = useState("");
    const [amountStars, setAmountStars] = useState(3);
    const [amountNight, setAmountHight] = useState(8);
    const [amountAdults, setAmountAdults] = useState(0);
    const [amountKids, setAmountKids] = useState(0);
    const [resultCount, setResultCount] = useState(30000);

    // Обработчик отправки формы
    const hendlerSubmitSelectionForm = async (event: any) => {
        event.preventDefault();
        console.log(typeof (event))
    }

    // Обработчик ввода страны
    const heandlerCountryInput = (event: any) => {
        setInputValue(event.target.value);
    }

    // Обработчик ввода количества звёзд
    const heandlerAmountStarsInput = (event: any) => {
        setAmountStars(event.target.value);
    }

    // Обработчик ввода количество ночей
    const heandlerAmountNightInput = (event: any) => {
        setAmountHight(event.target.value);
    }

    // Обработчик ввода количества взрослых
    const heandlerAmountAdultsInput = (event: any) => {
        setAmountAdults(event.target.value);
    }

    // Обработчик ввода количества детей
    const heandlerAmountKidsInput = (event: any) => {
        setAmountKids(event.target.value);
    }

    // Обработчик ввода Закладываемой стоимости
    const heandlerResultCountInput = (event: any) => {
        setResultCount(event.target.value);
    }

    return (
        <>
            <div className="form-selection-tour_container">
                <form onSubmit={hendlerSubmitSelectionForm}>
                    <div className="form-selection-tour_form__row">
                        <h3>Страна</h3>
                        {/* <input type="text" value={countryInput} onChange={heandlerCountryInput} /> */}
                        <select>
                            {
                                countriesArray.map((element: any, index: number) => (
                                    <option key={index++} value={index++}>{element}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-selection-tour_form__row">
                        <h3>Количество звёзд</h3>
                        <input type="number" value={amountStars} onChange={heandlerAmountStarsInput} />
                    </div>
                    <div className="form-selection-tour_form__row">
                        <h3>Количество ночей</h3>
                        <input type="number" value={amountNight} onChange={heandlerAmountNightInput} />
                    </div>
                    <div className="form-selection-tour_form__row">
                        <h3>Количество взрослых</h3>
                        <input type="number" value={amountAdults} onChange={heandlerAmountAdultsInput} />
                    </div>
                    <div className="form-selection-tour_form__row">
                        <h3>Количество детей</h3>
                        <input type="number" value={amountKids} onChange={heandlerAmountKidsInput} />
                    </div>
                    <div className="form-selection-tour_form__row">
                        <h3>Закладываемая стоимость</h3>
                        <input type="number" value={resultCount} step={1000} onChange={heandlerResultCountInput} />
                    </div>
                    <div className="form-selection-tour_form__row">
                        <input type="submit" className="submit-button" value={"Найти тур"} />
                    </div>
                </form>
            </div>
        </>
    )
}