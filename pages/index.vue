<template>
  <div>
    <AppHeader />
    <main id="app-main-area">
      <div id="today-drunk-column">
        <TodayDrunkQuickForm @record-drunk="recordDrunk" />
        <TodayDrunkInformation />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'

import AppHeader from "~/components/organisms/AppHeader.vue";
import TodayDrunkInformation from "~/components/organisms/TodayDrunkInformation.vue";
import DrunkCalendarArea from "~/components/organisms/DrunkCalendarArea.vue";
import TodayDrunkQuickForm from "~/components/organisms/TodayDrunkQuickForm.vue";
import {Liquor} from "~/model/liquor";

export default defineComponent({
  components: {TodayDrunkQuickForm, AppHeader, TodayDrunkInformation, DrunkCalendarArea},
  methods: {
    recordDrunk(drunkLiquor: Liquor) {
      this.$store.dispatch('records/recordLiquor', drunkLiquor)
    }
  }
})
</script>

<style scoped lang="scss">
#app-main-area{
  width: 100%;
  display: flex;

  @media (min-aspect-ratio: 1/1) {
    #today-drunk-column, #drunk-calendar-column {
      width: 50%;
    }
  }

  @media (max-aspect-ratio: 1/1) {
    flex-direction: column;

    #today-drunk-column, #drunk-calendar-column {
      width: 100%;
    }
  }
}
</style>
