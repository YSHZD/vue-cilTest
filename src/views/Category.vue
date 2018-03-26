<template lang="html">
  <div class="wrap">
    <v-header class="header">
      <h1 slot="title">商品分类</h1>
    </v-header>
    <section class="view">
      <v-aside :datas="allData"></v-aside>
      <router-view :datas="allData"></router-view>
    </section>
  </div>
</template>

<script>
import Header from '@/common/_header'
import Aside from '@/components/category/aside'
import category from '@/http/mock.js'
console.log(category)
export default {
  data () {
    return {
      allData: ''
    }
  },
  components: {
    'v-header': Header,
    'v-aside': Aside
  },
  beforeCreate () {
    this.$api({
      method: 'post',
      url: '/category'
    }).then((res) => {
      this.allData = res.data
      console.log(this.allData.aside)
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style lang="less" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  .view {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
}
</style>
