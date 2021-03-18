<template>
  <div v-if="foodDay" class="edit-food-day container">
    <h2>{{ foodDay.day }} Yemeğini Düzenle</h2>
    <form @submit.prevent="editFoodDay()">
      <div class="field title">
        <label for="day">Günün Adı:</label>
        <input type="text" name="day" v-model="foodDay.day" />
      </div>

      <div
        v-for="(food, index) in foodDay.foods"
        :key="index"
        class="field add-food"
      >
        <label for="food">Yemek {{ index + 1 }}:</label>
        <input type="text" name="add-food" v-model="foodDay.foods[index]" />
        <i class="material-icons delete" @click="deleteFood(food)">delete</i>
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
        <button class="btn indigo">Güncelle</button>
      </div>
    </form>
  </div>
</template>
<script>
import db from "../firebase/init";
import slugify from 'slugify'

export default {
  name: "EditFoodDay",
  data() {
    return {
      foodDay: null,
      another: null,
      feedback: null,
    };
  },
  created() {
    let ref = db
      .collection("foodArray")
      .where("slug", "==", this.$route.params.food_day_slug);
    ref.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        this.foodDay = doc.data();
        this.foodDay.id = doc.id;
      });
    });
  },
  methods: {
    addFood() {
      if (this.another) {
        this.foodDay.foods.push(this.another);
        this.another = null;
        this.feedback = null;
      } else {
        this.feedback = "Yemek Ekleyiniz";
      }
    },
    deleteFood(food) {
      this.foodDay.foods = this.foodDay.foods.filter((f) => {
        return f != food;
      });
    },
    editFoodDay() {
      // console.log(this.day, this.foods,this.date);
      if(this.foodDay.day){
        this.feedback=null
        this.slug=slugify(this.foodDay.day,{
          replacement:'-',
          remove:/[$*_+~.()'"!\-:@]/g,
          lower:true
        })
        db.collection('foodArray').doc(this.foodDay.id).update({
          day:this.foodDay.day,
          foods:this.foodDay.foods,
          slug:this.slug
        }).then(()=>{
          this.$router.push({name:'Index'})
        }).catch(err=>{
          console.log(err);
        })
      }else{
        this.feedback="Günün adını giriniz."
      }
    },
  },
};
</script>

<style scoped>
.edit-food-day {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.edit-food-day h2 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-food-day .field {
  margin: 20px auto;
  position: relative;
}
.edit-food-day .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>