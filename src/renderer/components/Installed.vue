<template>
  <div class="intalled-list">
    <h2>已安装</h2>
    <installed-unit v-for="item in appList" :item="item"></installed-unit>
    <el-pagination
      small
      layout="prev, pager, next"
      :total="50"
      @current-change="changePage"
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
        pageSize: 10,
      };
    },
    computed: {
      appList() {
        return this.$store.state.Apps.appList;
      },
      changePage(val) {
        console.log(val);
        this.pageNo = val;
        return this.pageNo;
      },
    },
    created() {
      return this.$store.dispatch('getLocalAppListPage');
    },
  };
</script>
