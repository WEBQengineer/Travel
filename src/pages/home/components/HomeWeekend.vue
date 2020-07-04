<template>
  <div>
    <div class="title">周末去哪儿</div>
    <div class="itemAll" v-for="item of itemList" :key="item.id">
      <div class="imgCon">
        <img class="weekendimg" :src="item.imgUrl" />
      </div>
      <p class="iteminfo" >{{item.info}}</p>
      <p class="itemdesc" >{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      itemList: [
        {
          id: '0001',
          imgUrl: '//img1.qunarzz.com/sight/p0/2005/5d/5d51e25c5812fef6a3.water.jpg_256x160_4fec2721.jpg',
          info: '天津之眼摩天轮',
          desc: '华灯初上，享受别样浪漫华灯初上'
        }, {
          id: '0002',
          imgUrl: '//img1.qunarzz.com/sight/p0/2005/5d/5d51e25c5812fef6a3.water.jpg_256x160_4fec2721.jpg',
          info: '天津之眼摩天轮',
          desc: '华灯初上，享受别样浪漫华灯初上'
        }
      ]
    }
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
      padding-bottom: 33.9%
      border-radius: .05rem
      .weekendimg
        width: 100%
    .iteminfo
      line-height: .5rem
      font-size: .32rem
      ellipsis()
    .itemdesc
      color: #ccc
      line-height: .5rem
      font-size: .28rem
      ellipsis()
</style>
