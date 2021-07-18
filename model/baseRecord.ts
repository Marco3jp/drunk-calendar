import {DrunkLocation} from "~/model/drunkLocation";

export interface BaseRecord {
  "id": string // uuid
  "date": number // unix time = Math.round(Date.now() / 1000)
  "memo"?: string
  "drunkLocation"?: DrunkLocation // LiquorRecordに置くか微妙に迷ったけど、waterRecordが持ちたいこともあるのでこっちにした
}
