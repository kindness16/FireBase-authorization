<template>
  <div class="home">
    <h1 class="user">Welcome!</h1>
    <router-link to="/about">About</router-link>
    <br />
    <button class="logout" v-on:click="Logout">Logout</button>
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import firebase from "firebase";

export default {
  name: "Home",
  setup() {
    const name = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
      }
    });

    const Logout = () =>{
      firebase 
        .auth()
        .signOut()
        .then(()=> console.log('Signed out'))
        .catch(err => alert(err.massage))
    }

    return{
      name,
      Logout
    }
  },
};
</script>
