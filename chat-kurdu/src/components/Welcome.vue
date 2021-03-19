<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="deep-orange-text">Hoşgeldiniz</h2>
        <form @submit.prevent="enterChat">
          <label for="name">İsminizi Giriniz:</label>
          <input type="text" name="name" v-model="name" />
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <button class="btn deep-orange">Başla</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      name: null,
      feedback: null,
    };
  },
  methods: {
    enterChat() {
      //console.log(this.name);
      if (this.name) {
        this.$router.push({ name: "Chat", params: { name: this.name } });
      } else {
        this.feedback = "Lütfen isim giriniz";
      }
    },
  },
};
</script>

<style scoped>
.welcome {
  max-width: 600px;
  margin-top: 100px;
}
.welcome h2 {
  font-size: 3em;
}
.welcome button {
  margin: 30px auto;
}
</style>