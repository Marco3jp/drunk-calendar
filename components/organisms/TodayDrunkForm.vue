<template>
  <div>
    <h2>飲酒登録</h2>
    <div>
      <label for="base-alcohol-percent">ベースアルコールの度数</label>
      <input type="number" id="base-alcohol-percent">
    </div>
    <div>
      <label for="base-alcohol-milliliter">ベースアルコールの量</label>
      <input type="number" id="base-alcohol-milliliter">
    </div>
    <div>
      <label for="total-drink-milliliter">アルコール飲料の全体量</label>
      <input type="number" id="total-drink-milliliter">
    </div>
    <div>
      <label for="ethanol-milliliter">エタノールの量</label>
      <input type="number" id="ethanol-milliliter">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'

export default defineComponent({
  name: "TodayDrunkForm"
})
</script>

<style scoped lang="scss">

</style>
