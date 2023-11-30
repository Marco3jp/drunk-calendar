type DrunkLocationNemadType = "home" | "restaurant"

export interface DrunkLocation {
  "id"?: string // uuid
  "name"?: string
  "locationType"?: DrunkLocationNemadType | string // 家とか外食みたいなものと、それ以外の自由記述を混ぜるスタイル。Typeだと甘いので固めに命名
}
