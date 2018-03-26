<template lang="html">
  <mt-header title="电商">
    <router-link :to="{name:''}" slot="right">
      <mt-button icon="search"></mt-button>
    </router-link>
  </mt-header>
</template>
<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';
.mint-header {
  padding: 6.8vw 4.8vw;
  background-color:#fff;
  color:#333;
  .fz(font-size, 40);
}
</style>
