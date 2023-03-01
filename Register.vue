<template>
  <div class="form-div">
    <v-form v-model="valid">
      <v-container class="form-container">
        <v-row class="bg-gray rounded-2xl p-5">
          <v-col cols="12" md="12" width="300">
            <v-text-field
              v-model="firstname"
              :rules="nameRules" 
              label="User name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Password"
              type="password"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="confirmPassword"
              :rules="[passwordRules, matchingPasswords]"
              label="Confirm password"
              type="password"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="12">
            <v-btn :disabled="!valid" @click="register"> Sub</v-btn>
          </v-col>

          <v-col cols="12" md="12">
            <router-link to="/login">Need to login?</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import PostService from '@/PostService';
import firebase from "firebase/compat/app";

export default {
  name: "RegisterForm",
  data: () => ({
    valid: false,
    firstname: "",
    password: "",
    confirmPassword: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length >= 3 || "Field must have more than 3 characters", //validacija
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 8 || "Field must have more than 8 characters",//validacija
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",//validacija
    ],
  }),
  methods: {
    async register() {
      let newUser = {
        firstname: this.firstname,
        email: this.email,
        password: this.password,
      };
      const isRegistered = await PostService.signup(newUser) //registruje novi account sa unesenim podacima iz forme u MONGO DB
      if(!isRegistered){
        //ovdje je registracija NA FIREBASE
        //
        await firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
        await firebase.auth().currentUser.updateProfile({displayName: newUser.firstname}) // ovo je da postavi username {displayName}
        this.$router.replace({ path: '/shop' })
      }else{
        alert("User already exists") //ovo je greska (javlja se kao alert)
      }
    },
    matchingPasswords() {
      if (this.confirmPassword === this.password) {
        return true;
      } else {
        return "Passwords does not match.";
      }
    },
  },
};
</script>
<style scoped>
.form-div {
  @apply flex flex-col w-full h-full justify-center items-center;
}
.form-container {
  @apply w-80;
}
</style>
