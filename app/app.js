import Vue from "nativescript-vue";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "~/components/HomeScreen";
//import store from "./src/store/" // TODO solve why its broke

Vue.registerElement('Fab', ()=> require('nativescript-floatingactionbutton').Fab)

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




