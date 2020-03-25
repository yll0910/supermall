<!--
 * @Description: 
 * @Autor: yll
 * @Date: 2020-03-04 19:38:41
 * @LastEditors: yll
 * @LastEditTime: 2020-03-04 20:41:28
 -->
<!--  -->
<template>
  <div class='back-top'>
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: 'BackTop'
};
</script>
<style  scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 58px;
}
.back-top img {
  width: 45px;
  height: 45px;
}
</style>