<template>
  <div class="intalled-list">
    <h2>已安装</h2>
    <div class="content">
      <installed-unit v-for="item in appList" :item="item"></installed-unit>
    </div>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="50"
      @current-change="changePage"
      class="pull-right"
    >
    </el-pagination>
  </div>
</template>

<script>
  import InstalledUnit from './Installed/InstalledUnit.vue';
  
  export default {
    components: { InstalledUnit },
    data() {
      return {
        pageNo: 1,
        pageSize: 8,
      };
    },
    computed: {
      appList() {
        return this.$store.state.Apps.appList;
      },
    },
    methods: {
      changePage(val) {
        this.pageNo = val;
        this.$store.dispatch('getLocalAppListPage', { pageNo: val, pageSize: this.pageSize });
      },
    },
    created() {
      return this.$store.dispatch('getLocalAppListPage', { pageNo: this.pageNo, pageSize: this.pageSize });
    },
  };
</script>

<style lang="scss">
  .intalled-list {
    width: 100%;
  }
  .content {
    width: 100%;
  }
</style>
