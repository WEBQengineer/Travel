<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .header
    line-height: $headerHeight
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
      color: #fff
      text-align: center
      float: right
      min-width: 1.04rem
      padding: 0 .1rem
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
