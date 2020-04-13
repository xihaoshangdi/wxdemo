import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      sideSelect:undefined,
    },
    mutations: {
      updateSelect(state,data){
        state.sideSelect=data;
      }
    },
    actions: {},
    modules: {}
});
