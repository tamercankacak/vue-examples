<template>
  <div id="app">
    <div class="up">
      <h2>{{ baslik }}</h2>
      <form @submit.prevent="linkEkle">
        <input
          class="link-input"
          type="text"
          placeholder="Link Ekle"
          v-model="yeniLink"
        />
      </form>
      <ul>
        <li v-for="(link, index) in linkler" v-bind:key="index">
          {{ link }}
          <button v-on:click="linklerSil(index)" class="rm">Sil</button>
        </li>
      </ul>
    </div>
    <div class="down">
      <LinkSayisi />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import LinkSayisi from "./components/LinkSayisi";

export default {
  name: "App",
  data() {
    return {
      yeniLink: "",
    };
  },
  components: {
    LinkSayisi,
  },
  computed: {
    ...mapState(["baslik", "linkler"]),
  },
  methods: {
    ...mapMutations(["ADD_LINK"]),
    linkEkle: function () {
      this.ADD_LINK(this.yeniLink);
      this.yeniLink = "";
    },
    ...mapActions(["linkSil"]),
    linklerSil: function (link) {
      this.linkSil(link);
    },
  },
};
</script>

<style scoped>
body {
  background-color: #7ed6df;
  margin: 0;
  height: 100%;
}

#app {
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas: "left right";
  height: 100%;
}

.up,
.down {
  padding: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.down {
  grid-area: right;
  background-color: #e056fd;
}

ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

input {
  border: none;
  padding: 20px;
  width: calc(100%-40px);
  box-shadow: 0 5px 5px lightgray;
  margin-bottom: 50px;
  outline: none;
}

.rm {
  float: right;
  text-transform: uppercase;
  font-size: 0.8em;
  background: #f9d0e3;
  padding: 5px;
  color: #ff0076;
  cursor: pointer;
}
</style>
