import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        order: {},
        role: 1,
    },
    mutations: {
        setState (state,data) {
            state[data.key] = data.value
        }
    }
})
export default store