<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon">
          <div class="iconimg">
            <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png"/>
          </div>
          <p class="icon-desc">酒店</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <div class="iconimg">
            <img class="icon-img-content" src="//s.qunarzz.com/homenode/images/touchheader/hotel.png"/>
          </div>
          <p class="icon-desc">酒店</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      height: 0
      width: 25%
      padding-bottom: 25%
      float: left
      .iconimg
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        text-align: center
        position: absolute
        bottom: 0
        left: 0
        right: 0
        height: .44rem
        line-height: .44rem
        color: $darkTextColor
</style>
