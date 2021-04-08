import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        urunler: [
            { isim: "Televizyon", fiyat: 5000 },
            { isim: "Telefon", fiyat: 4000 },
            { isim: "Klima", fiyat: 3000 },
            { isim: "Oyun Konsolu", fiyat: 2000 },
        ]
    },
    getters: {
        indirimliUrunler: (state) => {
            var indirim = state.urunler.map(urun => {
                return {
                    isim: '*** ' + urun.isim,
                    fiyat: urun.fiyat / 2
                }
            });
            return indirim;
        }
    },
    mutations: {
        fiyatAzalt: (state,payload) => {
            state.urunler.forEach(urun => {
                urun.fiyat -= payload;
            })
        }
    },
    actions:{
        FiyatAzalt:(context,miktar)=>{
            setTimeout(function(){
                context.commit('fiyatAzalt',miktar)
            },5000)
        }
    }
})