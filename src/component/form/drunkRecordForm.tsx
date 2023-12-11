import {useNumberValue} from "../../lib/numberInput.ts";
import {useState} from "react";

export type drunkRecordFormValues = {name?: string, volumeMilliliter: number, alcoholByVolume: number}

type drunkTemplateType = {
    name: string,
    volume: number,
    alcohol: number,
}

const drunkTemplates: drunkTemplateType[] = [
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

type DrunkRecordFormProps = {
    onSubmitRecord?: (values: drunkRecordFormValues) => void
}

export const DrunkRecordForm = (({onSubmitRecord}: DrunkRecordFormProps) => {
    const initialStates: drunkRecordFormValues = {
        name: "",
        volumeMilliliter: 0,
        alcoholByVolume: 0,
    }

    const [drunkRecord, setDrunkRecord] = useState({
        ...initialStates,
    })

    function resetStates(){
        setDrunkRecord(initialStates)
    }

    function onSubmit() {
        if (drunkRecord.volumeMilliliter === 0 || !onSubmitRecord) return

        onSubmitRecord(drunkRecord)

        resetStates()
    }

    function onSelectDrunkTemplate(template: drunkTemplateType) {
        setDrunkRecord({
            name: template.name,
            volumeMilliliter: template.volume,
            alcoholByVolume: template.alcohol
        })
    }

    const drunkTemplatesElement = drunkTemplates.map((template) => {
        return <li className="border rounded border-gray-500 p-2 flex flex-col text-center shrink-0"
                   key={template.name}
                   onClick={() => {
                       onSelectDrunkTemplate(template)
                   }}
        >
            <span>{template.name}</span>
            <span>{template.volume}ml</span>
            <span>{template.alcohol}%</span>
        </li>
    })

    return (
        <form className="w-full mt-12 flex-1 flex flex-col">
            <section>
                <div>
                    <label className="flex flex-col">
                        <div>お酒の量</div>
                        <div className="self-end w-56">
                            <input type="number" autoFocus
                                   className="w-40 text-4xl border text-right"
                                   value={drunkRecord.volumeMilliliter}
                                   onInput={(event) => {setDrunkRecord({...drunkRecord, volumeMilliliter: useNumberValue(event)})}}
                                   step="10"
                            /><span
                            className="text-xl ml-2">ml</span>
                        </div>
                    </label>
                </div>
                <div className="mt-2">
                    <label className="flex flex-col">
                        <div>度数</div>
                        <div className="self-end w-56">
                            <input type="number" className="w-40 text-4xl border text-right"
                                   max="100" value={drunkRecord.alcoholByVolume}
                                   onInput={(event) => {setDrunkRecord({...drunkRecord, alcoholByVolume: useNumberValue(event)})}}/><span className="text-xl ml-2">%</span>
                        </div>
                    </label>
                </div>
                <hr className="mx-4 my-4 border-gray-500"/>
                <div>
                    <div className="flex flex-col">
                        <div>純アルコール量</div>
                        <div className="self-end w-56">
                            <span className="inline-block w-40 text-right underline decoration-gray-300 text-2xl">{drunkRecord.volumeMilliliter * drunkRecord.alcoholByVolume / 100}</span>
                            <span className="text-xl ml-2">ml</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-6 -mx-2 grow">
                <ul className="flex px-2 overflow-auto space-x-2 text-sm">
                    {drunkTemplatesElement}
                </ul>
            </div>
            <div className="flex justify-around items-end">
                <input type="button" value="リセット" className="border border-gray-500 p-0.5" onClick={resetStates} />
                {/* <input type="button" value="メモを追加"
                       className="border rounded border-gray-500 text-lg py-2 px-1 self-stretch"/> */}
                <input type="button" value="記録"
                       className="border rounded border-gray-500 text-2xl py-2 px-1 self-stretch" onClick={onSubmit}/>
            </div>
        </form>
    )
})
