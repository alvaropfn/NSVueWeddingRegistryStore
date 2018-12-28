<template>
	<Page class="page">
		<ActionBar>
        <Label text="Wedding Companion Store"/>
    </ActionBar>
    <StackLayout>
      <Label text="Thanks"/>
      <Label text="your gifts will help us"/>
    </StackLayout>
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
