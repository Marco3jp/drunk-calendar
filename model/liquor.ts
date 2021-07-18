import {LiquorSource} from "~/model/liquorSource";
import {notLiquid} from "~/model/notLiquid";
import {alcoholByVolume, liquidQuantityMilliLitter} from "~/model/baseType";

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
