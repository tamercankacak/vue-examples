<template>
  <div class="navbar">
    <nav class="nav-extented cyan darken-3">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title"> Yemekhane App </span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab indigo">
          <router-link :to="{name:'AddFoodDay'}">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar nav {
  padding: 0 20px;
}
</style>