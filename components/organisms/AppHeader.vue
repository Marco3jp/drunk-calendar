<template>
  <header id="app-header">
    <TitleArea />
    <RelatedLinks />
  </header>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import TitleArea from "~/components/molecules/TitleArea.vue";
import RelatedLinks from "~/components/molecules/RelatedLinks.vue";

export default defineComponent({
  name: "AppHeader",
  components: {TitleArea, RelatedLinks}
})
</script>

<style scoped lang="scss">
#app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 8px;
  border-bottom: 1px solid #212121;
}
</style>
