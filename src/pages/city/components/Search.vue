<template>
  <div class="search">
      <input class="search-input" placeholder="请输入城市名或者拼音" type="text" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .62rem
    background: $bgColor
    padding: .1rem .1rem
    .search-input
      height: 100%
      width: 100%
      line-height: 100%
      box-sizing: border-box
      text-align: center
      padding: 0 .1rem
      color: #666
      border-radius: .06rem
</style>
