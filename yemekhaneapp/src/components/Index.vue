<template>
  <div class="index container">
    <div class="card" v-for="food in foodArray" :key="food.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteDay(food.id)">delete</i>
        <h2 class="red-text">{{ food.day }}</h2>
        <ul class="foods">
          <li v-for="(f, index) in food.foods" :key="index">
            <span class="chip">{{ f }}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating halfway-fab indigo">
        <router-link
          :to="{ name: 'EditFoodDay', params: { food_day_slug: food.slug } }"
        >
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
      <div class="card-action">
        <span>{{ food.date.seconds | moment("dddd,MMMM Do YYYY") }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";

export default {
  name: "Index",
  data() {
    return {
      foodArray: [],
    };
  },
  methods: {
    deleteDay(id) {
      // console.log(id);
      db.collection("foodArray")
        .doc(id)
        .delete()
        .then(() => {
          this.foodArray = this.foodArray.filter((f) => {
            return f.id != id;
          });
        });
    },
  },
  created() {
    //snapshot belgelerin bütün bilgilerini içerisinde barındırır
    db.collection("foodArray")
      .orderBy("date")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // console.log(doc.data());
          let food = doc.data();
          food.id = doc.id;
          this.foodArray.push(food);
        });
      });
  },
};
</script>

<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}

.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}

.index .foods {
  margin: 30px auto;
}

.index .foods li {
  display: inline-block;
}

.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>