<template>
  <div class="header">
    <span class="logo">BREW-UI</span>
    <div>
      <el-input 
        placeholder="请输入软件名称"
        icon="search"
        v-model="search"
        :on-icon-click="handleIconClick"
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
      handleIconClick(ev) {
        console.log(ev);
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
