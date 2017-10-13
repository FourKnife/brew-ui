<template>
  <div class="slider">
    <div class="item">推荐</div>
    <div class="item">
      <router-link to='/installed'>已安装</router-link>
    </div>
    <div class="item">
      <router-link to='/help'>设置</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
      };
    },
    methods: {
      // handleOpen(key, keyPath) {
      //   console.log(key, keyPath);
      // },
      // handleClose(key, keyPath) {
      //   console.log(key, keyPath);
      // }
    },
  };
</script>

<style lang="scss">
  @import '~@/style/_color';

  .slider {
    width: 120px;
    height: 100%;
    background-color: $color-primary;
    .item {
      height: 40px;
      line-height: 40px;
      color: $white;
      a {
        color: $white;
      }
      &:hover {
        background-color: $darkblue;
        cursor: pointer;
      }
    }
  }
</style>