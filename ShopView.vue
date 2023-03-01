<template>
  <div class="shop-view">
    <div id="shop">
      <NavMenu />
      <div class="dashboard-div">
        <AppDashboardHeader
          @showHeadwear="navigateToHeadwear"
          @showChestwear="navigateToChestwear"
          @showShoes="navigateToShoes"
        />
        <br>
        <br>
        <br>
        <AppDashboard :whichApparelIsShown="apparel" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AppDashboardHeader from "@/components/dashboard/AppDashboardHeader.vue";
import AppDashboard from "@/components/dashboard/AppDashboard.vue";
import NavMenu from "@/components/navigation/NavMenu.vue";
import Footer from "@/components/navigation/Footer.vue";
import PostService from "@/PostService";

export default {
  name: "ShopView",
  components: {
    AppDashboardHeader,
    AppDashboard,
    NavMenu,
    Footer,
  },
  data() {
    return {
      apparel: this.headwear,
      headwear: [],
      chestwear: [],
      shoes: [],
    };
  },
  async created() {
    try {
      const response = await PostService.getPosts();
      response.forEach((element) => {
        if (element.apparel.item.apparel == "Headwear") {
          this.headwear.push(element);
        } else if (element.apparel.item.apparel === "Chestwear") {
          this.chestwear.push(element);
        } else if (element.apparel.item.apparel === "Shoes") {
          this.shoes.push(element);
        }
      });
    } catch (err) {
      this.error = err;
    }
  },
  methods: {
    navigateToHeadwear() {
      this.apparel = this.headwear;
    },
    navigateToChestwear() {
      this.apparel = this.chestwear;
    },
    navigateToShoes() {
      this.apparel = this.shoes;
    },
  },
  mounted() {
    this.navigateToHeadwear();
  },
};
</script>
<style scoped>
#shop {
  @apply flex flex-row h-full w-full;
}
.shop-view{
  @apply h-full;
}
.dashboard-div {
  @apply flex flex-col;
  @apply w-full;
  background-color: #c5c5c5;
}
.test {
  @apply sticky h-24 top-0;
}
::v-deep .row{
  margin:0;
}
</style>
