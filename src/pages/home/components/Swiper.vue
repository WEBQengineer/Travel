<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swaper-img"  :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e52c3e98602b90f198ec316dce253cba.jpg?thumb=1&w=2452&h=920&f=webp&q=90'
      }, {
        id: '0002',
        imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/29d0a0b83843d7d1ba7a30a9400257e9.jpg?thumb=1&w=2452&h=920&f=webp&q=90'
      }, {
        id: '0003',
        imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6ef43cf9f138a7fc3a39273d7e3d13b6.jpg?thumb=1&w=2452&h=920&f=webp&q=90'
      }]
    }
  }
  // data: function () {
  //   return {
  //     swiperOption: {}
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 38%
    background: #eee
    .swaper-img
      width: 100%
</style>
