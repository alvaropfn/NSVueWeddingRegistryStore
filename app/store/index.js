import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        wallet = 1000,
        cart= []
    },
    mutations: {
        addToCart(state, data) {
            state.cart = data.cart;
            
        }
    }
});

Vue.prototype.$store = store;

module.exports = store;