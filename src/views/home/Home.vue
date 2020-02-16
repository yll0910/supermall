<!--
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-02 17:21:09
 * @LastEditors  : yllz
 * @LastEditTime : 2020-02-09 17:29:28
 -->
<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/narbar/NarBar';
import { getHomeMultidata } from 'network/home';
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banners.list;
      this.recommends = res.data.recommends.list;
    });
  }
};
</script>
<style  scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>