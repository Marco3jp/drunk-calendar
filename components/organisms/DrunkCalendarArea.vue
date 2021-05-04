<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default defineComponent({
  name: "DrunkCalendarArea",
  components: {FullCalendar},
  setup() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, interactionPlugin ],
        initialView: 'dayGridMonth'
      }
    }
  }

})
</script>

<style scoped lang="scss">

</style>
