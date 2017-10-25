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
  @import '~@/style/_color';
  .installed-unit {
    display: flex;
    border: 1px solid $color-border;
    height: 60px;
    &:not(:first-child) {
      border-top: 0;
    }
  }
</style>
