<template>
  <div class="navbar">
    <nav class="green lighten-2">
      <div class="container">
        <router-link class="brand-logo left" :to="{ name: 'HomePage' }">
          Kripto App
        </router-link>
        <ul class="right">
          <li v-if="!user">
            <router-link :to="{ name: 'Signup' }">Signup</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li v-if="user">
            <router-link :to="{ name: 'Kripto' }">Takip</router-link>
          </li>
          <li v-if="user"><a href="#" @click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "HomePage",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
};
</script>

<style scoped>
</style>