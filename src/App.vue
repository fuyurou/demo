<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar />
  </div>
</template>

<script>
  import MainTabBar from 'components/content/maintabbar/MainTabBar'
  export default {
    name: 'app',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  /*css 引入方式*/
  @import "assets/css/base.css";
</style>
