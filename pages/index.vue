<template>
  <div>
    <AppHeader />
    <main id="app-main-area">
      <div id="today-drunk-column">
        <TodayDrunkForm />
        <TodayDrunkInformation />
      </div>
      <div id="drunk-calendar-column">
        <DrunkCalendarArea />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'

import AppHeader from "~/components/organisms/AppHeader.vue";
import TodayDrunkForm from "~/components/organisms/TodayDrunkForm.vue";
import TodayDrunkInformation from "~/components/organisms/TodayDrunkInformation.vue";
import DrunkCalendarArea from "~/components/organisms/DrunkCalendarArea.vue";

export default defineComponent({
  components: {AppHeader, TodayDrunkForm, TodayDrunkInformation, DrunkCalendarArea},
})
</script>

<style scoped lang="scss">
#app-main-area{
  width: 100%;
  display: flex;

  #today-drunk-column, #drunk-calendar-column {
    width: 50%;
  }
}
</style>
