<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="i in swiper" :key="i.id">
        <img :src="i.imgPath">
      </mt-swipe-item>
    </mt-swipe>
    <div class="back" @click="$router.go(-1)">
      <span class="icon-go"></span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    swiper () {
      return this.$store.state.detail.productDatas.swiper
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';
.swiper {
  width: 1005;
  position: relative;
  .mint-swipe {
    width: 100%;
    height: 100vw;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .back {
    width: 8vw;
    height: 8vw;
    position: absolute;
    top: 2vw;
    left: 4vw;
    background-color:#ededed;
    border-radius: 50%;
    text-align: center;
      span {
        display: inline-block;
        line-height: 8vw;
        .fz(font-size, 40);
        transform: rotate(-180deg);
        &::before {
          color: red;
        }
      }
  }
}
</style>
