<template>
  <div>
    <city-header></city-header>
    <div @click="showCityList" class="testButton">
      <button>
        这个用来测试异步加载组件
      </button>
    </div>
    <city-search :cities="cities"></city-search>
    <city-list v-if="sclOne" :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterClick"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
// import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList:() => import('./components/List'),
    CityAlphabet
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      console.log(res)
      const data = res.data.data
      console.log(data)
      this.cities = data.cities
      this.hotCities = data.hotCities
    },
    handleLetterClick (letter) {
      this.letter = letter
    },
    showCityList(){
      this.sclOne = true
      console.log('123')
    }
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      sclOne:false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .testButton
    height: .8rem
    line-height: .8rem
</style>
