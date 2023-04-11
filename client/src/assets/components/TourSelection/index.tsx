import React from "react";
import "./css/style.css";
import { FormSelectionTour } from "../FormSecetionTour";
import { ResultField } from "../ResultField";

// Выбор тура
export function TourSelection() {

    return (
        <>
            <FormSelectionTour />
            <ResultField/>
        </>
    )
}