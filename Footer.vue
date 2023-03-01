<template>
  <div class="footer">
    <v-row>
      <v-col sm="12" class="text-color">
        <v-row class="footer-row">
          <v-col sm="1" >
            <a href="https://vuejs.org/"><v-img :src="vueIco" width="32" height="32" cover></v-img></a>
            </v-col>
          <v-col sm="1">
            <a href="https://firebase.google.com/"><v-img :src="firebaseIco" width="32" height="32" cover></v-img></a>
            </v-col>
          <v-col sm="1">
            <a href="https://vuetifyjs.com/en/"><v-img :src="vuetify" width="32" height="32" cover ></v-img></a>
          </v-col>
          <v-col sm="1">
            <a href="https://expressjs.com/"><v-img :src="express" width="32" height="32" cover></v-img></a>
          </v-col>
        </v-row>
      </v-col>

      <v-row>
        <v-col sm="6" class="text-color"
          >dominkovicivan8@gmail.com</v-col
        >
        <v-col sm="6" class="text-color">Copyright ©Ivan Dominkovic</v-col>
      </v-row>
    </v-row>
  </div>
</template>

<script>
import vueIco from "@/assets/footer/vue.png";
import firebaseIco from "@/assets/footer/firebase.png";
import vuetify from "@/assets/footer/vuetify.png";
import express from "@/assets/footer/express.png";

export default {
  name: "AppFooter",
  components: {},
  data() {
    return {
      vueIco: vueIco,
      firebaseIco: firebaseIco,
      vuetify: vuetify,
      express: express,
    };
  },
};
</script>

<style scoped>
.footer {
  @apply  bottom-0 w-full;
  --tw-bg-opacity: 1;
  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));
}
.footer-row{
  @apply flex  justify-center items-center;
}
::v-deep .row {
  @apply m-0;
}
.text-color {
  --tw-text-opacity: 1;
  color: rgba(67, 56, 202, var(--tw-text-opacity));
}
</style>
