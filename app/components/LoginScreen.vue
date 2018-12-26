<template>
  <Page>
    <StackLayout>
      <TextField class="textfield-login" text="" :hint="name_hint" autocorrect="false" keyboardType=""/>
      <TextField class="textfield-login" text="" :hint="email_hint" autocorrect="false" keyboardType="email"/>
      <TextField class="textfield-login" text="" :hint="pass_hint" autocorrect="false" secure="true"/>
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
      validateInputs(){
        console.log("TODO: validating")
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