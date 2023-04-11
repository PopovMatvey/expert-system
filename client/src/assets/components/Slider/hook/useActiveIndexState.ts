import { useState } from "react";

// Активный индекс (номер выбранного слайда)
export function useActiveIndexState() {
    const [activeIndex, setActiveIndex] = useState(0);

    return { activeIndex, setActiveIndex };
}