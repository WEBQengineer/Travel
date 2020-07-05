<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="itemAll" v-for="item of weekendList" :key="item.id">
      <div class="imgCon">
        <img class="weekendimg" :src="item.imgUrl" />
      </div>
      <p class="itemtitle" >{{item.title}}</p>
      <p class="itemdesc" >{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {}
  },
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .7rem
    background: #eee
  .itemAll
    margin: .05rem
    .imgCon
      overflow: hidden
      height: 0
      padding-bottom: 37.09%
      border-radius: .05rem
      .weekendimg
        width: 100%
    .itemtitle
      line-height: .5rem
      font-size: .32rem
      ellipsis()
    .itemdesc
      color: #ccc
      line-height: .5rem
      font-size: .28rem
      ellipsis()
</style>
