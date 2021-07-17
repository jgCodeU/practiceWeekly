<template>
  <div class="calculate">
    <div class="title">算法练习</div>
    <!-- <div class="input"></div> -->
    <div class="inputArea">
      <input class="input" v-model="inputString" placeholder="输入数字序列，如：1,2,3,4..." />
      <div class="conversionButton" @click="stringToArr()">找到第3大的元素</div>
    </div>

    <!-- <div class="resultArea">
      <p class="resulTitle">转换结果为： {{ result }}</p>
      <div class="result">{{ result }}</div>
    </div> -->

    <div class="returnNavigation" @click="returnNavigation()">
      <p>返回首页</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "calculate",
  data() {
    return {
      //   inputArr: [1, 3, 2, 5, 7, 9, 4, 6, 8, 10], //输入的数组?
      inputArr: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      inputString: '',//输入的字符串
      k: 9, //寻找第k大的元素
    };
  },
  methods: {
    returnNavigation() {
      console.log("返回首页");
      router.push({
        name: "navigation",
      });
    },
    // 将输入的字符串转化为数组
    stringToArr() {
        console.log('输入的字符串', this.inputString);
        this.inputArr = this.inputString.split(',');
        console.log('转换为数组' , this.inputArr);
    
    },
    // 使用冒泡排序，排k次即可
    findBiggestK() {
      //   if (this.inputArr.length < k) {
      //     return;
      //   }
      console.log("输入数组", this.inputArr);
      //   for (let j = 0; j < this.inputArr.length - 1; j++) {
      for (let j = 0; j < this.k; j++) {
        for (let i = 0; i < this.inputArr.length; i++) {
          let temp;
          if (this.inputArr[i + 1] < this.inputArr[i]) {
            temp = this.inputArr[i + 1];
            this.inputArr[i + 1] = this.inputArr[i];
            this.inputArr[i] = temp;
          }
        }
      }
      console.log(this.inputArr);
      console.log(`第${this.k}大的元素是`,this.inputArr[this.inputArr.length-this.k])
    },
  },
  mounted() {
    this.findBiggestK();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.calculate {
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