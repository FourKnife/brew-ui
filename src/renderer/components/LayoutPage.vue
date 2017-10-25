<template>
  <div class="layout">
    <bu-header></bu-header>
    <div class="body">
      <bu-slider></bu-slider>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import BuHeader from './LayoutPage/BuHeader';
  import BuSlider from './LayoutPage/BuSlider';

  export default {
    name: 'layout',
    components: { BuHeader, BuSlider },
    created() {
      // console.log(@);
    },
  };
</script>

<style lang="scss">
  .layout {
    height: 100%;
    display: flex;
    flex-direction: column;
    .body {
      flex: 1;
      display: flex;
    }
  }
</style>
