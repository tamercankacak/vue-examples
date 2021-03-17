<template>
  <div class="holder">
    <form @submit.prevent="dersEkle">
      <input
        type="text"
        v-validate="'min:5'"
        placeholder="Ders Ekle"
        v-model="ders"
      />
      <!-- <p class="alert" v-if="errors.has('ders')">{{errors.first('ders')}}</p> -->
    </form>
    <ul>
      <li v-for="(data, index) in dersler" :key="index">
        {{ index + 1 }}. {{ data.ders }}
        <i class="fa fa-minus-circle" v-on:click="dersSil(index)"></i>
      </li>
    </ul>
    <p v-if="dersler.length > 0">Ders sayısı {{ dersler.length }}</p>
    <p v-else>Henüz Ders Yok</p>
  </div>
</template>

<script>
export default {
  name: "Dersler",
  data() {
    return {
      ders: "",
      dersler: [{ ders: "Matematik" }, { ders: "Fizik" }],
    };
  },
  methods: {
    dersEkle() {
      this.dersler.push({ ders: this.ders });
      this.ders = "";
    },
    dersSil(id) {
      this.dersler.splice(id, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./Dersler.css" scoped>
</style>
