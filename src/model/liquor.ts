import {alcoholByVolume, liquidQuantityMilliLitter} from "./baseType.ts";
import {LiquorSource} from "./liquorSource.ts";
import {notLiquid} from "./notLiquid.ts";

export interface Liquor {
  "id"?: string // uuid
  "name"?: string
  "quantity"?: liquidQuantityMilliLitter
  "sources"?: Array<LiquorSource | notLiquid>
  "alcohol"?: {
    "rate": alcoholByVolume
    "quantity": liquidQuantityMilliLitter
  }
  "memo"?: string
}
