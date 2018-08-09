/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2018-06-26 17:52:08 
 * @Description: vuex
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-08-09 15:25:32
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"; //引入axios
import qs from 'qs'; //引入qs
Vue.use(Vuex);



const store = () => new Vuex.Store({

    state: {
        axios,
        qs,
        counter: 0
    },
    mutations: {
        increment(state) {
            state.counter++
        }
    }
})

export default store