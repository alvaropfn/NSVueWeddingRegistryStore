import Vue from "nativescript-vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        firstname: "",
        lastname: ""
    },
    mutations: {
        save(state, data) {
            state.firstname = data.firstname;
            state.lastname = data.lastname;
        }
    }
});

Vue.prototype.$store = store;

module.exports = store;