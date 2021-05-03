export interface Liquor {
  "name"?: string
  "baseAlcoholPercent"?: number // 自分で割ったときのベースアルコール度数
  "baseAlcoholMilliliter"?: number // 自分で割ったときのベースアルコール量
  "totalDrinkMilliliter"?: number // 自分で割ったりしたときの総量
  "ethanolMilliliter": number // エタノールの量（混ぜた際の化学反応等は考慮しない）
}
