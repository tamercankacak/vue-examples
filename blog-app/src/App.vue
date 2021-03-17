<template>
  <div id="app">
    <app-header></app-header>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog.vue";
import ShowBlogs from "./components/ShowBlogs.vue";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    "add-blog": AddBlog,
    "show-blogs": ShowBlogs,
    "app-header": Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
