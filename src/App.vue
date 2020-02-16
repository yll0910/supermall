<!--
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-08 14:30:55
 * @LastEditors  : yllz
 * @LastEditTime : 2020-02-09 15:17:59
 -->
<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar';
export default {
  name: 'App',
  components: {
    MainTabBar
  }
};
</script>

<style>
@import 'assets/css/base.css';
</style>
