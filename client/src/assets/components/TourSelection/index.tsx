import React from "react";
import "./css/style.css";
import '../FormSecetionTour/css/style.css';
import '../ResultField/css/style.css';
// import { FormSelectionTour } from "../FormSecetionTour";
// import { ResultField } from "../ResultField";
import { useFormSelection } from "../../hook/useFormFieldSelection";
import { countriesArray } from "../../data/countries";
import { ToursCard } from "../TourCard";
import { arrayToursCard } from "../../data/arrayToursCard";
import { TToursCard } from "../../types/toursCard";

// Выбор тура
export function TourSelection() {
    /*Form selection*/
    const {
        countryInput, setInputValue, amountStars, setAmountStars, amountNight, setAmountHight,
        amountAdults, setAmountAdults, amountKids, setAmountKids, resultCount, setResultCount,
    } = useFormSelection()

    // Обработчик отправки формы
    const hendlerSubmitSelectionForm = async (event: any) => {
        event.preventDefault();

    }

    // Обработчик ввода страны
    const heandlerCountryOption = (event: any) => {
        setInputValue(event.target[event.target.value].innerHTML);
    }

    // Обработчик ввода количества звёзд
    const heandlerAmountStarsInput = (event: any) => {
        setAmountStars(event.target.value);
        console.log(countryInput);
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


    /*Result selection*/


    // lauout pass
    // <>
    //     <FormSelectionTour />
    //     <ResultField/>
    // </>

    return (
        <>
            <>
                <div className="form-selection-tour_container">
                    <form onSubmit={hendlerSubmitSelectionForm}>
                        <div className="form-selection-tour_form__row">
                            <h3>Страна</h3>
                            <select onChange={heandlerCountryOption}>
                                {
                                    countriesArray.map((element: any, index: number) => (
                                        <option key={index++} value={index++}>{element}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-selection-tour_form__row">
                            <h3>Количество звёзд</h3>
                            <input type="number" value={amountStars} min={3} max={5} onChange={heandlerAmountStarsInput} />
                        </div>
                        <div className="form-selection-tour_form__row">
                            <h3>Количество ночей</h3>
                            <input type="number" value={amountNight} min={1} onChange={heandlerAmountNightInput} />
                        </div>
                        <div className="form-selection-tour_form__row">
                            <h3>Количество взрослых</h3>
                            <input type="number" value={amountAdults} min={1} onChange={heandlerAmountAdultsInput} />
                        </div>
                        <div className="form-selection-tour_form__row">
                            <h3>Количество детей</h3>
                            <input type="number" value={amountKids} min={0} onChange={heandlerAmountKidsInput} />
                        </div>
                        <div className="form-selection-tour_form__row">
                            <h3>Закладываемая стоимость</h3>
                            <input type="number" value={resultCount} min={10000} step={1000} onChange={heandlerResultCountInput} />
                        </div>
                        {/* <div className="form-selection-tour_form__row">
                            <input type="submit" className="submit-button" value={"Найти тур"} />
                        </div> */}
                    </form>
                </div>
            </>
            <>
                <h2>Предложенные туры</h2>
                <div className="result-field_container">
                    {
                        arrayToursCard.map((element: TToursCard) => (
                            <ToursCard
                                title={element.title}
                                image={element.image}
                                stars={element.stars}
                                price={element.price}
                                country={element.country}
                            />
                        ))
                    }
                </div>
            </>
        </>
    )
}