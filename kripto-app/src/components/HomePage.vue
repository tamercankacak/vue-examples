<template>
  <div class="home container">
    <div v-for="(data,index) in yeniKriptolar" :key="index" class="card blue-grey darken-2">
      <div class="card-content white-text">
        <span class="card-title">{{data.kripto}}</span>
        <p>{{data.dolar}} $</p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/init";
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      takipKriptolar: [],
      feedback: null,
      yeniKriptolar: [],
    };
  },
  mounted() {
    let userId = firebase.auth().currentUser.uid;
    // console.log(userId);
    let ref = db.collection("kullanicilar");
    ref
      .doc(userId)
      .get()
      .then((doc) => {
        this.takipKriptolar = doc.data().takipKriptolar;

        if (this.takipKriptolar.length > 0) {
          this.takipKriptolar.forEach((takipId) => {
            db.collection("kriptolar")
              .doc(takipId)
              .get()
              .then((doc) => {
                let kriptoPara = doc.data().ad;
                axios
                  .get(
                    `https://min-api.cryptocompare.com/data/price?fsym=${kriptoPara}&tsyms=USD`
                  )
                  .then((res) => {
                    let dolar = res.data.USD;
                    this.yeniKriptolar.push({
                      kripto: kriptoPara,
                      dolar: dolar,
                    });
                  });
              });
          });
        } else {
          this.feedback = "Henüz takip edilen bir kripto para yok";
        }
      });
  },
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
</style>