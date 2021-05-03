import {Liquor} from "~/model/liquor";

export interface Setting {
  dayBorderTime: number // default = 30 (6:00am)
  disableDefaultLiquorTemplate: boolean // default = false
  liquorTemplates: Array<Liquor> // default = []
}
