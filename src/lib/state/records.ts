import {useStore, $, QRL} from "@builder.io/qwik";
import {Record} from "../../model/record.ts";

type Query = {
    from?: number
    to?: number
}

export interface DrunkStore {
    records: Record[]
    pushRecords: QRL<(records: Record[]) => Record[]>
    queryRecords: QRL<(query: Query) => Record[]>
}

/**
 * 飲んだ酒の記録を返すやつ
 * 過去全ての記録を返す
 */
export function useDrunkStore(): DrunkStore {
    const drunkRecordsFromLocalStorage = localStorage.getItem("drunk-records")

    return useStore<DrunkStore>({
        records: drunkRecordsFromLocalStorage ? JSON.parse(drunkRecordsFromLocalStorage) : [],
        pushRecords: $(function (this: DrunkStore, records: Record[]) {
            this.records.push(...records)
            localStorage.setItem("drunk-records", JSON.stringify(this.records))
            return this.records
        }),
        queryRecords: $(function (this: DrunkStore, query: Query) {
            const {from, to} = query
            const records = this.records

            if (from && to) {
                return records.filter(r => r.date >= from && r.date <= to)
            } else if (from) {
                return records.filter(r => r.date >= from)
            } else if (to) {
                return records.filter(r => r.date <= to)
            }

            return []
        })
    });
}
