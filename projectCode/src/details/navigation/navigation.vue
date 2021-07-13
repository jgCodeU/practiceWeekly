<template>
  <div class="navigation">
      <div class="baseConversion" @click="goBaseConversion">进制转换</div>
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
    .baseConversion {
        position: relative;
        width: 100px;
        height: 50px;
        border: 2px solid #000;

        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>