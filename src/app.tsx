import { component$ } from '@builder.io/qwik'

import './app.css'

export const App = component$(() => {
    const drunkTemplates = [{
        name: 'ビール',
        volume: 350,
        alcohol: 5,
    }, {
        name: 'ハイボール',
        volume: 350,
        alcohol: 7,
    }, {
        name: 'レモンサワー',
        volume: 350,
        alcohol: 3,
    }, {
        name: '日本酒 1合',
        volume: 180,
        alcohol: 15,
    }, {
        name: 'ワイングラス',
        volume: 125,
        alcohol: 12,
    }, {
        name: '味噌汁',
        volume: 180,
        alcohol: 0,
    }]

    const drunkTemplatesElement = drunkTemplates.map((template) => {
        return <li class="border rounded border-gray-500 p-2 flex flex-col text-center shrink-0">
            <span>{template.name}</span>
            <span>{template.volume}ml</span>
            <span>{template.alcohol}%</span>
        </li>
    })

    return (
    <>
        <main class="flex w-full h-full">
            <section class="w-20 h-full flex flex-col border-r border-gray-500 shrink-0">
                <div class="flex flex-col flex-grow justify-center text-center text-2xl">
                    <span>50</span>
                    <hr class="border-black mx-4 my-2" />
                    <span>100</span>
                </div>
                <button class="text-center mb-4 mx-1 px-1 bg-transparent border rounded border-gray-300 text-sm">リミット<br/>調整</button>
            </section>
            <section class="h-full flex-1 overflow-x-hidden flex flex-col">
                <section class="flex border-b border-gray-500 divide-x divide-inherit">
                    <div class="text-center py-4 flex-1">
                        記録
                    </div>
                    <div class="text-center py-4 flex-1">
                        カレンダー
                    </div>
                    <div class="text-center py-4 flex-1">
                        設定
                    </div>
                </section>
                <section class="w-full px-2 pt-1 pb-4 flex-1 flex flex-col">
                    <label class="self-end"><input type="checkbox" class="mr-1"/>割る前の酒から計算する</label>
                    <form class="w-full mt-12 flex-1 flex flex-col">
                        <section>
                            <div>
                                <label class="flex flex-col">
                                    <div>お酒の量</div>
                                    <div class="self-end w-56">
                                        <input type="number" autoFocus class="w-40 text-4xl border text-right"/><span class="text-xl ml-2">ml</span>
                                    </div>
                                </label>
                            </div>
                            <div class="mt-2">
                                <label class="flex flex-col">
                                    <div>度数</div>
                                    <div class="self-end w-56">
                                        <input type="number" class="w-40 text-4xl border text-right" max="100"/><span class="text-xl ml-2">%</span>
                                    </div>
                                </label>
                            </div>
                            <hr class="mx-4 my-4 border-gray-500"/>
                            <div>
                                <div class="flex flex-col">
                                    <div>純アルコール量</div>
                                    <div class="self-end w-56">
                                        <span class="inline-block w-40 text-right underline decoration-gray-300 text-2xl">100</span>
                                        <span class="text-xl ml-2">ml</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div class="mt-6 -mx-2 grow">
                            <ul class="flex px-2 overflow-auto space-x-2 text-sm">
                                {drunkTemplatesElement}
                            </ul>
                        </div>
                        <div class="flex justify-around items-end">
                            <input type="button" value="リセット" class="border border-gray-500 p-0.5" />
                            <input type="button" value="メモを追加" class="border rounded border-gray-500 text-lg py-2 px-1 self-stretch" />
                            <input type="button" value="記録" class="border rounded border-gray-500 text-2xl py-2 px-1 self-stretch" />
                        </div>
                    </form>
                </section>
            </section>
        </main>
    </>
  )
})
