/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2018-06-26 17:31:09 
 * @Description: 载入插件
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-06-26 17:44:46
 */
import Vue from 'vue';
import axios from "axios";//引入axios
import qs from 'qs'; //引入qs

//全局设置baseURL、post请求header 
axios.defaults.baseURL ='';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.timeout = 10 * 1000; //设置请求超时
//设置全局axios
Vue.prototype.axios=axios;
//设置全局qs
Vue.prototype.qs=qs;