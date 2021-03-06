export type notLiquid = garnish | ice

export interface garnish {
  "id"?: string
  "type": "garnish"
  "name"?: string
  "amount"?: string | number // 個数の場合もあるのでstring許容
}

export interface ice {
  "id"?: string
  "type": "ice"
  "name"?: string
  "countingWaterRate"?: number
  "amount"?: string | number // 雑に書いてもいいようにstring許容
}
