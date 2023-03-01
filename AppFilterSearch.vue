<template>
  <div id="app-filter-search">
    <v-col md="3" class="app-filter-item" @click="showHeadwear"
      >
      <p>Headwear</p>
      </v-col>
    <v-col md="3" class="app-filter-item" @click="showChestwear">Chestwear</v-col>
    <v-col md="3" class="app-filter-item" @click="showShoes">Shoes</v-col>
  </div>
</template>

<script>
export default {
  name: "AppFilterSearch",
  components: {
  },
  data() {
    return {
      isHeadwearOpen: false,
      isChestwearOpen: false,
      isShoesOpen: false,
    };
  },
  methods: {
    showHeadwear() {
      this.$emit('showHeadwear')
    },
    showChestwear() {
      this.$emit('showChestwear')
    },
    showShoes() {
      this.$emit('showShoes')
    },
  },
};
</script>

<style scoped>
#app-filter-search {
  @apply h-16 w-full;
  @apply flex flex-row justify-start items-center;
  @apply text-sm;
}
.app-filter-item {
  color: rgba(0, 0, 0, 0.6);
  transition: color 0.5s;
  @apply flex flex-col justify-start items-center
}
.app-filter-item:hover {
  color: rgba(0, 0, 0, 1);
  @apply cursor-pointer;
}
</style>
