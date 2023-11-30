import {BaseRecord} from "./baseRecord.ts";
import {liquidQuantityMilliLitter} from "./baseType.ts";

export interface WaterRecord extends BaseRecord{
  "water"?: {
    "quantity": liquidQuantityMilliLitter
  }
  "type": "water"
}
