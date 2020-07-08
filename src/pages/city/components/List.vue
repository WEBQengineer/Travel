<template>
  <div class="list" ref="wrapper">
    <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
            <div class="button-wrapper">
              <div class="button">北京</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
            <div class="item border-bottom">哈尔滨</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  . border-bottom
    &:after
      border-color: #ccc
  .list
    position: absolute
    overflow: hidden
    top: 1.68rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .45rem
      font-size: .26rem
      background: #eee
      color: #666
      padding-left: .3rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          text-align: center
          margin: .1rem
          padding: .1rem 0
          border: .02rem solid #ccc
          border-radius: .23rem
    .item-list
      .item
        padding-left: .1rem
        line-height: .76rem
</style>
