<template>
  <div>
    <h2>現在のアルコール情報</h2>
    <ul>
      <li>エタノール量: 50ml
        <ul>
          <li>エタノール許容量: 70%</li>
        </ul>
      </li>
      <li>水分摂取量: 500ml</li>
      <li>飲酒時間: 2h 20m</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'

export default defineComponent({
  name: "TodayDrunkInformation"
})
</script>

<style scoped lang="scss">

</style>
