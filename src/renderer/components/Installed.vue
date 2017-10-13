<template>
  <div class="intalled-list">
    <h2>已安装</h2>
    <installed-unit></installed-unit>
  </div>
</template>

<script>
  import InstalledUnit from './Installed/InstalledUnit.vue';

  export default {
    components: { InstalledUnit },
  };
</script>
