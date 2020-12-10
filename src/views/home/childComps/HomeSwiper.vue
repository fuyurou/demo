<template>
    <swiper>
       <swiper-item v-for="item in banners" :key='item.acm'>
        <a :href="item.href" >
          <img :src="item.image" >
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
// 因为导出方式不是exportdefault所以要解构
import { getHomeMultiData } from '@/network/home'
export default {   
    name:'HomeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props:{
        banners:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>

</style>