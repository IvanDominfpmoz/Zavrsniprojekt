<template>
  <div id="nav-menu-header">
    <v-img src="@/assets/logo.png" height="100%"></v-img>
  </div>
</template>

<script>
export default {
  name: "NavMenuHeader",
  components: {},
};
</script>

<style scoped>
#nav-menu-header {
  @apply top-0 h-28 w-28 ;
}
@media screen and (max-width: 600px){
  #nav-menu-header{
    @apply hidden;
  }
}
</style>
