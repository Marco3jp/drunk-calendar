<template>
  <div>
    <h2>過去12時間のアルコール情報</h2>
    <ul>
      <li>アルコール量: {{ totalLiquorInfo.alcoholQuantity }}ml</li>
      <li>飲酒量: {{ totalLiquorInfo.quantity }}ml</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import {recordQueryPayload} from "~/store/records";
import {LiquorRecord} from "~/model/liquorRecord";

export default defineComponent({
  name: "TodayDrunkInformation",
  computed: {
    totalLiquorInfo() {
      const records: LiquorRecord[] = this.liquorRecordsLast12Hours;

      return {
        quantity: records.reduce(
          (accumulator: number, current: LiquorRecord) => accumulator + (current.liquor.quantity ?? 0), 0
        ),
        alcoholQuantity: records.reduce(
          (accumulator: number, current: LiquorRecord) => accumulator + (current.liquor.alcohol?.quantity ?? 0), 0
        )
      }
    },
    liquorRecordsLast12Hours(): LiquorRecord[] {
      const query: recordQueryPayload = {
        betweenNow: {
          hour: 12
        }
      }
      return this.$store.getters['records/queryLiquorRecords'](query, this.$dayjs)
    },
  }
})
</script>

<style scoped lang="scss">

</style>
