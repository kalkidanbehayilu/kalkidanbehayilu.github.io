import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      theme: localStorage.getItem("theme"),
    };
  },
  mutations: {
    toggleTheme(state, newTheme) {
      state.theme = newTheme;
    },
  },
  actions: {
    changeTheme({ commit }, newTheme) {
      localStorage.setItem("theme", newTheme);
      commit("toggleTheme", newTheme);
    },
  },
});

export default store;
