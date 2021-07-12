import {alcoholByVolume} from "~/model/baseType";

export type Drink = SoftDrink | HardDrink

export interface SoftDrink {
  "id"?: string
  "name"?: string
}

export interface HardDrink {
  "id"?: string
  "name"?: string
  "rate"?: alcoholByVolume
}
