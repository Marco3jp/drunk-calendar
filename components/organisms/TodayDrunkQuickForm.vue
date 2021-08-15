<template>
  <div class="today-drunk-quick-form">
    <div class="today-drunk-quick-form__basic-form">
      <label>
        <span>アルコール度数(%)</span>
        <input type="number" v-model="localLiquor.alcohol.rate" @input="calculateAlcoholQuantity">
      </label>
      <label>
        <span>アルコール飲料の量(ml)</span>
        <input type="number" v-model="localLiquor.quantity">
      </label>
      <label>
        <span>アルコール量(ml)</span>
        <input type="number" v-model="localLiquor.alcohol.quantity">
      </label>

      <button @click="handleRecordDrunkLiquor">登録</button>
    </div>

    <hr>

    <div class="today-drunk-quick-form__templates">
      <button v-for="liquorTemplate in liquorTemplates" @click="$emit('record-drunk', liquorTemplate)">
        {{liquorTemplate.name}}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import {Liquor} from "~/model/liquor";

export default defineComponent({
  name: "TodayDrunkQuickForm",
  setup(): {
    liquorTemplates: Array<Liquor>
  } {
    return {
      liquorTemplates: [
        {
          name: "ビール",
          quantity: 350,
          alcohol: {
            quantity: 17.5,
            rate: 5
          },
        },
        {
          name: "ストロングチューハイ",
          quantity: 350,
          alcohol: {
            quantity: 31.5,
            rate: 9,
          }
        },
        {
          name: "角ハイボール",
          quantity: 350,
          sources: [{
            drink: {
              name: "角瓶",
              rate: 40,
              type: "hard"
            },
            quantity: 70
          }, {
            drink: {
              name: "ソーダ",
              type: "soft"
            },
            quantity: 200
          }, {
            type: "ice",
            amount: "山盛り"
          }],
          memo: "参考: https://www.suntory.co.jp/whisky/kakubin/kakuhigh/index.html"
        }
      ],

    }
  },
  data() {
    return {
      localLiquor: {
        quantity: 0,
        alcohol: {
          rate: 0,
          quantity: 0
        }
      } as Liquor
    }
  },
  methods: {
    handleRecordDrunkLiquor() {
      this.$emit('record-drunk', {
        ...this.localLiquor
      } as Liquor)
    },
    calculateAlcoholQuantity(){
      if (this.localLiquor && this.localLiquor.alcohol && this.localLiquor.quantity) {
        this.localLiquor.alcohol.quantity = this.localLiquor.quantity * (this.localLiquor.alcohol.rate / 100)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.today-drunk-quick-form{
  &__basic-form{
    display: flex;
    flex-direction: column;
  }
}
</style>
