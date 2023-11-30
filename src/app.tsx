import { component$ } from '@builder.io/qwik'

import './app.css'

export const App = component$(() => {
    return (
    <>
        <main class="flex w-full h-full">
            <section class="w-1/4 h-full flex flex-col border-r border-gray-500">
                <div class="flex flex-col flex-grow justify-center text-center text-2xl">
                    <span>50</span>
                    <hr class="border-black mx-4 my-2" />
                    <span>100</span>
                </div>
                <button class="text-center m-1 px-2 bg-transparent border rounded border-gray-300 text-sm">リミット<br/>調整</button>
            </section>
            <div class="h-full">
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
                <section>
                    <label class=""><input type="checkbox"/>割る前の酒から計算する</label>
                    <form>
                        <section>
                            <div>
                                <label>お酒の量<input type="number"/>ml</label>
                            </div>
                            <div>
                                <label>度数<input type="number"/>%</label>
                            </div>
                            <hr/>
                            <div>
                                <span>
                                    純アルコール量
                                </span>
                                <div>
                                    <span>約</span>
                                    <span class="underline">100</span>
                                    <span>ml</span>
                                </div>
                            </div>
                        </section>
                        <section>
                            <ul>
                                <li>
                                    <span>ビール</span>
                                    <span>350ml</span>
                                    <span>5%</span>
                                </li>
                                <li>
                                    <span>ハイボール</span>
                                    <span>350ml</span>
                                    <span>7%</span>
                                </li>
                                <li>
                                    <span>レモンサワー</span>
                                    <span>350ml</span>
                                    <span>3%</span>
                                </li>
                                <li>
                                    <span>日本酒 1合</span>
                                    <span>180ml</span>
                                    <span>15%</span>
                                </li>
                                <li>
                                    <span>ワイングラス</span>
                                    <span>125ml</span>
                                    <span>12%</span>
                                </li>
                                <li>
                                    <span>味噌汁</span>
                                    <span>180ml</span>
                                    <span>0%</span>
                                </li>
                            </ul>
                        </section>
                        <div class="flex">
                            <input type="button" value="リセット" />
                            <input type="button" value="メモを追加" />
                            <input type="button" value="記録" />
                        </div>
                    </form>
                </section>
            </div>
        </main>
    </>
  )
})
