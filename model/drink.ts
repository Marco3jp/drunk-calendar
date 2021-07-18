import {alcoholByVolume} from "~/model/baseType";

export type Drink = SoftDrink | HardDrink

export interface SoftDrink {
  "id"?: string
  "type": "soft"
  "name"?: string
}

export interface HardDrink {
  "id"?: string
  "type": "hard"
  "name"?: string
  "rate"?: alcoholByVolume
}
