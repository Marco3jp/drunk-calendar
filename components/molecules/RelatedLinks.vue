<template>
  <div id="related-links">
    <a href="https://github.com/Marco3jp/drunk-calendar" id="related-links__link">
      <GitHubIcon id="related-links__icon" />
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import GitHubIcon from "~/components/atoms/icons/GitHubIcon.vue";

export default defineComponent({
  name: "RelatedLinks",
  components: {GitHubIcon}
})
</script>

<style scoped lang="scss">
#related-links {
  height: 100%;
  padding: 8px;
  &__link, &__icon {
    height: 100%;
  }
}

</style>
