import {$} from "@builder.io/qwik";

export const useNumberValue = $((e: Event): number => {
    const v = (e.target as HTMLInputElement).valueAsNumber
    return isNaN(v) ? 0 : v
})
