/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2018-06-27 14:28:06 
 * @Description: 错误页面
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-08-09 11:36:53
 */
<template>
    <div class="container">
        <div v-if="error.statusCode === 404"><span>404</span><br/>{{error.message||'页面不存在'}}</div>
        <div v-else>应用发生错误异常</div>
        <nuxt-link to="/">回到首页</nuxt-link>
    </div>
</template>

<script>
    export default {
        props: ['error']
    }
</script>

<style lang="scss" scoped>
    .container {
        @include middle;
        font-size: 40px;
        text-align: center;
        >div {
            font-weight: 900;
            >span {
                font-size: 160px;
            }
        }
        >a {
            padding: 5px 30px;
            border-radius: 40px;
            background-color: skyblue;
            color: #fff;
            margin-top: 20px;
            display: block;
        }
    }
</style>

