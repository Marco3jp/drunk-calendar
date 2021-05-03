import {Liquor} from "~/model/liquor";

export interface LiquorRecord {
  "id": string // uuid
  "date": number // unix time = Math.round(Date.now() / 1000)
  "liquor": Liquor
  "memo"?: string
}
