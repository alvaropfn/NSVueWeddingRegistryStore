import Vue from "nativescript-vue";

import LoginScreen from "./components/LoginScreen";


new Vue({
    template: `
        <Frame>
            <LoginScreen />
        </Frame>
        `,
    components:{
        LoginScreen,
    }
}).$start();
