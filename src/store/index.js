import Vue from "vue";
import Vuex from "vuex";

//modules
import CardsHome from "./modules/cards-home";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardsLocais: CardsHome.state.cardsLocais
  },
  getters: {
    cardsLocais: state => {
      return state.cardsLocais;
    }
  },
  actions: {},
  modules: {}
});
