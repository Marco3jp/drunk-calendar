import {Liquor} from "~/model/liquor";
import {BaseRecord} from "~/model/baseRecord";

export interface LiquorRecord extends BaseRecord{
  "liquor": Liquor
}
