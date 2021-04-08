<template>
  <div id="app">
    <urun-listesi-bir v-bind:urunler="urunler"></urun-listesi-bir>
    <urun-listesi-iki v-bind:urunler="urunler"></urun-listesi-iki>
  </div>
</template>

<script>
import urunListesiBir from "./components/urunListesiBir";
import urunListesiIki from "./components/urunListesiIkı";

export default {
  name: "app",
  components: {
    "urun-listesi-bir": urunListesiBir,
    "urun-listesi-iki":urunListesiIki
  },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #555;
}
</style>