<template>
  <div>
    <bu-header></bu-header>
    <bu-slider></bu-slider>
  </div>
</template>

<script>
  import BuHeader from './LayoutPage/BuHeader';
  import BuSlider from './LayoutPage/BuSlider';

  export default {
    name: 'layout',
    components: { BuHeader, BuSlider },
  };
</script>