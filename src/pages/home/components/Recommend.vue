<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of itemList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.itemtitle}}</p>
          <p class="item-desc">{{item.itemdesc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      itemList: [
        {
          id: '0001',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          itemtitle: '大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界大连圣亚海洋世界',
          itemdesc: '浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园浪漫大连首站，浪漫的海洋主题乐园'
        }, {
          id: '0001',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          itemtitle: '大连圣亚海洋世界',
          itemdesc: '浪漫大连首站，浪漫的海洋主题乐园'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    margin-top: .2rem
    line-height: .7rem
    text-indent: .2rem
    background: #eee
  .item
    display: flex
    overflow: hidden
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .3rem
        border-radius: .06rem
        color: #fff
</style>
