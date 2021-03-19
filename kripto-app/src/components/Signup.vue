<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="signup">
      <h2 class="center green-text">Üyelik Oluştur</h2>
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
      <div class="field">
        <label for="passwordAgain">Parola Tekrarı:</label>
        <input
          id="passwordAgain"
          type="password"
          name="passwordAgain"
          v-model="passwordAgain"
        />
      </div>
      <div class="field center">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn green darken-2">Kayıt Ol</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      passwordAgain: null,
      feedback: null,
    };
  },
  methods: {
    signup() {
      //   console.log(this.email, this.password, this.passwordAgain);
      if (this.passwordAgain == this.password) {
        if (this.email) {
          firebase.auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((cred) => {
            //   console.log(cred.user);
              this.$router.push({ name: "HomePage" });
            })
            .catch((err) => {
              this.feedback = err.message;
            })
        } else {
          this.feedback = "Email alanı boş geçilemez";
        }
      } else {
        this.feedback = "Parola alanları aynı olmalı";
      }
    },
  },
};
</script>

<style scoped>
.signup {
  max-width: 600px;
  margin-top: 100px;
}
.signup {
  margin-bottom: 16px;
}
</style>