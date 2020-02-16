<!--
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-09 15:56:05
 * @LastEditors  : yllz
 * @LastEditTime : 2020-02-09 16:15:58
 -->
<!--  -->
<template>
  <div class='nav-bar'>
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.15);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
