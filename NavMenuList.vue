<template>
  <div id="nav-menu-list">
    <div v-for="(item, idx) in items" :key="idx">
      <NavMenuListItem :buttonText="item.text" :buttonRoute="item.route"/>
    </div>
  </div>
</template>

<script>
import NavMenuListItem from "@/components/navigation/NavMenuListItem.vue";
export default {
  name: "NavMenuList",
  components: {
    NavMenuListItem,
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          route: "/",
        },
        {
          text: "Shop",
          route: "/login",
        },
        {
          text: "About",
          route: "/about",
        },
      ],
    };
  },
  methods:{
    navigate(item){
      this.$router.push(item)
    }
  }
};
</script>

<style scoped>
#nav-menu-list {
  @apply top-2/4 w-full pt-16 ;
}
@media screen and (max-width: 600px){
  #nav-menu-list{
    @apply flex flex-row justify-center absolute  top-0
  }
}
</style>
