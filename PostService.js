import axios from "axios";
import firebase from "./firebase/index";

const url = "http://localhost:5000/api/posts/";
const authUrl = "http://localhost:5000/api/auth";

class PostService { // Ovo je js komponenta koja se koristi u projektu van servera, ovaj server folder radi skroz individualno od projekta
  //odnosno to se vodi kao backend drugi projekt
  //Get Posts  ovdje imamo funkcije koje iskoriste URL da dohvate dodane elemente ili ih ubace
  static async getPosts() {
    try {
      let data;
      await axios.get(url).then((response) => {
        data = response.data;
      });
      return data;
    } catch (err) {
      alert("ERROR");
    }
  }
  
  //Create Post
  static insertPost(item) {
    return axios.post(url, {
      item,
    });
  }
  //Insert Picture into Firebase
  static async insertPicture(item) {
    await firebase.storage.ref(`products/${item.title}`).put(item.source);
    return await firebase.storage.ref(`products/${item.title}`).getDownloadURL();
  }

  //Delete Posts
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }

  //Signup
  static async signup(userCreds) {
    let isRegistered = false;
    await axios.get(authUrl).then((response) => { //ovo provjerava je li korisnik vec postoji u bazi, ako postoji izbacice gresku
      response.data.forEach((element) => {
        if (
          element.user.email === userCreds.email &&
          element.user.password === userCreds.password
        ) {
          isRegistered = true;
        }
      });
    });
    if (isRegistered === false) { //ako ne postoji u bazi znaci moze biti registrovan
      await axios.post(authUrl, userCreds); //axios post request se salje sa url i userCreds kao korisnicki podaci koji se smjestaju u bazu
      return false;
    } else {
      return true;
    }
  }
  //Login
  static async login(creds) {
    let data = null;
    await axios.get(authUrl).then((response) => {
      response.data.forEach((element) => {
        if (
          element.user.email === creds.email
        ) {
          data = element.user;
        }
      });
    });
    return data;
  }
}

export default PostService;