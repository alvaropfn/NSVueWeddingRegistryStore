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
        <!--<v-template>
          <DockLayout stretchLastChild="true"  height="140" >
            <Image dock="left" height="150" width="150" :src="product.image"  />
            
            <Label :text="product.name" dock="top" height="20"/>
            <Button text="add" dock="right" width="60" @tap="addToCart(product)"/>
            <TextView :text="product.description" dock="bottom" editable="false"/>
          </DockLayout>
        </v-template>-->
        <v-template>
          <!-- Shows the list item label in the default color and style. -->
          <DockLayout stretchLastChild="true"  height="140" >
            <Image dock="top" height="150" width="150" :src="product.image" @tap="showDescription(product.description)" />
            
            <Label :text="product.name" dock="top" height="20"/>
            <TextView :text="product.price" dock="left" editable="false"/>
            <Button text="add" dock="right" width="60" @tap="addToCart(product)"/>
            
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
              "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
              "price"       :"123"
            },
            {
              "name"        :"Ipsun",
              "image"       :"https://via.placeholder.com/150/000066/FFAAFF/?text=IpsunProduct",
              "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
              "price"       :"567"
            },
            {
              "name"        :"Bacon",
              "image"       :"https://via.placeholder.com/150/004400/FFFFAA/?text=BaconProduct",
              "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
              "price"       :"789"
            },{
              "name"        :"Lorem",
              "image"       :"https://via.placeholder.com/150x80/1F0000/FFFFFF/?text=LoremProduct",
              "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
              "price"       :"123"
            },
            {
              "name"        :"Ipsun",
              "image"       :"https://via.placeholder.com/150/101066/FFAAFF/?text=IpsunProduct",
              "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
              "price"       :"567"
            },
            {
              "name"        :"Bacon",
              "image"       :"https://via.placeholder.com/150/004488/FFFFAA/?text=BaconProduct",
              "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
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
        showDescription(description){
          console.log(description)
        },
        tapProduct(e){
          console.log('Item Event')
          // console.log(e)
        },
        addToCart(p){
          console.log(p.name)
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
