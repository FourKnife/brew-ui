<template>
  <div class="app-list"></div>
</template>

<script>
  import AppListUnit from './AppList/AppListUnit.vue';

  export default {
    name: 'app-list',
    components: { AppListUnit },
    data() {
      return {
        appList: state.Apps.appList,
      };
    },
    methods: {},
  };
</script>
