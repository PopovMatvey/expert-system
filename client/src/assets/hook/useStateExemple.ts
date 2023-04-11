import { useState } from "react";

// Состояние "Пример"
export function useExempleState() {
    const [exemple,setexemple] = useState('undefiend');  // Состояние "Пример"

    return {
        exemple,setexemple
    }
}