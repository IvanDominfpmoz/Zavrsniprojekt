<template>
  <div id="nav-menu">
    <NavMenuHeader/>
    <NavMenuList buttonText="test"/>
  </div>
</template>

<script>

import NavMenuList from '@/components/navigation/NavMenuList.vue'
import NavMenuHeader from '@/components/navigation/NavMenuHeader.vue'
export default {
  name: "NavMenu",
  components: {
    NavMenuList,
    NavMenuHeader,
  },
};
</script>

<style scoped>
#nav-menu {
  @apply sticky flex flex-col items-center ;
  @apply left-0 h-full w-1/6;
  
  background-color: #C5C5C5;
}
@media screen and (max-width: 600px){
  #nav-menu{
    @apply absolute block w-full h-28;
  }
}
</style>
