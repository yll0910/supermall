<!--
 * @Description: 
 * @Autor: yllz
 * @Date: 2020-02-10 17:35:35
 * @LastEditors: yll
 * @LastEditTime: 2020-03-15 15:01:12
 -->
<!--  -->
<template>

  <swiper>
    <swiper-item v-for="item in banners" :key="item.item">
      <!-- <swiper-item v-for="(item,index) in banners" :key="index"> -->
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad');
        this.isLoad = true;
      }
    }
  }
};
</script>
<style  scoped>
</style>