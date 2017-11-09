<template>
  <div class="header">
    <span class="logo">BREW-UI</span>
    <div>
      <el-input 
        placeholder="请输入软件名称"
        suffix-icon="el-icon-search"
        v-model="search"
        :fetch-suggestions="suggest"
        @select="handleSelect"
        @keyup.enter.native="suggest"
      ></el-input>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search: '',
      };
    },
    methods: {
      suggest(key, cb) {
        console.log(key);
        cb('111');
      },
      handleSelect(item) {
        console.log(item);
      },
    },
  };
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    background-color: #58B7FF; 
  }
</style>
