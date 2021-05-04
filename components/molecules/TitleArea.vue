<template>
  <div id="title-area">
    <SiteTitle />
    <RandomLiquor />
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import SiteTitle from "~/components/atoms/SiteTitle.vue";
import RandomLiquor from "~/components/atoms/RandomLiquor.vue";

export default defineComponent({
  name: "TitleArea",
  components: {SiteTitle, RandomLiquor}
})
</script>

<style scoped lang="scss">
#title-area {
  display: flex;
}
</style>
