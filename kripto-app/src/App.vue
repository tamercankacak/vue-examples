<template>
  <div>
    <navbar-app></navbar-app>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    "navbar-app": Navbar,
  },
};
</script>

<style>
</style>
