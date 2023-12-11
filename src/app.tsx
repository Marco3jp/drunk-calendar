import {$, component$, useComputed$} from '@builder.io/qwik'

import './app.css'
import {DrunkRecordForm, drunkRecordFormValues} from "./component/form/drunkRecordForm.tsx";
import {useDrunkStore} from "./lib/state/records.ts";

export const App = component$(() => {
    const store = useDrunkStore()
    const todayRecords = useComputed$(() => {
        return store.queryRecords({
            from: Math.round(Date.now() / 1000) - 43200, // 12時間前までを当日としてしまおう
        })
    })
    const todayAlcohol = useComputed$(() => {
        return todayRecords.value.reduce((acc, cur) => {
            if (!cur.item.alcoholByVolume || !cur.item.volumeMilliliter) return acc
            return acc + cur.item.alcoholByVolume * cur.item.volumeMilliliter / 100
        }, 0)
    })


    const onSubmitRecord$ = $((values: drunkRecordFormValues) => {
        store.pushRecords([{
            id: crypto.randomUUID(),
            date: Math.round(Date.now() / 1000),
            item: {
                name: values.name,
                volumeMilliliter: values.volumeMilliliter,
                alcoholByVolume: values.alcoholByVolume
            }
        }])
    })

    return (
        <>
            <main class="flex w-full h-full">
                <section class="w-20 h-full flex flex-col border-r border-gray-500 shrink-0">
                    <div class="flex flex-col flex-grow justify-center text-center text-2xl">
                        <span>{todayAlcohol}<br />ml</span>
                        {/*
                            <hr class="border-black mx-4 my-2"/>
                            <span>100</span>
                        */}
                    </div>
                    {/* <button class="text-center mb-4 mx-1 px-1 bg-transparent border rounded border-gray-300 text-sm"
                    >リミット<br/>調整</button> */}
                    <div class="text-center mb-4 mx-1 px-1 bg-transparent border rounded border-gray-300 text-sm">
                        12h<br/>ｱﾙｺｰﾙ量
                    </div>
                </section>
                <section class="h-full flex-1 overflow-x-hidden flex flex-col">
                    <section class="flex border-b border-gray-500 divide-x divide-inherit">
                        <div class="text-center py-4 flex-1">
                            記録
                        </div>
                        <div class="text-center py-4 flex-1">
                            カレンダー
                        </div>
                        {/* <div class="text-center py-4 flex-1">
                            設定
                        </div> */}
                    </section>
                    <section class="w-full px-2 pt-1 pb-4 flex-1 flex flex-col">
                        { /* <label class="self-end"><input type="checkbox" class="mr-1"/>割る前の酒から計算する</label> */}
                        <DrunkRecordForm onSubmitRecord$={onSubmitRecord$} />
                    </section>
                </section>
            </main>
        </>
    )
})
