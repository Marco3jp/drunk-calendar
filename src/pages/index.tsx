import {DrunkRecordForm, drunkRecordFormValues} from "../component/form/drunkRecordForm.tsx";
import {useDrunkState} from "../layout/main.tsx";

export default () => {
    const {drunkStore} = useDrunkState()

    const onSubmitRecord = (values: drunkRecordFormValues) => {
        drunkStore.pushRecords([{
            id: crypto.randomUUID(),
            date: Math.round(Date.now() / 1000),
            item: {
                name: values.name,
                volumeMilliliter: values.volumeMilliliter,
                alcoholByVolume: values.alcoholByVolume
            }
        }])
    }

    return (
        <>
            <section className="w-full px-2 pt-1 pb-4 flex-1 flex flex-col">
                { /* <label class="self-end"><input type="checkbox" class="mr-1"/>割る前の酒から計算する</label> */}
                <DrunkRecordForm onSubmitRecord={onSubmitRecord} />
            </section>
        </>
    )
}
