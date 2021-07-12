import {Drink} from "~/model/drink";
import {liquidQuantityMilliLitter} from "~/model/baseType";

export interface LiquorSource {
  drink: Drink
  quantity?: liquidQuantityMilliLitter
}
