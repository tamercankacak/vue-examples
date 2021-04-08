<template>
    <div id="urun-listesi-iki">
        <h2>İkinci Ürün Listesi</h2>
        <ul>
            <li v-for="(urun,index) in indirimliUrunler" :key="index">
                <span class="isim">{{urun.isim}}</span>
                <span class="fiyat">${{urun.fiyat}}</span>

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    computed:{
        urunler(){
            return this.$store.state.urunler;
        },
        indirimliUrunler(){
           return this.$store.getters.indirimliUrunler;
        }
    }
}
</script>

<style scoped>
#urun-listesi-iki{
    background: #9aecdb;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#urun-listesi-iki ul{
    padding: 0;
    list-style-type: none;
}
#urun-listesi-iki li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.7);
}
.fiyat{
    font-weight: bold;
    color: #44bd32;
    display: block;
}
</style>