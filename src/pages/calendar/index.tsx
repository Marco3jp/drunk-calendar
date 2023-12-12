import {useDrunkState} from "../../layout/main.tsx";
import {Record} from "../../model/record.ts";

export default () => {
    type DrunkRecordByDate = {
        [date: string]: Record[] // ex "2021-01-01": [Record, Record, Record]
    }

    const {drunkStore} = useDrunkState()
    const drunkRecordsByDate: DrunkRecordByDate = {}

    drunkStore.records.forEach((record) => {
        const date = new Date(record.date * 1000)
        const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        if (!drunkRecordsByDate[dateString]) drunkRecordsByDate[dateString] = []
        drunkRecordsByDate[dateString].push(record)
    })

    const recordsByDateElements = Object.entries(drunkRecordsByDate).map(([date, records]) => {
        const totalAlcohol = records.reduce((acc, cur) => {
            if (!cur.item.alcoholByVolume || !cur.item.volumeMilliliter) return acc
            return acc + cur.item.alcoholByVolume * cur.item.volumeMilliliter / 100
        }, 0)
        return (
            <li className="flex flex-col justify-between px-2 py-1 border-b border-gray-500" key={date}>
                <span className="flex font-bold">
                    <div className="text-sm">{date}</div>
                    <div className="text-sm ml-6">Total: {totalAlcohol}ml</div>
                </span>
                <ul>
                    {records.map((record) => {
                        return (
                            <li className="flex py-1" key={record.date}>
                                <div className="text-sm flex-1">{record.item.name}</div>
                                <div className="text-sm">{record.item.volumeMilliliter}ml</div>
                                <div className="text-sm w-12 text-right">{record.item.alcoholByVolume}%</div>
                            </li>
                        )
                    })}
                </ul>
            </li>
        )
    })

    return (
        <div className="flex-1 overflow-y-auto">
            <ul>{recordsByDateElements}</ul>
        </div>
    )
}
