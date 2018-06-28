<template>
    <div id="page2">
        我是页面2<br/>{{$store.state.counter}}
        <img src="/1.jpg" alt="">
        <div class="img1"></div>
        <div class="img2"></div>
        <div class="img3"></div>
        <icon name="user" color="red r-#1C2330"></icon>
        <icon name="code" color="red r-1C2330" :fill="false"></icon>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: '我是page2'
            }
        }
    }
</script>

<style lang="scss" scoped>
    #page2 {
        >div {
            @include equalWH(50, false);
            float: left;
            margin-left: 15px;
            &:first-of-type {
                background-image: url('/assets/img/1@2x.png');
                +div {
                    background-image: url('/assets/img/2@2x.png');
                    +div {
                        background-image: url('/assets/img/3@2x.png');
                    }
                }
            }
        }
    }
</style>

