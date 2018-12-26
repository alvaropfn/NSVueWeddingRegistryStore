<template>
  <Page>
    <StackLayout>
      <TextField text="input" hint="Enter text..." />
      <Button @tap="$navigateBack" text="Close" />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style scoped lang="scss">
  @import '../app-variables';
</style>