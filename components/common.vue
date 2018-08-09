/*
 * @Author: 詹真琦(legendryztachi@gmail.com) 
 * @Date: 2018-08-09 14:17:09 
 * @Description: 全橘的一些配置
 * @Last Modified by: 詹真琦(legendryztachi@gmail.com)
 * @Last Modified time: 2018-08-09 15:27:02
 */
<template>
    <div>
    </div>
</template>

<script>
    export default {
        created() {
            // Add a request interceptor
            this.axios.interceptors.request.use(function(config) {
                // Do something before request is sent
                return config;
            }, function(error) {
                // Do something with request error
                return Promise.reject(error);
            });
            // Add a response interceptor
            this.axios.interceptors.response.use(function(response) {
                // Do something with response data
                return response;
            }, function(error) {
                // Do something with response error
                return Promise.reject(error);
            });
        }
    }
</script>
