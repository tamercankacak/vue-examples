<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{blog.content}}</article>
    <p>Yazar: {{blog.author}}</p>
    <p>Kategorileri:</p>
    <ul>
        <li v-for="(data,index) in blog.categories" :key="index">{{data}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http
      .get("https://blog-vue-a0df7-default-rtdb.firebaseio.com/post/" + this.id+".json")
      .then(function (data) {
        return data.json();
      }).then(function(data){
          this.blog = data;
      });
  },
};
</script>

<style scoped>
#single-blog{
max-width: 960px;
margin: 0 auto;
}
</style>