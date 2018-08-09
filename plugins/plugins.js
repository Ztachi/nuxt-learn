/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2018-06-26 17:31:09 
 * @Description: 载入插件
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-08-09 15:21:24
 */
import Vue from 'vue';
import axios from "axios"; //引入axios
import qs from 'qs'; //引入qs
import * as svgicon from 'vue-svgicon'; //引入svg组件

import '~/static/svg'; //引入所有svg
Vue.use(svgicon, { //svg组件配置
    tagName: 'icon', //标签名
    defaultWidth: '20px', //默认宽度
    defaultHeight: '20px' //默认高度
});
//全局设置baseURL、post请求header 
axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.timeout = 10 * 1000; //设置请求超时
//设置全局axios
Vue.prototype.axios = axios;
//设置全局qs
Vue.prototype.qs = qs;
