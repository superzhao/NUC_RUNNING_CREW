<template>
  <div class="wrap">
    <a-button class="btn" type="primary" @click="printBtn('.toImg2')">下载证书</a-button>
    <p>&nbsp;</p>
    <div class="toImg2">
      <img class="zb-logo" src="@/assets/xiaohui.png" />
      <img class="gj" src="@/assets/gj.png" />
      <!-- <div class="logo-wrap">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img class="logo" src="@/assets/logo_min.jpeg" />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img class="logo" src="@/assets/logo_min.jpeg" />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <img class="logo" src="@/assets/logo_min.jpeg" />
          </a-col>
        </a-row>
      </div> -->
      <p class="gm-title">“某某某”杯中北大学校友跑团北京分团<br />首届半程马拉松赛</p>
      <p class="cjzs-title">
        <span>成绩证书</span>
      </p>
      <p class="cjzs-en-title">CERTIFICATE</p>
      <main>
        <div class="text-wrap">
          <!-- <p class="cjzs-en-title">
          于2024年06月02日成功完成“某某某”杯中北大学校友跑团北京分团首届半程马拉松赛
        </p> -->
          <a-descriptions class="" :column="1">
            <a-descriptions-item label="姓名">{{ myData.name }}</a-descriptions-item>
            <a-descriptions-item label="性别">{{
              this.$route.query.sex == "m" ? "男" : "女"
            }}</a-descriptions-item>
            <a-descriptions-item label="参赛号码">{{
              myData.number
            }}</a-descriptions-item>

            <a-descriptions-item label="枪声成绩">{{ myData.time }}</a-descriptions-item>
            <!-- <a-descriptions-item label="平均配速">{{ myData.speed }}</a-descriptions-item> -->
            <a-descriptions-item label="性别排名">{{
              myData.ranking
            }}</a-descriptions-item>
            <a-descriptions-item label="全部选手排名">{{
              myData.allRanking
            }}</a-descriptions-item>
          </a-descriptions>
        </div>
        <div class="game-wrap">
          <a-row :gutter="16" align="top">
            <a-col class="gutter-row" :span="9">
              <div class="gutter-box logo-box">
                <span>运营单位:</span>
                <img src="@/assets/logo_min.jpeg" />
              </div>
              <div class="gutter-box logo-box">
                <span>冠名赞助商:</span>
                <img src="@/assets/logo_min.jpeg" />
              </div>
              <div class="gutter-box logo-box">
                <span>官方赞助商:</span>
                <img src="@/assets/logo_min.jpeg" />
              </div>
            </a-col>
            <a-col class="gutter-row" :span="10">
              <div class="gutter-box name-box">
                <span>组委会主任:</span>
                <img src="@/assets/logo_min.jpeg" />
              </div>
              <div class="gutter-box name-box yn">
                <span>赛事总监:</span>
                <img src="@/assets/yn.png" />
              </div>
              <div class="gutter-box name-box">
                <span>赛事执行委员:</span>
                <img src="@/assets/logo_min.jpeg" />
              </div>
            </a-col>
            <a-col class="gutter-row" :span="5">
              <div class="gutter-box zhang-box">
                <span>2024年06月02日</span>
                <img src="@/assets/zhang.jpeg" />
              </div>
            </a-col>
          </a-row>
        </div>
      </main>
    </div>
  </div>
</template>

<style scope>
.wrap {
}

.toImg2 {
  position: relative;
  width: 600px;
  height: 708px;
  margin: 0 auto;
  padding: 24px;
  background: #b71d23;
}
.toImg2 .zb-logo {
  position: absolute;
  z-index: 0;
  top: 20px;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  opacity: 0.3;
}
.toImg2 .gj {
  left: 50%;
  top: 270px;
  position: absolute;
  width: 440px;
  opacity: 1;
  margin-left: -220px;
  z-index: 1;
}
.toImg2 .logo-wrap {
  text-align: center;
  margin: 0 0 24px;
}
.toImg2 .gm-title {
  position: relative;
  z-index1: 1;
  color: #fff;
  text-align: center;
  font-size: 32px;
  margin-bottom: 12px;
}

.toImg2 .cjzs-title {
  position: relative;
  color: #fff;
  text-align: center;
  font-size: 40px;
}
.toImg2 .cjzs-title span {
  position: relative;
}
.toImg2 .cjzs-title span::before {
  position: absolute;
  content: "";
  width: 100px;
  height: 1px;
  left: -124px;
  top: 50%;
  background: #fff;
}
.toImg2 .cjzs-title span::after {
  position: absolute;
  content: "";
  width: 100px;
  height: 1px;
  right: -124px;
  top: 50%;
  background: #fff;
}
.toImg2 .cjzs-en-title {
  color: #fff;
  text-align: center;
  font-size: 16px;
}
main {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 24px;
  margin-top: 24px;
}
.text-wrap {
  position: relative;
  z-index: 1;
  border: 1px solid rgba(188, 29, 35, 0.9);
  border-radius: 8px;
  padding: 16px 16px 0;
}
.text-wrap .ant-descriptions-item-container {
  justify-content: center !important;
}
.text-wrap .ant-descriptions-item-label {
  display: inline-block !important;
  text-align: right !important;
  width: 8em !important;
  padding-right: 1em;
}
.text-wrap .ant-descriptions-item-content {
  display: inline-block !important;
  text-align: left !important;
  width: 8em !important;
  flex: none !important;
  border-bottom: 1px dashed;
  padding-left: 1em;
}
.game-wrap {
  padding-top: 16px;
}
.gutter-box{
  height:40px;
  line-height: 40px;
}
.logo-box img {
  width: 80px;
  margin-bottom: 8px;
  border: none;
  vertical-align: top;
}
.gutter-box span {
  display: inline-block;
  width: 6.5em;
}
.name-box img {
  width: 80px;
  margin-bottom: 8px;
  border: none;
  vertical-align: middle;
}
.name-box.yn img {
  transform: rotate(-90deg);
  width: 20px;
}
.zhang-box {
  position: relative;
  width: 100%;
  height: 100%;
}
.zhang-box span {
  position: absolute;
  top: 45px;
  z-index: 1;
  font-size: 12px;
  text-wrap: nowrap;
}
.zhang-box img {
  width: 102px;
  z-index: 2;
  position: absolute;
  top: 50%;
}

@media screen and (max-width: 600px) {
  body {
    height: 100%;
    width: 100%;
  }

  .wrap {
    height: 100%;
    width: 100%;
  }
  .btn {
    margin: 0 auto;
  }
  .select {
    margin-top: 100px;
    text-align: center;
  }
  .toImg2 {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    border: 3px solid red;
  }
  .logo {
  }
}
</style>

<script>
var timer = null;
import html2canvas from "html2canvas";
import scoreData from "../data/scoreData.js";
export default {
  data() {
    return {
      scoreData: scoreData,
      sex: "m",
      ranking: "1",
    };
  },
  mounted() {},
  computed: {
    myData() {
      const { sex, ranking } = this.$route.query;
      return scoreData[sex][ranking - 1];
    },
  },
  methods: {
    // printCharts.vue
    async printBtn(img) {
      const card = document.querySelector(img); //img 为要下载图片的dom元素
      const canvas = await html2canvas(card, {
        width: 600, //设置canvas的宽度
        height: 708, //设置canvas的高度
        useCORS: true, // 【重要】开启跨域配置
        allowTaint: true, // 允许跨域图片
      }); // 创建一个临时的a标签
      let a = document.createElement("a");
      document.body.appendChild(a);

      // 为a标签添加属性
      a.setAttribute("href", canvas.toDataURL("image/jpg", 1.0)); //toDataUrl：将canvas画布信息转化为base64格式图片
      a.setAttribute("download", `${this.myData.name}证书.png`); //导出图片名称
      a.setAttribute("target", "_self"); // 在当前窗口中打开
      a.click(); // 同时调用a标签的点击事件

      // 最后删除该临时节点
      document.body.removeChild(a);
    },
  },
};
</script>
