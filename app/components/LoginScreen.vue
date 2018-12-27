<template>
  <Page>
    <StackLayout>
      <TextField id="name" class="textfield-login" text="" v-model="inputName" :hint="name_hint" autocorrect="false" keyboardType=""/>
      <TextField id="email" class="textfield-login" text="" v-model="inputEmail" :hint="email_hint" autocorrect="false" keyboardType="email"/>
      <TextField id="pass" class="textfield-login" text="" v-model="inputPass" :hint="pass_hint" autocorrect="false" secure="true"/>
      <Button class="input__btn input__btn--confirm" @tap="validateInputs" text="Confirm" />
      <Button class="input__btn input__btn--cancel" @tap="cancelInputs" text="Cancel" />
    </StackLayout>
  </Page>
</template>

<script>
  import HomeScreen from "~/components/HomeScreen";

  export default {
    
    data() {
      return {
        
      }
    },
    computed: {
      name_hint() {
        return "Your Name";
      },
      email_hint() {
        return "Your Email";
      },
      pass_hint() {
        return "Your Password";
      }
    },

    methods: {
      validName(){
        return /^([a-zA-Z]){4,}/.test(this.inputName);
      },
      validMail(){
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(this.inputEmail)
      },
      validPass(){
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(this.inputPass)
      },
      validateInputs(){
        if(!this.validName()){
          console.log("invalid Name")
        }
        if(!this.validEmail()){
          console.log("invalid Email")
        }
        if(!this.validPass()){
          console.log("invalid Pass")
        }
        this.$navigateTo(HomeScreen);
        
      },
      cancelInputs(){
        console.log("TODO: canceling")
        
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../app-variables';
  .textfield-login{
    
  }

  .input__btn{
    color: #FFFFFF;
    
  }
  
  .input__btn--confirm{
    color: $secondary;
    background: $primary;
  }

  .input__btn--cancel{
    background: $error-light;
  }
</style>