<template>
    <section class="container">
        <div>
            <app-logo/>
            <h1 class="title">
                nuxt-test{{$store.state.counter}}
            </h1>
            <h2 class="subtitle">
                Nuxt.js project
            </h2>
            <button @click="$store.commit('increment')" class="subtitle">
                        add++
                    </button>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
                <nuxt-link to="/page2" class="button--grey">page2</nuxt-link>
                <div @click="goto('/user/1?a=3&b=4')" class="button--grey">user1</div>
            </div>
        </div>
    </section>
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'
    export default {
        //参数校验,返回false则跳转404
        validate(d) {
            return true;
        },
        components: {
            AppLogo
        },
        methods: {
            goto(path) {
                this.$router.push({
                    path,
                    query: {
                        data: JSON.stringify({
                            a: {
                                b: 1
                            }
                        })
                    }
                })
            }
        },
        mounted() {
            this.axios.get('api/school', {
                params: {
                    page: 1,
                    per_page: 20
                }
            });
        },
        head() {
            return {
                title: '首页'
            }
        }
    }
</script>

<style scoped lang='scss'>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }
    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }
    .links {
        padding-top: 15px;
    }
</style>
