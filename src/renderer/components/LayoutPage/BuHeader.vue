<template>
  <div class="header">
    <span class="logo">BREW-UI</span>
    <div>
      <el-input :value='search'></el-input>
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
  };
</script>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    background-color: #58B7FF; 
  }
</style>
