<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/DetailList'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '学生票',
        children: [{
          title: '成人三馆联票',
          children: [{
            title: '特别优惠'
          }]
        },{
          title: '成人五馆联票'
        }]
      },{
        title: '儿童票'
      },{
        title: '特惠票'
      },{
        title: '成人票'
      }]
    }
  }
}
</script>

<style lang='stylus' scoped>
  .content
    height: 20rem
</style>
