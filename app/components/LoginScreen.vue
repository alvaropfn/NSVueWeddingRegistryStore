<template>
  <Page>
    <StackLayout>
      <TextField class="textfield-login" text="" v-model="inputName" :hint="name_hint" autocorrect="false" keyboardType=""/>
      <TextField class="textfield-login" text="" v-model="inputEmail" :hint="email_hint" autocorrect="false" keyboardType="email"/>
      <TextField class="textfield-login" text="" v-model="inputPass" :hint="pass_hint" autocorrect="false" secure="true"/>
      <Button class="input__btn input__btn--confirm" @tap="validateInputs" text="Confirm" />
      <Button class="input__btn input__btn--cancel" @tap="cancelInputs" text="Cancel" />
    </StackLayout>
  </Page>
</template>

<script>
  import HomeScreen from "~/components/HomeScreen";
  const ModalError = {
    props: ["errorList"],
    template: `
      <Frame>
        <Page>
          <ActionBar title="Detail"/>
          <StackLayout>
            <ListView for="message in errorList" >
              <v-template>
                <TextView :text="message" editable="false"/>
              </v-template>
            </ListView>
            <Button @tap="$modal.close" text="Close" />
          </StackLayout>
        </Page>
      </Frame>
    ` 
  }
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
      validEmail(){
        
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/.test(this.inputEmail)
      },
      validPass(){
        
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(this.inputPass)
      },
      validateInputs(){
        let modalMessages = []
        let validated = true
        if(!this.validName()){
          validated = false
          modalMessages.push("Name should have 4 or more characters")
        }
        if(!this.validEmail()){
          validated = false
          modalMessages.push("Email should has a valid domain")
        }
        if(!this.validPass()){
          validated = false
          modalMessages.push("Password should contain mininum length of 6 and at last a capital charactar and a number")
        }

        if(validated)
          this.$navigateTo(HomeScreen);
        else
          this.$showModal(ModalError,{props:{errorList: modalMessages}});
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