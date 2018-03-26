<template>
  <router-link :to="{name:'登入',params:{}}" class="login">
    <span>登录后享受。。。</span>
    <span>去登入</span>
  </router-link>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4vw 6vw;
  color: #333;
  .bd();
  span {
    letter-spacing: .2vw;
  }
  span:last-of-type {
    color: rgba(0, 0, 0, .54);
    position: relative;
    .fz(font-size,26);
    padding-right: 2vw;
    &::after {
      content: '';
      position: absolute;
      right: -.8vw;
      top: 46%;
      width: 1.8vw;
      height:1.8vw;
      border-left: 1px solid currentColor;
      border-top: 1px solid currentColor;
      transform: translate3d(0, -50%, 0) rotateZ(135deg);
    }
  }
}
</style>
