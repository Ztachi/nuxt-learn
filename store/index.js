/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2018-06-26 17:52:08 
 * @Description: vuex
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-06-26 17:52:29
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
  
  export default store