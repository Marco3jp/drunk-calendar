import {DrunkLocation} from "./drunkLocation.ts";
import {Drink} from "./drink.ts";

export interface Record {
  "id": string // uuid
  "date": number // unix time = Math.round(Date.now() / 1000)
  "memo"?: string
  "drunkLocation"?: DrunkLocation // LiquorRecordに置くか微妙に迷ったけど、waterRecordが持ちたいこともあるのでこっちにした
  "item": Drink // 将来的には液体以外も持つかも
}
