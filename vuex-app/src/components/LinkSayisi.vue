<template>
  <div class="">
    <h1>Link Sayısı Componenti</h1>
    <p>Aktif Link Sayısı:{{ linkSayisi }}</p>
    <button v-on:click="butunLinkleriSil">Bütün Linkleri Sil</button>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import { mapGetters,mapActions,mapMutations } from "vuex";

export default {
  name: "LinkSayisi",
  data(){
      return{
          msg:''
      }
  },
  computed: {
    ...mapGetters(["linkSayisi"]),
  },
  methods:{
      ...mapMutations(['REMOVE_ALL']),
      ...mapActions(['hepsiniSil']),
      butunLinkleriSil(){
          this.hepsiniSil().then(()=>{
              this.msg = "Bütün Linkler Silindi"
          })
      }
  }
};
</script>

<style scoped>

button{
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background-color: #ff7675;
    border: 1px solid lightgreen;
    outline: 0;
    cursor: pointer;

}

</style>