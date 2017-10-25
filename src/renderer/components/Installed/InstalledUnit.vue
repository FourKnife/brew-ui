<template>
  <div class="installed-unit">
    <img src="" alt="">
    <div class="flex-1">{{item}}</div>
    <div class="operator">
      <el-button v-if="!isUninstalled" type="primary" size="mini"
        :loading="isLoading" @click="uninstall"
      >Uninstall</el-button>
      <el-button v-else disabled="true" size="mini">Uninstalled</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'intalled-unit',
    props: ['item', 'isUninstalled'],
    data() {
      return {
        isLoading: false,
      };
    },
    methods: {
      uninstall() {
        this.isLoading = true;
        this.$store.dispatch('uninstall', { name });
      },
    },
  };
</script>

<style lang="scss">
  @import '~@/style/_color';
  .installed-unit {
    display: flex;
    border: 1px solid $color-border;
    height: 60px;
    position: relative;
    padding: 6px 8px;

    &:not(:first-child) {
      border-top: 0;
    }
  }
</style>
