/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2018-06-26 16:00:43 
 * @Description: 路由
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-06-26 16:15:05
 */
module.exports = [{
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
    }, {
        name: 'page2',
        path: '/page2',
        component: 'pages/page2.vue'
    },
    {
        name: 'user',
        path: '/user/:id',
        props:true,
        component: 'pages/user/user.vue'
    }]