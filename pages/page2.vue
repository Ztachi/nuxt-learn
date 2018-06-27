<template>
    <div>我是页面2<br/>{{$store.state.counter}}</div>

</template>

<script>
export default {
  head () {
    return {
      title: '我是page2'
    }
  }
}
</script>

<style>

</style>
