import {Liquor} from "./liquor.ts";

export interface Setting {
  dayBorderTime?: number // default = 21600 (= 60sec * 60min * 6hour) = 6:00am)
  disableDefaultLiquorTemplate?: boolean // default = false
  liquorTemplates?: Array<Liquor> // default = []
}
