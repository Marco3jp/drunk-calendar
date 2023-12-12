import {alcoholByVolume, liquidVolumeMilliLitter} from "./baseType.ts";

export type Drink = {
  id?: string
  name?: string
  volumeMilliliter?: liquidVolumeMilliLitter
  alcoholByVolume?: alcoholByVolume

  // カクテルなどを表現するために使えるように
  // ただし無限にネストしてしまうので、あるDrinkの原料が一つ（ex: ビールや日本酒）になる場合は使わない
  sources?: Drink[]
}
