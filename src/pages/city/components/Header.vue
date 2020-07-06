<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: relative
    background: $bgColor
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    font-size: .32rem
  .header-back
    position: absolute
    left: 0
    font-size: 0.4rem
    margin-left: .14rem
    color: #fff
</style>
