import {BaseRecord} from "./baseRecord.ts";
import {Liquor} from "./liquor.ts";

export interface LiquorRecord extends BaseRecord{
  "liquor": Liquor
  "type": "liquor"
}
