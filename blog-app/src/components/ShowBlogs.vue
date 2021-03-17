<template>
  <div id="show-blogs">
    <input type="text" v-model="search" placeholder="Makale Ara" />
    <h1>Makaleler</h1>
    <div
      v-for="(data, index) in filteredBlogs"
      :key="index"
      class="single-blog"
    >
      <router-link :to="'/blog/' + data.id">
        <h3>{{ data.title | uppercase }}</h3>
      </router-link>
      <article>{{ data.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowBlogs",
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get("https://blog-vue-a0df7-default-rtdb.firebaseio.com/post.json")
      .then(function (data) {
        //   console.log(data)
        return data.json();
      })
      .then(function (data) {
        var blogsArray = [];
        for (const key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
};
</script>

<style scoped>
body {
  background: #f8c298;
}
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #38ada9;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
</style>
