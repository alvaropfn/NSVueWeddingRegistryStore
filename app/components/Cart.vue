<template>
	<Page class="page">
		<ActionBar>
      <DockLayout>
        <Button dock="left" class="btn btn-primary" text="back" @tap="$navigateBack"></Button>
        <StackLayout>
          <Label text="Wedding Companion Store"/>
          <Label :text="this.$props.wallet"/>
        </StackLayout>
        <Button dock="right" class="btn btn-primary" text="Pay" @tap="payCart"></Button>
      </DockLayout >
    </ActionBar>
    <GridLayout rows="*" columns="*">
      <ListView row="0" class="list-group" for="item in cart" > <!--@itemTap="select"-->
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
              <Button class="btn btn-secundary btn-secundary--add" dock="rigth" text="-" width="100"  @tap="remToCart(item)" :style="item.quantity > 0 ? isEnable='true': isEnable='false'"></Button>
            </DockLayout>

          </StackLayout>
z
        </v-template>
      </ListView>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  props: ["cart", "wallet"],
  computed:{
    appName: "Wedding Store"
  },
  methods:{
    payCart(){
      console.log(this.$props.wallet)
    },
    remToCart(){
      console.log(this.$props.wallet)
    }
  },
  
};


</script>

<style scoped>

</style>
