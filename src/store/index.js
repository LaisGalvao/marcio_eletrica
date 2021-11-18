import Vue from "vue";
import Vuex from "vuex";


//modules
import Images from "./modules/images";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    image: Images.state.images
  },
  getters: {
    images: (state) => {
      return state.image
    }
  },
  actions: {

  },
  modules: {
    Images: Images
  }
});
