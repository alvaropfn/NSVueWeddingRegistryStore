<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <StackLayout>
      
      <Label class="info" horizontalAlignment="center" verticalAlignment="center">
        <FormattedString>
          <Span class="fa" text.decode="&#xf135; "/>
          <Span :text="wallet"/>
        </FormattedString>
      </Label>
      <Button text="doStuff" @tap="doStuff" />
      
      <ListView for="product in products" @itemTap="tapProduct">
        <v-template>
          <!-- Shows the list item label in the default color and style. -->
          <DockLayout stretchLastChild="true"  height="140" >
            <Image dock="top" height="150" width="150" :src="product.image" @tap="showDescription(product.description)" />
            
            <Label class="info" horizontalAlignment="center" verticalAlignment="center" :text="product.name" dock="top" height="30"/>

            <TextView  dock="left" editable="false">
              <FormattedString>
                <Span text="$" color="green" marginLeft="5"/>
                <Span :text="product.price"/>
              </FormattedString>
            </TextView>
          <Span class="fa" text.decode="&#xf135; "/>
          <Span :text="message"/>
        </FormattedString>
            <Button text="add" dock="right" width="60" @tap="addToCart(product)"/>
            
          </DockLayout>
        </v-template>
      </ListView>
      
      
    </StackLayout>
  </Page>
</template>

<script>
  const Toast = require('nativescript-toast')
  const ProductDetail = {
    props: ["productDescription"],
    template: `
      <Frame>
        <Page>
          <ActionBar title="Description"/>
          <StackLayout>
            <TextView :text="productDescription" editable="false"/>
            <Button @tap="$modal.close" text="Close" />
          </StackLayout>
        </Page>
      </Frame>
    ` 
  }
  export default {
    data() {
      return {
        wallet : 1000.00,
        cart   : [],
        inStock: false,
        products:[
          {
            "id"          :"0",
            "name"        :"Cups",
            "image"       :"~/src/images/cup.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon.",
            "price"       :"1123"
          },
          {
            "id"          :"1",
            "name"        :"Eletric",
            "image"       :"~/src/images/eletric.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"567"
          },
          {
            "id"          :"2",
            "name"        :"Pots",
            "image"       :"~/src/images/pot.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"789"
          },
          {
            "id"          :"3",
            "name"        :"Stove",
            "image"       :"~/src/images/stove.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"123"
          },
          {
            "id"          :"4",
            "name"        :"Tea",
            "image"       :"~/src/images/tea.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"567"
          },
          {
            "id"          :"5",
            "name"        :"Bed",
            "image"       :"~/src/images/bed.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"789"
          },
          {
            "id"          :"6",
            "name"        :"Refrigarator",
            "image"       :"~/src/images/refrigerator.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"789"
          },
          {
            "id"          :"7",
            "name"        :"Wardrobe",
            "image"       :"~/src/images/wardrobe.jpg",
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
        console.log(this.cart.length)
        for(let i = 0; i < this.cart.length; i++){
          console.log(this.cart[i].name)
        }
      },
      showDescription(description){
        this.$showModal(ProductDetail, {props:{productDescription: description}})
      },
      showToast(msg){
        const toast = Toast.makeText(msg, "medium")
        toast.show()
      },
      productAlreadyInCart(id){
        for(let i = 0; i < this.cart.length; i++){
          if(this.cart[i].id == id) return true
        }
        return false
      },
      addToCart(p){
        if(this.productAlreadyInCart(p.id)){
          this.showToast("product already in cart")
          console.log("product already in cart")
        } else{
          this.cart.push(p)
        }
        // console.log(this.productAlreadyInCart(p.id))
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
