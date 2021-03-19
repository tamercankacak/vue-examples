<template>
  <div class="kripto container">
    <div class="card blue-grey darken-1">
      <div class="card-content">
        <ul class="collection with-header">
          <li class="collection-header green darken-1 white-text">
            <h4>Takip Edilecek Kripto Paralar</h4>
          </li>
          <li
            v-for="(kripto, index) in kriptolar"
            :key="index"
            class="collection-item green lighten-3 takip"
          >
            <div>
              {{ kripto.ad }}
              <a @click="kriptoSec(kripto.id)" class="secondary-content">
                <i class="material-icons green-text">add</i>
              </a>
              <a @click="kriptoBirak(kripto.id)" class="secondary-content">
                <i class="material-icons red-text">remove</i>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Kripto",
  data() {
    return {
      kriptolar: [],
      kripto: null,
      takipKriptolar: [],
    };
  },
  created() {
    let userId = firebase.auth().currentUser.uid;
    let ref = db.collection("kullanicilar").doc(userId);

    if (ref) {
      ref.get().then((snap) => {
        this.takipKriptolar = snap.data().takipKriptolar;
      });
    }

    db.collection("kriptolar")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          //   console.log(doc.id);
          this.kripto = doc.data();
          this.kripto.id = doc.id;
          this.kriptolar.push(this.kripto);
        });
      });
  },
  methods: {
    kriptoSec(id) {
      let userId = firebase.auth().currentUser.uid;

      if (userId) {
        let ref = db.collection("kullanicilar");
        ref
          .doc(userId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              //güncelleme yap
              this.takipKriptolar = this.takipKriptolar.filter((takip) => {
                return takip != id;
              });
              this.takipKriptolar.push(id);
              ref
                .doc(userId)
                .update({
                  takipKriptolar: this.takipKriptolar,
                })
                .then(() => {
                  this.$router.push({ name: "HomePage" });
                });
            } else {
              //ekleme yap
              this.takipKriptolar.push(id);
              ref
                .doc(userId)
                .set({
                  takipKriptolar: this.takipKriptolar,
                })
                .then(() => {
                  this.$router.push({ name: "HomePage" });
                });
            }
          });
      }
    },
    kriptoBirak(id) {
      let userId = firebase.auth().currentUser.uid;

      this.takipKriptolar = this.takipKriptolar.filter((takip) => {
        return takip != id;
      });

      let ref = db.collection("kullanicilar");
      ref
        .doc(userId)
        .update({
          takipKriptolar: this.takipKriptolar,
        })
        .then(() => {
          this.$router.push({ name: "HomePage" });
        });
    },
  },
};
</script>

<style scoped>
.kripto {
  max-width: 600px;
}
.kripto .takip {
  height: 75px;
}
</style>