import React from "react";
import { useRequest } from "../hook/useAudioArray";

// export const data = [];\
export function useRequestData() {
    const { requestArray } = useRequest();

    return { useRequest }
}