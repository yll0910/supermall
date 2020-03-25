<!--
 * @Description: 
 * @Autor: yll
 * @Date: 2020-02-29 16:40:55
 * @LastEditors: yll
 * @LastEditTime: 2020-02-29 18:22:38
 -->
 <!--  -->
 <template>
  <div class='goods'>
    <goods-list-item v-for="item in goods" :key="item.item" :goods-item="item"></goods-list-item>
    {{goods}}
  </div>
</template>
 
 <script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import GoodsListItem from './GoodsListItem';
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
 <style  scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
