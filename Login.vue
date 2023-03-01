<template>
  <div class="form-div">
    <v-form v-model="valid">
      <v-container class="form-container">
        <v-row class="bg-gray rounded-2xl p-5 ">

          <v-col cols="12" md="12">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
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
            <v-btn :disabled="!valid" @click="login"> Sub</v-btn>
          </v-col>

          <v-col cols="12" md="12">
            <router-link to='/register'>Need to register?</router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import PostService from '@/PostService';
//ovdje nije taj slucaj jer se poziva firebase iz paketa direktno
import firebase from "firebase/compat/app";

export default {
  name: "LoginForm",
  data: () => ({
    valid: false,
    firstname: "",
    password: "",
    confirmPassword: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length >= 3 || "Field must have more than 3 characters",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 8 || "Field must have more than 8 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
  }),
  mounted(){
    this.getUserData();
  },
  methods:{
    async login(){
      let creds = {
        email: this.email,
        password: this.password
      }
      const user = await PostService.login(creds)
      if(user){
        //firebase login funkcija  signInWithEmailAndPassword(email, password)
        await firebase
          .auth()
          .signInWithEmailAndPassword(creds.email, creds.password)
        
        this.$router.push('/shop')
      }else{
        alert("User does not exist or credentials invalid")
      }
    },
    // async await je asinkroni poziv, odnosno tj, program se nece dalje izvrsavati dok se ne izvrsi ta linija koda
    async getUserData() {
      const user = await firebase.auth().currentUser; //znaci program ceka ovu liniju koda
      if (user !== null || user != undefined) { //pa tek nakon sto se ona izvrsi prelazi na ovu
        this.$router.push("/shop");
      }
    },
  }
};
</script>
<style scoped>
.form-div{
  @apply flex flex-col w-full h-full justify-center items-center
}
.form-container{
  @apply w-80
}
</style>