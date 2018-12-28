<template>
	<Page class="page">
		<ActionBar>
      <DockLayout>
        <Button dock="left" class="btn btn-primary" text="back" @tap="logout"></Button>
        <StackLayout>
          <Label text="Wedding Companion Store"/>
          <Label :text="wallet"/>
        </StackLayout>
        <Button dock="right" class="btn btn-primary" text="cart" @tap="goToCart"></Button>
      </DockLayout >
    </ActionBar>

		<!-- The [columns] bit here makes this app a two-column layout on tablets, and a one-column layout on phones -->
		<GridLayout :columns="isTablet ? '*, 2*' : '*'">
			<GridLayout col="0" class="left-column">

				<!-- The ListView shows on both tablets and phones. On tablets the list occupies the left-hand side
	          of the screen, and one phones the ListView takes up the whole screen. -->
				<ListView class="list-group" for="item in products" > <!--@itemTap="select"-->
					<v-template>
						<StackLayout class="list-group-item">
							<Image :src="item.src" class="thumb"  @tap="showDetails(item)" ></Image>
              <DockLayout  width="320">
                <Label class="item__title" dock="left"  :text="item.name"></Label>
                <TextView dock="rigth" width="100" editable="false">
                  <FormattedString  >
                      <Span text="quantity:" />
                      <Span :text="item.quantity"/>
                  </FormattedString>
                </TextView>
              </DockLayout>
              <DockLayout  width="320">
                <TextView dock="left" width="100" editable="false">
                  <FormattedString  >
                      <Span text="price:" />
                      <Span :text="item.price"/>
                  </FormattedString>
                </TextView>
                <Button class="btn btn-primary" dock="rigth" text="Add" width="100"  @tap="addToCart(item)"></Button>
              </DockLayout>

						</StackLayout>

					</v-template>
				</ListView>
			</GridLayout>

			<!-- The markup below is duplicated in the DetailPage. You might want to abstract this bit
	        of code into a shared component, or you may wish to keep the implementations separate so you have the
	        ability to customize the markup based on whether the user is on a phone or tablet. The markup below
	        is the UI that tablet users see, and the markup in DetailPage below is the markup that
	        phone users see. -->
			<StackLayout col="1" class="p-20" v-if="isTablet">
				<Label class="h1 m-b-10" :text="selected.name"></Label>
				<Image height="200" :src="selected.src" class="thumb img-circle"></Image>
        <Label :text="selected.id"></Label>
				<Label class="body" textWrap="true" :text="selected.description"></Label>
			</StackLayout>
		</GridLayout>
	</Page>
</template>

<script>
const DeviceType = require("tns-core-modules/ui/enums").DeviceType;
const isTablet   = require("tns-core-modules/platform").device.deviceType == DeviceType.Tablet;
const products = require("~/services/data").products;
const Toast = require('nativescript-toast')

import routes from "~/routes/";

export default {
    data() {
        return {
          message : "You have successfully authenticated. This is where you build your core application functionality.",
          isTablet: isTablet,
          products : products,
          selected: {},
          wallet : 1000.00,
          cart   : [],



        };
    },
    methods: {
        showToast(msg, duration="medium"){
          const toast = Toast.makeText(msg, duration)
          toast.show()
        },
        showDetails(item){
          const msg = "https://github.com/nativescript-vue/nativescript-vue/issues/147"
          console.log(msg)
          this.showToast(msg, 'long')
          this.$showModal(routes.detail, {
              props: { item: item }
          });
        },
        logout() {
            this.$backendService.logout();
            this.$navigateTo(routes.login, {
                clearHistory: true
            });
        },
        addToCart(item){
          console.log(item.id)
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
          this.$navigateTo(routes.cart, {
              props: { "cart": this.cart }
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
    }
};
</script>

<style scoped>
	.home-panel {
		vertical-align: center;
		font-size: 20;
		margin: 15;
	}
  .list-group-item{
    margin-top: 10;
    margin-bottom: 20;
  }
  .item__title{
    font-size: 20;
  }
	.description-label {
		margin-bottom: 15;
	}
</style>
