<template>
  <div id="random-liquor">
    <span>{{liquorEmoji}}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "RandomLiquor",
  setup() {
    const liquorEmojis = ['🍷', '🍶', '🍾', '🍸', '🍹', '🍺', '🥃'];
    return {
      liquorEmoji: liquorEmojis[Math.floor(Math.random() * liquorEmojis.length)]
    }
  }
})
</script>

<style scoped lang="scss">
#random-liquor {
  font-size: 2em; // same to h1 font size
}
</style>
