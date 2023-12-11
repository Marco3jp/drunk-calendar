import {$, component$, useStore} from "@builder.io/qwik";
import {useNumberValue} from "../../lib/numberInput.ts";

export const DrunkRecordForm = component$(() => {
    const drunkTemplates = [
        {
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
        }
    ]

    const drunkTemplatesElement = drunkTemplates.map((template) => {
        return <li class="border rounded border-gray-500 p-2 flex flex-col text-center shrink-0" key={template.name}>
            <span>{template.name}</span>
            <span>{template.volume}ml</span>
            <span>{template.alcohol}%</span>
        </li>
    })

    type valuesType = {name?: string, volumeMilliliter: number, alcoholByVolume: number}

    const initialValues: valuesType = {
        name: "",
        volumeMilliliter: 0,
        alcoholByVolume: 0,
    }

    const values: valuesType & { reset: () => void } = useStore({
        ...initialValues,
        reset: $(function (this: valuesType) {
            this.name = initialValues.name
            this.volumeMilliliter = initialValues.volumeMilliliter
            this.alcoholByVolume = initialValues.alcoholByVolume
        })
    })
    return (
        <form class="w-full mt-12 flex-1 flex flex-col">
            <section>
                <div>
                    <label class="flex flex-col">
                        <div>お酒の量</div>
                        <div class="self-end w-56">
                            <input type="number" autoFocus
                                   class="w-40 text-4xl border text-right"
                                   value={values.volumeMilliliter}
                                   onInput$={async (event) => {values.volumeMilliliter =  await useNumberValue(event)}}
                                   step="10"
                            /><span
                            class="text-xl ml-2">ml</span>
                        </div>
                    </label>
                </div>
                <div class="mt-2">
                    <label class="flex flex-col">
                        <div>度数</div>
                        <div class="self-end w-56">
                            <input type="number" class="w-40 text-4xl border text-right"
                                   max="100" value={values.alcoholByVolume}
                                   onInput$={async (event) => {values.alcoholByVolume = await useNumberValue(event)}}/><span class="text-xl ml-2">%</span>
                        </div>
                    </label>
                </div>
                <hr class="mx-4 my-4 border-gray-500"/>
                <div>
                    <div class="flex flex-col">
                        <div>純アルコール量</div>
                        <div class="self-end w-56">
                            <span class="inline-block w-40 text-right underline decoration-gray-300 text-2xl">{values.volumeMilliliter * values.alcoholByVolume / 100}</span>
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
                <input type="button" value="リセット" class="border border-gray-500 p-0.5" onClick$={() => values.reset()} />
                {/* <input type="button" value="メモを追加"
                       class="border rounded border-gray-500 text-lg py-2 px-1 self-stretch"/> */}
                <input type="button" value="記録"
                       class="border rounded border-gray-500 text-2xl py-2 px-1 self-stretch"/>
            </div>
        </form>
    )
})
