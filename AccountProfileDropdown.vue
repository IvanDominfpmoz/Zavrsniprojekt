<template>
  <div class="dropdown-menu">
    <v-list class="list">
      <v-list-item >
        <v-list-item-title>{{title}}: {{displayName}}</v-list-item-title>
      </v-list-item>
      <v-list-item><v-btn @click="logout">Sign out</v-btn></v-list-item>
    </v-list>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";

export default {
  name: "AccountProfileDropdown",
  data: () => ({
    title: "Username",
    displayName: "" 
  }),
  props: {
    isActive: Boolean,
  },
  mounted() {
    this.getUsername();
  },
  methods: {
    async getUsername() {
      this.displayName = await firebase.auth().currentUser.displayName;
    },
    async logout() {
      const auth = await firebase.auth();
      firebase.auth().signOut(auth)
        .then(() => {
          this.$router.replace("/login");
          alert("Successfully signed out")
        })
        .catch((error) => {
          alert("Error", error);
        });
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  @apply mt-10 w-48 absolute justify-center items-center;
}
.list{
  @apply flex flex-col justify-center items-center
}
</style>
