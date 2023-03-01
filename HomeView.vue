<template>
  <div class="home-view">
    <div id="home">
      <NavMenu />
      <div class="home-div">
        <h1 class="text-2xl">Welcome</h1>
        <h2 class="text-lg">to our Mercedes fan shop</h2>
        <br />
        <div class="carousel-div">
          <Carousel />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavMenu from "@/components/navigation/NavMenu.vue";
import Footer from "@/components/navigation/Footer.vue";
import Carousel from "@/components/Carousel.vue";

export default {
  name: "HomeView",
  components: {
    NavMenu,
    Carousel,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
#home {
  @apply flex flex-row h-full w-full;
}
.home-div {
  @apply flex flex-col justify-center items-center ;
  @apply w-full;
}
.carousel-div {
  @apply w-128 rounded-2xl;
}
::v-deep #nav-menu-list{
  @apply pt-0;
}
.home-view{
  @apply h-full;
}
</style>
