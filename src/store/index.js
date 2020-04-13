import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      sideSelect:0,
    },
    mutations: {
      updateSelect(state,data){
        state.sideSelect=data;
      }
    },
    actions: {},
    modules: {}
});
