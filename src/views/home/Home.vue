<template>
  <div id='home'>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <home-swiper :banners='banners' />
      <home-recommend :recommend='recommend'></home-recommend>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick='tabClick'></tab-control>
      <goods-list :goods="showGood" />
    </scroll>
    <back-top />
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

// 因为导出方式不是exportdefault所以要解构
import { getHomeMultiData,getHomeGoods } from '@/network/home'
export default {   
    name:'Home',
    components: {
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop
    },
    data(){
      return{
        banners: [],
        recommend:[],
        goods: {
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop'
      }
    },
    created () {
      // 请求多个数据
      // 抽出来，放在methods里面
      this.getHomeMultiData()
      // 请求商品
      this.getHomeGoods('pop')
      this.getHomeGoods('sell')
      this.getHomeGoods('new')
     
    },
    computed: {
      showGood(){
        return this.goods[this.currentType].list
      }
    },
    methods:{
      // 事件监听
      tabClick(index){
        // console.log(index);
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      // 网络请求
      getHomeMultiData(){
        getHomeMultiData().then(
          res=>{
            this.banners = res.data.data.banner.list
            this.recommend = res.data.data.recommend.list
          }
        )
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page)
        .then(
            res=>{
              // console.log(res);
              this.goods[type].list.push(...res.data.data.list)
              this.goods[type].page += 1
            }
          )
        }
    }
}
</script>

<style>
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-tint);
  color:#fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control{
  position: sticky;
  z-index: 9;
  top: 44px;
}
.content {
  position: absolute;
  top: 22px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>