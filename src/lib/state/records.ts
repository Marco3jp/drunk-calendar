import {Record} from "../../model/record.ts";
import {Dispatch, SetStateAction, useState} from "react";

type Query = {
    from?: number
    to?: number
}

export interface DrunkStore {
    readonly records: Record[]
    pushRecords: (records: Record[]) => readonly Record[]
    queryRecords: (query: Query) => readonly Record[]
}

/**
 * 飲んだ酒の記録を返すやつ
 * 過去全ての記録を返す
 */
export function useDrunkStore(): DrunkStore {
    class DrunkStore {
        private readonly setRecords: Dispatch<SetStateAction<Record[]>>
        readonly records: Record[]

        constructor() {
            const drunkRecordsFromLocalStorage = localStorage.getItem("drunk-records")
            const records: Record[] = drunkRecordsFromLocalStorage ? JSON.parse(drunkRecordsFromLocalStorage) : []
            const [r, setR] = useState(records)
            this.records = r
            this.setRecords = setR
        }
        pushRecords(records: Record[]): readonly Record[] {
            const newRecords = [...this.records, ...records]

            this.setRecords(newRecords)
            localStorage.setItem("drunk-records", JSON.stringify(newRecords))
            return this.records
        }
        queryRecords(query: Query): readonly Record[] {
            const {from, to} = query

            if (from && to) {
                return this.records.filter((r: { date: number; }) => r.date >= from && r.date <= to)
            } else if (from) {
                return this.records.filter((r: { date: number; }) => r.date >= from)
            } else if (to) {
                return this.records.filter((r: { date: number; }) => r.date <= to)
            }

            return []
        }
    }

    return new DrunkStore()
}
