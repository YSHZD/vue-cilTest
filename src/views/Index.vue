<template lang="html">
  <div class="index">
    <v-header></v-header>
    <v-swiper :swiperData="datas.swiper"></v-swiper>
    <v-service></v-service>
    <v-section1 :section1="datas.section1"></v-section1>
    <v-section2 :section2="datas.section2"></v-section2>
    <v-section3></v-section3>
    <v-section4 :section4="datas.section4"></v-section4>
    <v-footer></v-footer>
  </div>
</template>

<script>
import Header from '@/components/index/header.vue'
import Swiper from '@/components/index/swiper.vue'
import Service from '@/components/index/service.vue'
import Section1 from '@/components/index/section1.vue'
import Section2 from '@/components/index/section2.vue'
import Section3 from '@/components/index/section3.vue'
import Section4 from '@/components/index/section4'
import Footer from '@/common/_footer'
import index from '@/http/mock.js'
console.log(index)
export default {
  components: {
    'v-header': Header,
    'v-swiper': Swiper,
    'v-service': Service,
    'v-section1': Section1,
    'v-section2': Section2,
    'v-section3': Section3,
    'v-section4': Section4,
    'v-footer': Footer
  },
  data () {
    return {
      datas: '',
      loading: true
    }
  },
  beforeCreate () {
    this.$api({
      method: 'post',
      url: '/index'
    }).then((response) => {
      console.log(response)
      this.datas = response.data
    }).catch(function (error) {
      alert(error)
    })
  }
}
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  padding-bottom: 14vw;
  background-color: #F8FCFF;
}
</style>
