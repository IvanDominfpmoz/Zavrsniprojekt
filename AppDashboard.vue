<template>
  <div id="dashboard">
    <div class="dashboard-content">
      <v-btn v-if="!isShoppingCartOpen" width="100%" class="mb-2" @click="isShoppingCartOpen = true">Shopping Cart <br> Items:{{orderedItems.length}}</v-btn>
      <br>
      <br>
      <v-btn v-if="isAdmin " v-show="!dialogActive" class="mb-5"  @click="dialogActive = true">Add product</v-btn>
      <AddItem
        :dialog="dialogActive"
        @closeDialog="dialogActive = false"/>

      <FilteredView v-if="!isShoppingCartOpen" :apparelToShow="whichApparelIsShown" @ordered-item="reserve"/>
      <ShoppingCart v-if="isShoppingCartOpen" :selectedProducts="orderedItems" @close-cart="closeAndClearCart"/>
    </div>
  </div>
</template>

<script>
import FilteredView from "./FilteredView.vue";
import AddItem from "../dashboard/AddItem.vue";
import firebase from "../../firebase/index";
import ShoppingCart from "../ShoppingCart.vue"

export default {
  name: "AppDashboard",
  components: {
    FilteredView,
    AddItem,
    ShoppingCart,
  },
  data(){
    return{
      apparel: null,
      posts:[],
      error: '',
      text: '',
      dialogActive: false,
      isAdmin: false,
      isShoppingCartOpen: false,
      orderedItems: [],
    }
  },
  props:{
    whichApparelIsShown: Array,
  },
  mounted(){
    this.checkIsAdmin()
  },
  methods:{
    async checkIsAdmin() {
      const user = await firebase.auth.currentUser;
      if (user.email == "admin@admin.admin") {
        this.isAdmin = true;
      }
    },
    reserve(e){
      this.orderedItems.push(e)
    },
    closeAndClearCart(){
      this.isShoppingCartOpen = false
      this.orderedItems = []
    }
  }
}
</script>

<style scoped>
#dashboard {
  @apply z-40  w-full  h-full overflow-scroll;
  scrollbar-width: none;
}
::v-deep .footer{
  @apply absolute
}
</style>
