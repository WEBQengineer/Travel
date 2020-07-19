<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" placeholder="请输入城市名或者拼音" type="text" />
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class="search-item border-bottom"
        v-for="item of list"
        :key="item.id"
        @click="handleCityClick(item.name)"
      >
        {{item.name}}
      </li>
        <li class="search-item border-bottom" v-if="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      const coneLngth = this.list.length
      return (this.list.length && coneLngth>0)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city),
      this.$router.push('/'),
      this.keyWord = ''
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 ||
              value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
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
  .search-content
    z-index: 1
    position: absolute
    overflow: hidden
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>
