import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        baslik: 'AOS Software',
        linkler: [
            'https://www.udemy.com/user/ali-osman-hazir',
            'https://www.aosgame.itch.io/',
            'https://www.youtube.com/c/AliOsmanHazir'
        ]
    },
    getters: {
        linkSayisi: state => {
            return state.linkler.length;
        }
    },
    mutations: {
        ADD_LINK: (state, link) => {
            state.linkler.push(link)
        },
        REMOVE_LINK: (state, link) => {
            state.linkler.splice(link, 1)
        },
        REMOVE_ALL: (state) => {
            state.linkler = []
        }
    },
    actions: {
        linkSil: (context, link) => {
            context.commit("REMOVE_LINK", link)
        },
        hepsiniSil({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('REMOVE_ALL')
                    resolve()
                }, 5000)
            })
        }
    }
})