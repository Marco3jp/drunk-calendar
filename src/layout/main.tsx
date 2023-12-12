import {Link, Outlet, useOutletContext} from "react-router-dom";
import {DrunkStore, useDrunkStore} from "../lib/state/records.ts";

type ContextType = { drunkStore: DrunkStore }

export default () => {
    const drunkStore = useDrunkStore()
    const todayRecords = drunkStore.queryRecords({
        from: Math.round(Date.now() / 1000) - 43200, // 12時間前までを当日としてしまおう
    })

    const todayAlcohol = todayRecords.reduce((acc, cur) => {
        if (!cur.item.alcoholByVolume || !cur.item.volumeMilliliter) return acc
        return acc + cur.item.alcoholByVolume * cur.item.volumeMilliliter / 100
    }, 0)

    return (
        <main className="flex w-full h-full">
            <section className="w-20 h-full flex flex-col border-r border-gray-500 shrink-0">
                <div className="flex flex-col flex-grow justify-center text-center text-2xl">
                    <span>{todayAlcohol}<br />ml</span>
                    {/* <hr className="border-black mx-4 my-2"/>
                    <span>100</span> */}
                </div>
                {/* <button className="text-center mb-4 mx-1 px-1 bg-transparent border rounded border-gray-300 text-sm"
                    >リミット<br/>調整</button> */}
                <div className="text-center mb-4 mx-1 px-1 bg-transparent border rounded border-gray-300 text-sm">
                    12h<br/>ｱﾙｺｰﾙ量
                </div>
            </section>
            <section className="h-full flex-1 overflow-x-hidden flex flex-col">
                <section className="flex border-b border-gray-500 divide-x divide-inherit">
                    <Link className="text-center text-blue-500 hover:text-blue-700 py-4 flex-1" to="/">
                        記録
                    </Link>
                    <Link className="text-center text-blue-500 hover:text-blue-700 py-4 flex-1" to="/calendar">
                        カレンダー
                    </Link>
                    {/* <div className="text-center py-4 flex-1">
                            設定
                        </div> */}
                </section>
                <Outlet context={{drunkStore}} />
            </section>
        </main>
    )
}

export function useDrunkState() {
    return useOutletContext<ContextType>()
}
