<!--
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-08 14:30:55
 * @LastEditors: yll
 * @LastEditTime: 2020-03-15 18:58:27
 -->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
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
