<!--
 * @Description: 
 * @Autor: yll
 * @Date: 2020-03-15 18:19:18
 * @LastEditors: yll
 * @LastEditTime: 2020-03-15 19:18:00
 -->
 <!--  -->
 <template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item.item">
      <img :src="item" alt="">

    </swiper-item>
  </swiper>
</template>
 <script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { Swiper, SwiperItem } from 'components/common/swiper';
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
 <style scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
