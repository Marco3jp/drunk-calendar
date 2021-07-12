import {BaseRecord} from "~/model/baseRecord";
import {liquidQuantityMilliLitter} from "~/model/baseType";

export interface WaterRecord extends BaseRecord{
  "water"?: {
    "quantity": liquidQuantityMilliLitter
  }
}
