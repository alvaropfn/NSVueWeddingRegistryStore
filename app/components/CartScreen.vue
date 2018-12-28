<template>
  <Page>
    <StackLayout>
      <Label text="sucess"/>
      <TextField text="input" hint="Enter text..." />
      <Button @tap="doPaiment" text="proceed paiment" />
      <Button @tap="$navigateBack" text="back" />
    </StackLayout>
  </Page>
</template>

<script>
  const Toast = require('nativescript-toast')
  props:["products"]

  export default {
    data() {
      return {
        
      }
    },
    methods: {
      showToast(msg){
        const toast = Toast.makeText(msg, "medium")
        toast.show()
      },
      doPaiment(){
        this.products ? this.showToast('sucess'): this.showToast('failure')
      }
    },
    
  }
</script>

<style scoped lang="scss">
  @import '../app-variables';
</style>