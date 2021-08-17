import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: "drunkCalendar",
    paths: [
      "records.records"
    ]
  })(store)
}
