<template lang="html">
  <section class="car">
    <v-header>
      <h1 slot = "title">购物车</h1>
    </v-header>
    <v-something></v-something>
  </section>
</template>

<script>
import Header from '@/common/_header.vue'
import Something from '@/components/car/pay/something.vue'
export default {
  components: {
    'v-header': Header,
    'v-something': Something
  }
}
</script>

<style lang="less" scoped>
.car {
  background: pink;
}
</style>
