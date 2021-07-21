<template>
  <div class="navigation">
      <div class="baseConversion" @click="goBaseConversion">进制转换</div>
      <!-- <div class="rgbToGray" @click="goRgbToGray">rgb转灰度</div> -->
      <div class="calculate" @click="goCalculate">第k大元素</div>
      <div class="parseHtml" @click="goParseHtml">模板解析</div>
  </div>
  
</template>

<script>
import router from '@/router';
export default {
  name: 'navigation',
  data () {
    return {
    }
  },
  methods:{
      goBaseConversion() {
          router.push({
              name : 'baseConversion'
          })
      },
      goRgbToGray() {
          router.push({
              name : 'rgbToGray' 
          })
      },
      goCalculate() {
          router.push({
              name : 'calculate' 
          })
      },
      goParseHtml() {
          router.push({
              name:'parseHtml'
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    * {
        padding: 0;
        margin: 0;
    }
    .baseConversion,
    .rgbToGray,
    .calculate,
    .parseHtml {
        position: relative;
        margin-top: 20px;
        width: 100px;
        height: 50px;
        border: 2px solid #000;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>