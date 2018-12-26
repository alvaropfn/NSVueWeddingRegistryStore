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
      <Button text="doStuff" @tap="doStuff" />
      <ListView for="product in products" @itemTap="tapProduct">
        <v-template>
          <!-- Shows the list item label in the default color and style. -->
          <DockLayout stretchLastChild="true"  height="140" >
            <Image dock="left" height="150" width="150" :src="product.image"  />
            
            <Label :text="product.name" dock="top" height="40" backgroundColor="#289062"/>
            <Label text="add" dock="right" width="40" backgroundColor="#43b883"/>
            <Label :text="product.description" dock="bottom" backgroundColor="#1c6b48"/>
          </DockLayout>
        </v-template>
      </ListView>
      
      
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
              "price"       :"567"
            },
            {
              "name"        :"Bacon",
              "image"       :"https://via.placeholder.com/150/004400/FFFFAA/?text=BaconProduct",
              "description" :"Lorem Ipsun Bacon",
              "price"       :"789"
            },{
              "name"        :"Lorem",
              "image"       :"https://via.placeholder.com/150x80/1F0000/FFFFFF/?text=LoremProduct",
              "description" :"Lorem Ipsun Bacon",
              "price"       :"123"
            },
            {
              "name"        :"Ipsun",
              "image"       :"https://via.placeholder.com/150/101066/FFAAFF/?text=IpsunProduct",
              "description" :"Lorem Ipsun Bacon",
              "price"       :"567"
            },
            {
              "name"        :"Bacon",
              "image"       :"https://via.placeholder.com/150/004488/FFFFAA/?text=BaconProduct",
              "description" :"Lorem Ipsun Bacon",
              "price"       :"789"
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
          console.log(this.products)
        },
        tapProduct(e){
          console.log('Item Event')
          // console.log(e)
        }
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
