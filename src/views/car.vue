<template lang="html">
  <section class="car">
    <v-header>
      <h1 slot = "title">购物车</h1>
    </v-header>
    <v-something></v-something>
    <v-footer></v-footer>
  </section>
</template>

<script>
import Header from '@/common/_header.vue'
import Something from '@/components/car/something.vue'
import Footer from '@/components/car/footer.vue'
export default {
  components: {
    'v-header': Header,
    'v-something': Something,
    'v-footer': Footer
  }
}
</script>

<style lang="less" scoped>
.car {
}
</style>
