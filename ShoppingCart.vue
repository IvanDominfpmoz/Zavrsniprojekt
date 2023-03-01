<template>
  <div class="cart-div">
    <v-card class="mt-8" width="100%">
      <v-list disabled>
        <v-list-item>
          <v-list-item-title> <strong>Apparel</strong></v-list-item-title>
          <v-list-item-title><strong>Title</strong></v-list-item-title>
          <v-list-item-title><strong>Description</strong></v-list-item-title>
          <v-list-item-title><strong>Price</strong></v-list-item-title>
        </v-list-item>
        <v-list-item v-for="(item, i) in selectedProducts" :key="i">
          <v-list-item-title
            v-text="item.apparel"
          ></v-list-item-title>
          <v-list-item-title
            v-text="item.title"
          ></v-list-item-title>
          <v-list-item-title
            v-text="item.subtitle"
          ></v-list-item-title>
          <v-list-item-title
            >Price: {{ item.price }} $</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <div class="total-price">Total Price: {{ totalPrice }} $</div>
        </v-list-item>
      </v-list>
    </v-card>
    <div class="mt-3">
      <v-btn width="50%" @click="$emit('close-cart')"
        >Cancel and clear the shopping cart</v-btn
      >
      <v-btn width="50%">Order</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data: () => ({
    selectedItem: 1,
    totalPrice: 0,
  }),
  props: {
    selectedProducts: Array,
  },
  mounted() {
    this.calculateTotalPrice();
  },
  methods: {
    calculateTotalPrice() {
      this.selectedProducts.forEach((element) => {
        this.totalPrice += element.price;
      });
    },
  },
};
</script>
<style scoped>
.total-price {
  @apply absolute float-right bottom-0 right-0 mr-12 mb-6;
}
.cart-div {
  @apply w-full h-full;
}
</style>
