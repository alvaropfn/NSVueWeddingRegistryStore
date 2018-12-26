<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <StackLayout>
      
      <Label class="info" horizontalAlignment="center" verticalAlignment="center">
        <FormattedString>
          <Span class="fa" text.decode="&#xf135; "/>
          <Span :text="message"/>
        </FormattedString>
      </Label>

      <Button text="loginExternal" @tap="doStuff" />
      
    </StackLayout>
  </Page>
</template>

<script>
  
    export default {
      data() {
        return {
          inStock: false,
          products:[
            {
              "name"        :"Lorem",
              "image"       :"https://via.placeholder.com/150x80/000000/FFFFFF/?text=LoremProduct",
              "description" :"Lorem Ipsun Bacon",
              "price"       :"123"
            },
            {
              "name"        :"Ipsun",
              "image"       :"https://via.placeholder.com/150/000066/FFAAFF/?text=IpsunProduct",
              "description" :"Lorem Ipsun Bacon",
              "price"       :"123"
            },
            {
              "name"        :"Bacon",
              "image"       :"https://via.placeholder.com/150/004400/FFFFAA/?text=BaconProduct",
              "description" :"Lorem Ipsun Bacon",
              "price"       :"123"
            }
          ]
        }
      },
      computed: {
        message() {
          return "Blank {N}-Vue app";
        }
      },
      methods: {
        doStuff(){
          console.log(`doing: ${this.products[0]}`)
          
        },
      },
  };

</script>

<style scoped lang="scss">
  // Start custom common variables
  @import '../app-variables';
  // End custom common variables

  // Custom styles
  .fa {
    color: $accent-dark;
  }

  .info {
    font-size: 20;
  }
</style>
