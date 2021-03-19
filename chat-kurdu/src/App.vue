<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Chat from "./components/Chat.vue";
import NewMessage from "./components/NewMessage.vue";
import Welcome from "./components/Welcome.vue";

export default {
  name: "App",
  components: {

  },
};
</script>

<style>
</style>
