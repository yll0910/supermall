<!--
 * @Description: 
 * @Autor: yll
 * @Date: 2020-02-22 15:40:55
 * @LastEditors: yll
 * @LastEditTime: 2020-02-22 16:09:46
 -->
 <!--  -->
 
 <template>
  <div class='recommend'>
    <div v-for="item in recommends" :key="item.item" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style  scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 5px 20px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
