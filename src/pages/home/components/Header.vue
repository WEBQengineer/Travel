<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    line-height: .86rem
    background: #00bcd4
    color: #fff
    display: flex
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size : .4rem
    .header-right
      width: 1.24rem
      text-align: center
      float: right
      .arrow-icon
        font-size: .24rem
    .header-input
      background: #fff
      color: #ccc
      padding-left: .1rem
      margin-top: .12rem
      margin-left: .1rem
      height: .62rem
      line-height: .62rem
      border-radius: .1rem
      flex: 1
</style>
