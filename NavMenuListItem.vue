<template>
  <div id="nav-menu-list-item">
    <v-btn width="100%" block plain x-large :to="buttonRoute">
        {{buttonText}}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "NavMenuListItem",
  components: {},
  props:{
    buttonText: String,
    buttonRoute: String,
  }
};
</script>

<style scoped>
#nav-menu-list-item{
  @apply my-10 w-full sticky;
}
</style>