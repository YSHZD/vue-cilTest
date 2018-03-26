<template>
  <div class="detail">
    <v-swiper></v-swiper>
    <v-chose></v-chose>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Swiper from '@/components/detail/swiper'
import Chose from '@/components/detail/chose'
import Footer from '@/components/detail/footer'
export default {
  components: {
    'v-swiper': Swiper,
    'v-chose': Chose,
    'v-footer': Footer
  },
  beforeCreate () {
    this.$store.dispatch('setDatas')
  }
}
</script>

<style scoped>
.detail {
  width: 100%;
  padding-bottom: 14vw;
}
</style>
