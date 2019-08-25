import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import * as actions from './actions'

Vue.use(Vuex)

const state = {
    allItems: [],
    currentItem: {}
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})