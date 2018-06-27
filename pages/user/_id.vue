<template>
    <div>
        我是用户{{id}}</div>
</template>

<script>
    export default {
        asyncData(ctx) {
            if (ctx.query&&ctx.query.data) {
                console.log(JSON.parse(ctx.query.data));
            }
            return {
                id: ctx.params.id
            }
        },
        data() {
            return {
                s: 1
            }
        }
    }
</script>

<style>

</style>
