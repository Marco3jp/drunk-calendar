<template>
  <div class="today-drunk-quick-form">
    <form class="today-drunk-quick-form__basic-form basic-form" ref="basicForm">
      <div class="basic-form__alcohol-rate">
        <label>
          <span>酒の度数(%)</span>
          <input type="number" v-model="localLiquor.alcohol.rate"
                 @input="calculateAlcoholQuantity">
        </label>
        <p> {{ alcoholRateErrorMessage }} </p>
      </div>

      <div class="basic-form__quantity">
        <label>
          <span>酒の量(ml)</span>
          <input type="number" step="10" min="0" v-model="localLiquor.quantity"
                 @input="calculateAlcoholQuantity" ref="quantityInput">
        </label>
        <p>{{ quantityErrorMessage }}</p>
      </div>

      <div class="basic-form__alcohol-quantity">
        <label>
          <span>アルコール量(ml)</span>
          <input type="number" min="0" v-model="localLiquor.alcohol.quantity">
        </label>
        <p>{{ alcoholQuantityErrorMessage }}</p>
      </div>

      <button class="basic-form__record-button" type="button" :disabled="!isValidForm" @click="handleRecordDrunkLiquor">
        登録
      </button>
    </form>

    <!--div class="today-drunk-quick-form__templates">
      <button v-for="liquorTemplate in liquorTemplates" @click="$emit('record-drunk', liquorTemplate)">
        {{liquorTemplate.name}}
      </button>
    </div-->
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@nuxtjs/composition-api'
import {Liquor} from "~/model/liquor";

export default defineComponent({
  name: "TodayDrunkQuickForm",
  data() {
    return {
      localLiquor: {
        quantity: "0",
        alcohol: {
          rate: "0",
          quantity: "0"
        }
      },
      resultMessage: ""
    }
  },
  computed: {
    alcoholRateErrorMessage(): string | undefined {
      const v = Number(this.localLiquor.alcohol.rate)

      if (this.localLiquor.alcohol.rate === "" || isNaN(v)) {
        return "数字として扱えません"
      } else if (v < 0 || v > 100) {
        return "0~100で入力してください"
      }
    },
    alcoholQuantityErrorMessage(): string | undefined {
      const v = Number(this.localLiquor.alcohol.quantity)

      if (this.localLiquor.alcohol.quantity === "" || isNaN(v)) {
        return "数字として扱えません"
      } else if (v < 0) {
        return "0~で入力してください"
      }
    },
    quantityErrorMessage(): string | undefined {
      const v = Number(this.localLiquor.quantity);
      if (this.localLiquor.quantity === "" || isNaN(v)) {
        return "数字として扱えません"
      } else if (v <= 0) {
        return "1~で入力してください"
      }
    },
    isValidForm() {
      return !this.alcoholRateErrorMessage && !this.alcoholQuantityErrorMessage && !this.quantityErrorMessage
    }
  },
  methods: {
    handleRecordDrunkLiquor() {
      this.$emit('record-drunk', {
        quantity: parseInt(this.localLiquor.quantity),
        alcohol: {
          rate: parseFloat(this.localLiquor.alcohol.rate),
          quantity: parseInt(this.localLiquor.alcohol.quantity)
        }
      } as Liquor)

      this.resetForm();
    },
    calculateAlcoholQuantity() {
      if (this.isValidForm) {
        this.localLiquor.alcohol.quantity = (Number(this.localLiquor.quantity) * (Number(this.localLiquor.alcohol.rate) / 100)).toString()
      }
    },
    resetForm() {
      this.localLiquor = {
        quantity: "0",
        alcohol: {
          rate: "0",
          quantity: "0"
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">
.today-drunk-quick-form {
  &__basic-form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__templates {
    margin-top: 16px;
  }
}

.basic-form {
  &__alcohol-rate, &__quantity, &__alcohol-quantity {
    label {
      height: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        height: 100%;
        width: 65%;
        font-size: 2rem;
      }
    }

    p {
      height: 20px;
      line-height: 20px;
    }
  }

  &__record-button {
    margin-top: 12px;
    height: 50px;
  }
}
</style>
