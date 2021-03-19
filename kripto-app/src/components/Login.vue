<template>
  <div class="login container">
    <form class="card-panel" @submit.prevent="login">
      <h2 class="center green-text">Giriş Yap</h2>
      <div class="field">
        <label for="email">Email Adresiniz</label>
        <input id="email" type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Parolanız:</label>
        <input
          id="password"
          type="password"
          name="password"
          v-model="password"
        />
      </div>
      <div class="field center">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn green darken-2">Giriş Yap</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    login() {
      //   console.log(this.email,this.password)
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            this.$router.push({ name: "HomePage" });
          })
          .catch((err) => {
            this.feedback = err.message;
          });
      } else {
        this.feedback = "Alanlar boş bırakılamaz";
      }
    },
  },
};
</script>


<style scoped>
.login {
  max-width: 600px;
  margin-top: 100px;
}
.login {
  margin-bottom: 16px;
}
</style>