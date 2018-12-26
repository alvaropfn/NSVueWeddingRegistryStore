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
      <Button text="goModal" @tap="goModal"/>
      <Button text="goPage" @tap="goPage"/>
      <Button text="loginExternal" @tap="goExternal"/>
      
      <Label :text="products"></Label>
    </StackLayout>
  </Page>
</template>

<script>
    export default {
      data() {
        return {
          products: 'Socks',
          inStock: true
        }
      },
      computed: {
        message() {
          return "Blank {N}-Vue app";
        }
      },
      methods: {
        goModal(){
          console.log("loginModal!")
          this.$showModal(loginModal)
        },
        goPage(){
          console.log("loginPage!")
          this.$navigateTo(loginPage)
        },
        goExternal(){
          console.log("LoginExternal!")
          // this.$navigateTo(LoginExternal)
        },
      },
  };

  const loginModal = {
    template: `
      <Page>
      <ActionBar title="loginModal"/>
      <StackLayout>
        <TextField text="input" hint="Enter text..." />
        <Button @tap="$modal.close" text="Close" />
      </StackLayout>
      </Page>
    `,
  };
  const loginPage = {
    template: `
      <Page>
      <ActionBar title="loginPage"/>
      <StackLayout>
        <TextField text="input" hint="Enter text..." />
        <Button @tap="$navigateBack" text="Close" />
      </StackLayout>
      </Page>
    `,
  }
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
