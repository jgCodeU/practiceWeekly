<template>
  <div class="baseConversion">
    <div class="title">进制转换</div>
    <!-- <div class="input"></div> -->
    <div class="inputArea">
      <input class="input" v-model="inputNum" placeholder="输入十进制数字" />
      <div class="conversionButton">转为64进制</div>
    </div>

    <div class="resultArea">
      <p class="resulTitle">转换结果为： {{ result }}</p>
      <div class="result">{{ result }}</div>
    </div>

    <div class="returnNavigatioN" @click="returnNavigatioN()">返回首页</div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "baseConversion",
  data() {
    return {
      inputNum: "", //输入的数字
      result: "", //转换完成后的结果
    };
  },
  methods: {
    returnNavigatioN() {
      router.push({
        name: "navigation",
      });
    },
  },
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
.resultArea {
  position: relative;
  top: 20px;
  /* left: 100px; */
  /* right: 100px; */
  display: flex;
  justify-content: center;
  /* background-color: pink; */
}
.input {
  /* background-color: rgb(143, 235, 135); */
  margin-right: 20px;
}
.conversionButton {
  /* background-color: rgb(172, 106, 248); */
}
.resulTitle {
}
</style>
