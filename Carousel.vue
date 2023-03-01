<template>
  <v-carousel cycle hide-delimiters :show-arrows="false" height="300" width="200">
    <v-carousel-item
    contain
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
import pic1 from '../assets/carousel/pic1.jpg'
import pic2 from '../assets/carousel/pic2.jpg'
import pic3 from '../assets/carousel/pic3.jpg'
import pic4 from '../assets/carousel/pic4.jpg'
import pic5 from '../assets/carousel/pic5.gif'
  export default {
    name:"MyCarousel",
    data () {
      return {
        items: [
          {
            src: pic1,
          },
          {
            src: pic2,
          },
          {
            src: pic3,
          },
          {
            src: pic4,
          },
          {
            src: pic5,
          },
        ],
      }
    },
  }
</script>