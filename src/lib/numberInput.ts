import * as React from "react";

export const useNumberValue = ((e: React.FormEvent): number => {
    const v = (e.target as HTMLInputElement).valueAsNumber
    return isNaN(v) ? 0 : v
})
