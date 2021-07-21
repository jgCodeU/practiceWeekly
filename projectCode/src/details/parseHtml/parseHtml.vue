
<template>
  <div class="calculate">
    <div class="returnNavigation" @click="returnNavigation()">
      <p>返回首页</p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import V1 from "./v1";
import engine from "./engine";
export default {
  name: "baseConversion",
  data() {
    return {
      tmpl: `<div class="newslist">
              <div class="img" v-if="info.showImage"><img src="{{image}}" /></div>
              <div class="date" v-if="info.showDate">{{info.name}}</div>
              <div class="img">{{info.name}}</div>
            </div>`,
    };
  },
  methods: {
    returnNavigation() {
      console.log("返回首页");
      
      router.push({
        name: "navigation",
      });
    },
  },
  mounted() {
    const v1 = new V1().mounted(this.$el);
    console.log('hjg--页面根元素',this.$el);
    console.log("v1", v1);
    v1.render(this.tmpl, {
      image: "https://www.baidu.com/img/flexible/logo/pc/result.png",
      info: { showImage: true, showDate: false, name: "模板解析" },
    });
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

.returnNavigation p {
  border: solid 1px #000;
  margin-top: 20px;
}
</style>
