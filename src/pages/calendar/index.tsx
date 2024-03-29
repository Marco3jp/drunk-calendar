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
            <li className="flex flex-col justify-between px-2 py-4 border-b border-gray-400 border-dashed" key={date}>
                <div className="flex font-bold">
                    <span className="text-sm">{date}</span>
                    <span className="text-sm ml-6">Total: {totalAlcohol}ml</span>
                </div>
                <ul>
                    {records.map((record) => {
                        return (
                            <li className="flex mt-4" key={record.date}>
                                <div className="text-sm w-12">{(() => {
                                        const date = new Date(record.date * 1000)
                                        return `${date.getHours()}:${date.getMinutes()}`
                                    })()}</div>

                                <div className="text-sm flex-grow">{record.item.name}</div>
                                {/* 1000mlとかなると多分デザインが意図とズレるので、ここはスタイルの組み方考えたほうが良い */}
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
