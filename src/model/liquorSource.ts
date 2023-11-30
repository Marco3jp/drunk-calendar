import {Drink} from "./drink.ts";
import {liquidQuantityMilliLitter} from "./baseType.ts";

export interface LiquorSource {
  drink: Drink
  quantity?: liquidQuantityMilliLitter
}
