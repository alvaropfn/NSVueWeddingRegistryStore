<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <DockLayout >
        <Label dock="left" class="action-bar-title"  text="Wedding Store"></Label>
        <Label dock="right" width="50" :text="this.wallet"></Label>
        <Label dock="right" width="50" text="$"></Label>
      </DockLayout>
    </ActionBar>

    <GridLayout rows="*,80" columns="*,80" >
      
      <ListView row="0" col="0" rowSpan="3" colSpan="2" for="product in products" @itemTap="tapProduct">
        <v-template>
          <DockLayout stretchLastChild="true"  height="140" >
            <Image dock="top" horizontalAlignment="center" height="150" width="150" :src="product.image" @tap="showDescription(product.description)" />
            
            <Label class="info" horizontalAlignment="center" verticalAlignment="center" :text="product.name" dock="top" height="30"/>

            <TextView  dock="left" width="130" editable="false">
              <FormattedString>
                <Span text="$" color="$secundary" marginLeft="5"/>
                <Span :text="product.price"/>
              </FormattedString>
            </TextView>

            <TextView  dock="left" width="80" editable="false">
              <FormattedString>
                <Span text="Qtd: " color="$secundary" marginLeft="5"/>
                <Span :text="product.quantity"/>
              </FormattedString>
            </TextView>
            
            <Button 
              text="Add to Cart"
              dock="right"
              width="100"
              :isEnabled="true"
              @tap="addToCart(product)"
              
            />
            
          </DockLayout>
        </v-template>

      </ListView>

       <Fab  @tap="goToCart"
				row="2" col="1"
        height="50" width="50"
				rippleColor="#f1100"
				class=""></Fab>
        <ScrollView orientation="horizontal" row="2" col="0" width="auto" height="80" backgroundColor="rgba(255,255,255,0.0)">
          <Label text="TODO tumbnails of itens in the cart"/>
        </ScrollView>
    </GridLayout>
  </Page>
</template>

<script>
  import CartScreen from "~/components/CartScreen";
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
            "price"       :"123",
            "quantity"    :"1"
          },
          {
            "id"          :"1",
            "name"        :"Eletric",
            "image"       :"~/src/images/eletric.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"567",
            "quantity"    :"7"
          },
          {
            "id"          :"2",
            "name"        :"Pots",
            "image"       :"~/src/images/pot.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"789",
            "quantity"    :"9"
          },
          {
            "id"          :"3",
            "name"        :"Stove",
            "image"       :"~/src/images/stove.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"123",
            "quantity"    :"8"
          },
          {
            "id"          :"4",
            "name"        :"Tea",
            "image"       :"~/src/images/tea.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"567",
            "quantity"    :"10"
          },
          {
            "id"          :"5",
            "name"        :"Bed",
            "image"       :"~/src/images/bed.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"789",
            "quantity"    :"3"
          },
          {
            "id"          :"6",
            "name"        :"Refrigarator",
            "image"       :"~/src/images/refrigerator.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"789",
            "quantity"    :"5"
          },
          {
            "id"          :"7",
            "name"        :"Wardrobe",
            "image"       :"~/src/images/wardrobe.jpg",
            "description" :"Bacon ipsum dolor amet filet mignon bacon ball tip, burgdoggen short ribs porchetta prosciutto t-bone tongue. Chuck alcatra picanha, cupim kevin leberkas beef biltong beef ribs corned beef meatball buffalo shoulder pig cow.",
            "price"       :"789",
            "quantity"    :"2"
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
      goToCart(){
        
        if(this.cart.length <=0 ){
          this.showToast("Add at least an item in the cart")
          console.log("Add at least an item in the cart")
        }
        else{
          this.$navigateTo(
            CartScreen, {
              props: {products: this.cart}
          });
        }
        
      },
      addToCart(p){
        if(this.productAlreadyInCart(p.id)){
          this.showToast("product already in cart")
          console.log("product already in cart")
        } else{
          if(p.price < this.wallet && p.quantity >= 1){
            this.cart.push(p)
            this.wallet -= p.price
            p.quantity -= 1
          }
          else{
            this.showToast("Not enoght cash")
            console.log("Not enoght cash")
          }
        }
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

  .disabled{
    disabled: true;
  }
</style>
