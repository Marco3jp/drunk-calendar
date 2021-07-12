import {DrunkLocation} from "~/model/drunkLocation";

export interface BaseRecord {
  "id": string // uuid
  "date": number // unix time = Math.round(Date.now() / 1000)
  "memo"?: string
  "drunkLocation"?: DrunkLocation // 微妙に迷った
}
