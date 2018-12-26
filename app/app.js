import Vue from "nativescript-vue";

import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen";
import CartScreen from "./components/CartScreen";

new Vue({

    template: `
        <Frame>
            <HomeScreen />
        <!--<LoginScreen />-->
        <!--<CartScreen />-->
        </Frame>`,

    components: {
        HomeScreen,
        LoginScreen,
        CartScreen,
    }
}).$start();
