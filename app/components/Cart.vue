<template>
	<Page class="page">
		<ActionBar>
      <DockLayout>
        <Button dock="left" class="btn btn-primary" text="back" @tap="$navigateBack"></Button>
        <StackLayout>
          <Label text="Wedding Companion Store"/>
          <Label text="wallet"/>
        </StackLayout>
        <Button dock="right" class="btn btn-primary" text="cart" @tap="goToCart"></Button>
      </DockLayout >
    </ActionBar>
    <StackLayout>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  props: ["cart"],
  methods:{
    goToCart(){
      console.log(this.$props.cart.length)
    }
  }
};


</script>

<style scoped>

</style>
