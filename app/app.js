import Vue from "nativescript-vue";

import LoginScreen from "./components/LoginScreen";
import HomeScreen from "~/components/HomeScreen";

new Vue({
    template: `
        <Frame>
             <HomeScreen /> 
             <!-- <LoginScreen />-->
        </Frame>
        `,
    components:{
        LoginScreen,
        HomeScreen
    }
}).$start();


