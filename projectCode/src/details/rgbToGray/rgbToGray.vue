<template>
  <div class="baseConversion">
    <div class="title">rgb转灰度</div>
    <!-- <div class="input"></div> -->
    <div class="inputArea">
      <!-- <input class="input" v-model="inputString" placeholder="输入十进制数字" /> -->
      <canvas id="myCanvas"></canvas>
      <div class="conversionButton" @click="base64Conversion()">转为灰度图</div>
    </div>

    <div class="resultArea">
      <p class="resulTitle">转换结果为： {{ result }}</p>
      <!-- <div class="result">{{ result }}</div> -->
    </div>

    <div class="returnNavigation" @click="returnNavigation()"><p>返回首页</p></div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "baseConversion",
  data() {
    return {
      inputString:"",//输入的字符串
      inputNum: "", //输入的数字
      result: "--", //转换完成后的结果
      // baseNumArr:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','+','/']
      baseNumArr:['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','+','/']
    };
  },
  methods: {
    returnNavigation() {
      console.log('返回首页');
      router.push({
        name: "navigation",
      });
    },

    base64Conversion(){
      // 检查输入
      if(isNaN(Number(this.inputString))) {
        alert('请检查输入');
        return;
      }

      this.inputNum = parseFloat(this.inputString)
      console.log('输入的数字',this.inputNum);
      // let param = this.inputNum;
      const absParam = Math.abs(this.inputString);//取绝对值
      let intNum = Math.floor(absParam);//提取整数部分
      let littleNum = absParam - intNum;//提取小数部分

      // 整数部分转换
      const intNumArr = [];
      let rest;
      // let loopCount = 0;
      let c = 10
      do {
        rest = intNum % 64;//计算本次余数
        intNum = Math.floor(intNum/64);//更新被除数
        console.log('intNum',intNum);
        console.log('rest',rest);
        // intNumArr[loopCount] = this.baseNumArr[rest];
        intNumArr.push(this.baseNumArr[rest]);
        c--;
      } while(intNum !== 0 && c>0)
      intNumArr.reverse();
      let intPart = intNumArr.join('');
      console.log('hjg__整数部分转换结果',intNumArr,intPart);

      // 小数部分转换
      // let d = 20;
      const litleNumArr = [];
      // while(littleNum !== 0 && d > 0){
      while(littleNum !== 0){
        // d--;
        let num1 = littleNum*64;
        let bit = Math.floor(num1);
        litleNumArr.push(this.baseNumArr[bit]);
        if (num1-Math.floor(num1)) {
          littleNum = num1-Math.floor(num1);
          continue;
        } else {
          break;
        }
      }
      if(littleNum === 0) {
        litleNumArr.push(0);
      }
      let ilittlePart = litleNumArr.join('');
      console.log('小数部分',litleNumArr,ilittlePart);

      this.result = intPart + '.' + ilittlePart;
      if(this.inputNum < 0) {
        this.result = '-' + this.result;
      }
      console.log('最终结果：',this.inputNum);
      
    }
  },
  mounted() {
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.baseConversion {
  position: relative;
}
.title {
  position: relative;
  left: 0;
  right: 0;
  height: 80px;
  background-color: skyblue;
  text-align: center;
  font-size: 50px;
}
.inputArea,
.resultArea,
.returnNavigation {
  position: relative;
  top: 20px;
  display: flex;
  justify-content: center;
  /* background-color: pink; */
}
.input {
  /* background-color: rgb(143, 235, 135); */
  margin-right: 20px;
}
.conversionButton {
  background-color: pink;
}
.resulTitle {
}

.returnNavigation p {
  border: solid 1px #000;
}


</style>
