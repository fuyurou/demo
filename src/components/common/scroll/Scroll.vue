<template>
  <div class="wrapper" ref='wrapper'>
  <div class="content">
    <slot></slot>
  </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    data () {
        return {
            scroll: null
        }
    },
    mounted () {
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
        pullUpLoad:true  //上拉加载更多
      })
      this.scroll.on('scroll',(position)=>{
        // console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
        //上拉加载更多
        console.log('----------------');
      })
    }
}
</script>

<style scoped>

</style>