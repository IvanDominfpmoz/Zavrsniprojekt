<template>
  <v-card class="mx-auto" rounded="xl" max-width="255">
    <v-img :src="apparel.apparel.item.source" height="200px"></v-img>

    <v-card-title>
      {{ apparel.apparel.item.title }}
    </v-card-title>

    <v-card-subtitle>
      {{ apparel.apparel.item.description }}
    </v-card-subtitle>

    <v-card-subtitle>Price: {{ apparel.apparel.item.price }} $</v-card-subtitle>

    <v-card-actions >
      <v-btn @click="reserve">Order</v-btn>
      <v-spacer></v-spacer>

      <v-btn v-if="isAdmin" icon @click="show = !show">
        <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition >
      <div v-show="show">
        <v-divider></v-divider>

          <v-btn v-if="isAdmin" class="delete-button" @click="deleteProduct">Delete product</v-btn>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import firebase from "../firebase/index"; 
import PostService from '@/PostService';

export default {
  data: () => ({
    isAdmin: false,
    show: false,
  }),
  props: {
    apparel: Object,
  },
  mounted() {
    this.checkIsAdmin();
  },
  methods: {
    async checkIsAdmin() {
      const user = await firebase.auth.currentUser;
      if (user.email == "admin@admin.admin") {
        this.isAdmin = true;
      }
    },
    async deleteProduct(){
      await PostService.deletePost(this.apparel._id)
      location.reload();
    },
    reserve(){
      this.$emit('ordered-item', this.apparel.apparel.item)
    }
  },
};
</script>
<style scoped>
::v-deep .v-card {
  @apply rounded-none !important;
}
.delete-button{
  @apply my-2
}
</style>
