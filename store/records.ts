import {GetterTree, ActionTree, MutationTree} from 'vuex'
import {LiquorRecord} from "~/model/liquorRecord";
import {WaterRecord} from "~/model/waterRecord";
import {v4 as uuidv4} from "uuid";
import {Liquor} from "~/model/liquor";
import dayjs from 'dayjs'

export const state = () => ({
  records: [] as (LiquorRecord | WaterRecord)[]
})

export interface recordQueryPayload {
  betweenNow?: {
    // TODO: 今のところ、上から順に適用されるけどいい感じにやりたいよね
    day?: number
    hour?: number
  }
}

export type RootState = ReturnType<typeof state>

type dayjsType = typeof dayjs

export const getters: GetterTree<RootState, RootState> = {
  allRecords: state => state.records,
  liquorRecords: ({records}): LiquorRecord[] => {
    return records.filter((record): record is LiquorRecord => record.type === "liquor")
  },
  waterRecords: ({records}): WaterRecord[] => {
    return records.filter((record): record is WaterRecord => record.type === "water")
  },
  queryLiquorRecords: (_, getters) => (payload: recordQueryPayload, dayjs: dayjsType): LiquorRecord[] => {
    let before: dayjs.Dayjs;
    if (payload.betweenNow?.day) {
      before = dayjs().subtract(payload.betweenNow.day, 'day');
    } else if (payload.betweenNow?.hour) {
      before = dayjs().subtract(payload.betweenNow.hour, 'hour');
    } else {
      return [];
    }

    // 人生の終わりみたいなanyが見えたのでお気持ちasです(怪文書？)
    return (getters.liquorRecords as LiquorRecord[]).filter(({date}) => {
      return dayjs.unix(date).isAfter(before)
    })
  }
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
  },
}

