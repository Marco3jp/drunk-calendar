export interface WaterRecord {
  "id": string // uuid
  "date": number // unix time = Math.round(Date.now() / 1000)
  "water": {
    "totalDrinkMilliliter": number
  }
  "memo"?: string
}
