<template>
  <div class="installed-unit">
    <img src="" alt="">
    <div>{{item}}</div>
  </div>
</template>

<script>
  export default {
    name: 'intalled-unit',
    props: ['item'],
  };
</script>

<style lang="scss">
  .installed-unit {
    display: flex;
  }
</style>
