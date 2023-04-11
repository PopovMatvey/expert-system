import { useRef } from "react";

export function useRefModalWindowElement() {
    const modalWindowElement = useRef(document.createElement('div'));

    return {modalWindowElement}
}
