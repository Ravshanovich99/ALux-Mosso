import { createStore } from 'vuex'

export default createStore({
  state: {
    selectedTypes: [],
    selectedCities: [],
    selectedDistricts: [],
    selectedStructures: [],
    ids: [],

    startingPrice: null,
    endingPrice: null,
    startArea: null,
    endArea: null,

    startYear: null,
    endYear: null,
    identifier: null,

    currency: 'price_euro',

    isReady: 0,
    isPrimary: 0,
    isSecondary: 0,

    categoriesId: null,
    typeBtn: null,

    language: 'ru'
  },
  getters: {
  },
  mutations: {
    RESET_STATE(state) {
      state.typeBtn = null,
        state.selectedTypes = [],
        state.selectedCities = [],
        state.selectedDistricts = [],
        state.selectedStructures = [],
        state.ids = [],

        state.startingPrice = null,
        state.endingPrice = null,
        state.startArea = null,
        state.endArea = null,

        state.startYear = null,
        state.endYear = null,
        state.identifier = null,

        state.currency = 'price_euro',

        state.isReady = 0,
        state.isPrimary = 0,
        state.isSecondary = 0,

        state.categoriesId = null
    }
  },
  actions: {
    resetState({ commit }) {
      commit('RESET_STATE')
    }
  },
  modules: {
  }
})
