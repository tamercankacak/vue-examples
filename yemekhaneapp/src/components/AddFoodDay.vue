<template>
  <div class="add-food-day container z-depth-1">
    <h2 class="center-align indigo-text">Günün Yemeğini Ekle</h2>
    <form @submit.prevent="addFoodDay()">
      <div class="field title">
        <label for="day">Günün Adı:</label>
        <input type="text" name="day" v-model="day" />
      </div>
      <div class="field date">
        <label for="date">Günün Tarihi:</label>
        <input type="date" name="date" v-model="date" />
      </div>

      <div v-for="(food, index) in foods" :key="index" class="field add-food">
        <label for="food">Yemek {{ index + 1 }}:</label>
        <input type="text" name="add-food" v-model="foods[index]" />
      </div>
      <div class="field add-food">
        <label for="add-food">Yemek Ekle:</label>
        <input
          type="text"
          name="add-food"
          @keydown.tab.prevent="addFood"
          v-model="another"
        />
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn indigo">Ekle</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddFoodDay",
  data() {
    return {
      day: null,
      foods: [],
      another: null,
      feedback: null,
      date:null
    };
  },
  methods: {
    addFoodDay() {
      console.log(this.day, this.foods,this.date);
    },
    addFood() {
      if (this.another) {
        this.foods.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "Yemek Ekleyiniz";
      }
    },
  },
};
</script>

<style scoped>
.add-food-day {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-food-day h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-food-day .field {
  margin: 20px auto;
}
</style>