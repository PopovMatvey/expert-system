import { useState } from "react";
import { countriesArray } from "../data/countries";

export function useFormSelection() {
    const [countryInput, setInputValue] = useState(countriesArray[0]);
    const [amountStars, setAmountStars] = useState(3);
    const [amountNight, setAmountHight] = useState(8);
    const [amountAdults, setAmountAdults] = useState(1);
    const [amountKids, setAmountKids] = useState(0);
    const [resultCount, setResultCount] = useState(30000);

    return {
        countryInput, setInputValue, amountStars, setAmountStars, amountNight, setAmountHight,
        amountAdults, setAmountAdults, amountKids, setAmountKids, resultCount, setResultCount,
    }
}