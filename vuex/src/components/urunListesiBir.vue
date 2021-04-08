<template>
    <div id="urun-listesi-bir">
        <h2>Birinci Ürün Listesi</h2>
        <ul>
            <li v-for="(urun,index) in indirimliUrunler" :key="index">
                <span class="isim">{{urun.isim}}</span>
                <span class="fiyat">${{urun.fiyat}}</span>

            </li>
        </ul>
        <button v-on:click="FiyatAzalt(100)">Fiyat Düşür</button>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return{

        }
    },
    computed:{
        urunler(){
            return this.$store.state.urunler;
        },
        ...mapGetters([
            'indirimliUrunler'
        ])
    },
    methods:{
        // fiyatAzalt:function(miktar){
        //     // this.$store.commit('fiyatAzalt'); mutation tetikler
        //     this.$store.dispatch('fiyatAzalt',miktar) //action tetikler
        // }

        ...mapActions([
            'FiyatAzalt'
        ])
    }
}
</script>

<style scoped>
#urun-listesi-bir{
    background: #f8efba;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#urun-listesi-bir ul{
    padding: 0;
}
#urun-listesi-bir li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
}
.fiyat{
    font-weight: bold;
    color: #1abc9c;
}
</style>