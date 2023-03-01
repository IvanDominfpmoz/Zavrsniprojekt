<template>
  <div id="filtered-view">
    <v-row>
      <v-col v-for="item, index in apparelToShow" :key="index">
        <ProductCard :apparel="item" @ordered-item="reserve"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "FilteredView",
  components: {
    ProductCard,
  },
  data() {
    return {
      apparel: [],
    };
  },
  props: {
    apparelToShow: Array,
  },
  methods:{
    reserve(e){
      this.$emit('ordered-item', e)
    }
  }
};
</script>

<style scoped>
#filtered-view {
  @apply h-full w-full;
}
</style>
