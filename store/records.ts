import {GetterTree, ActionTree, MutationTree} from 'vuex'
import {LiquorRecord} from "~/model/liquorRecord";
import {WaterRecord} from "~/model/waterRecord";
import {v4 as uuidv4} from "uuid";
import {Liquor} from "~/model/liquor";


export const state = () => ({
  records: [] as (LiquorRecord | WaterRecord)[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  allRecords: state => state.records,
  liquorRecords: state => state.records.filter(({type}) => type === "liquor"),
  waterRecords: state => state.records.filter(({type}) => type === "water")
}

export const mutations: MutationTree<RootState> = {
  addRecord: (state, payload: LiquorRecord | WaterRecord) => state.records.push(payload)
}

export const actions: ActionTree<RootState, RootState> = {
  recordLiquor({commit}, payload: Liquor) {
    commit('addRecord', {
      id: uuidv4(),
      type: "liquor",
      date: Math.round(Date.now() / 1000),
      liquor: {
        ...payload,
        id: uuidv4()
      },
    })
  },
  recordWater({commit}, payload: number) {
    commit('addRecord', {
      id: uuidv4(),
      type: "water",
      date: Math.round(Date.now() / 1000),
      water: {
        quantity: payload
      },
    })
  }
}

