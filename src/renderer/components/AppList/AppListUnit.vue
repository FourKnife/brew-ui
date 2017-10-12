<template>
  <div class="app-list-unit">
    <img src="" alt="" class="app-logo">
    <div class="app-context">
      <h5>{{appName}}</h5>
      <p>{{desc}}</p>
      <el-button><i class="iconfont icon-downloads"></i></el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-list-unit',
    data() {
      return {
        appName: '',
        desc: '',
      };
    },
    methods: {},
  };
</script>

<style lang="scss">
  .app-list-unit {
    height: 80px;
    width: 250px;
    .app-logo {
      height: 50px;
      width: 50px;
    }
  }
</style>
