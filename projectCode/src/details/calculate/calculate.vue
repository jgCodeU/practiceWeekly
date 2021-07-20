<template>
  <div class="calculate">
    <div class="title">第k大元素</div>
    <div class="inputArea">
      <input class="inputArr" v-model="inputString" placeholder="输入数字序列，如：1,2,3,4..." />
    </div>

    <div class="inputkArea">
      <input class="inputK" v-model="k" placeholder="输入k" />
    </div>

    <div class="inputkArea">
      <div class="conversionButton" @click="stringToArr()">点击找到第k大的元素</div>
    </div>

    <div class="resultArea">
      <p class="resulTitle">结果为： {{ result }}</p>
    </div>

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
      // inputArr: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
      inputArr:[],//输入的数组
      inputString: '',//输入的字符串
      k: '', //寻找第k大的元素
      result:'-',//找到的结果
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
        
        // 检查并转换输入字符串
        for(let i = 0; i<this.inputArr.length ; i++){
          if(Number(this.inputArr[i])) {
            this.inputArr[i] = Number(this.inputArr[i]);
            // console.log(this.inputArr);
            continue;
          }
          alert('请检查输入');
          return;
        }

        // 检查并转换k
        if(Number(this.k)) {
            this.k = Number(this.k);
        } else {
          alert('请检查输入');
          return
        }

        if(this.inputArr.length < this.k) {
          alert('k不能大于数组长度');
          return;
        }
          

        this.findBiggestK();
    
    },
    // 使用冒泡排序，排k次即可
    findBiggestK() {
      console.log("输入数组", this.inputArr);
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
      this.result = this.inputArr[this.inputArr.length-this.k]
      console.log(`第${this.k}大的元素是`,this.result)
      
    },
  },
  mounted() {
    // this.findBiggestK();
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
.returnNavigation,
.inputkArea {
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: pink; */
}
.inputArr,
.inputK {
  /* background-color: rgb(143, 235, 135); */
  margin-right: 20px;
  width: 300px;
}
.conversionButton {
  background-color: pink;
  border: solid 1px #000;
}
.resulTitle {
}

.returnNavigation p {
  border: solid 1px #000;
  margin-top: 20px;
}
</style>