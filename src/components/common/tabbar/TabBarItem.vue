<template>
  <div class="tab-bar-item" @click='itemClick'>
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 动态绑定样式 -->
    <div :style="styleActive">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  computed: {
    isActive(){
      // 不等于-1就是找到了
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 通过计算属性动态绑定样式
    // 如果代码过于复杂，可以加到计算属性中
    styleActive(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
</style>
