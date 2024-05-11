<template>
  <div class="wrap">
    <a-button class="btn" type="primary" @click="printBtn('.toImg2')">下载证书</a-button>
    <p>&nbsp;</p>
    <div class="toImg2">
      <img class="gj" src="@/assets/gj.png" />
      <div class="logo-wrap">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img class="logo" src="@/assets/logo_bj.png" />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <img class="logo" src="@/assets/logo_bj.png" />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <img class="logo" src="@/assets/logo_bj.png" />
          </a-col>
        </a-row>
      </div>
      <p class="gm-title">“某某某”杯中北大学校友跑团北京分团<br />首届半程马拉松赛</p>
      <div class="text-wrap">
        <p class="cjzs-title">成绩证书</p>
        <p class="cjzs-en-title">CERTIFICATE</p>
        <!-- <p class="cjzs-en-title">
          于2024年06月02日成功完成“某某某”杯中北大学校友跑团北京分团首届半程马拉松赛
        </p> -->
        <a-descriptions class="mt-36" :column="1">
          <a-descriptions-item label="名字">{{ myData.name }}</a-descriptions-item>
          <a-descriptions-item label="参赛号">{{ myData.number }}</a-descriptions-item>
          <a-descriptions-item label="性别">{{
            this.$route.query.sex == "m" ? "男" : "女"
          }}</a-descriptions-item>
          <a-descriptions-item label="成绩">{{ myData.time }}</a-descriptions-item>
          <!-- <a-descriptions-item label="平均配速">{{ myData.speed }}</a-descriptions-item> -->
          <a-descriptions-item label="排名">{{ myData.allRanking }}</a-descriptions-item>
          <a-descriptions-item label="性别排名">{{ myData.ranking }}</a-descriptions-item>
        </a-descriptions>
      </div>
      <div class="game-wrap">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">
              <p>组委会主任</p>
              <img class="name" src="@/assets/lz.jpeg" />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">
              <p>赛事总管</p>
              <img class="name" src="@/assets/lz.jpeg" />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box">
              <p>赛事执行委员</p>
              <img class="name" src="@/assets/lz.jpeg" />
            </div>
          </a-col>
          <a-col class="gutter-row" :span="6">
            <div class="gutter-box fz-12">
              <span> 中北大学校友跑团北京分团 </span><br />
              <span> 2024年06月02日 </span>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<style scope>
.wrap {
}

.toImg2 {
  position: relative;
  width: 600px;
  height:788px;
  margin: 0 auto;
  padding: 24px;
  background: #0a457d;
}
.toImg2 .gj {
  right: -40px;
  top: 53px;
  position: absolute;
  width: 300px;
  opacity: 0.3;
}
.toImg2 .logo-wrap {
  text-align: center;
  margin: 0 0 24px;
}
.toImg2 .gm-title {
  color: #fff;
  text-align: center;
  font-size: 32px;
  margin-bottom: 48px;
}

.toImg2 .cjzs-title {
  color: #0a457d;
  text-align: center;
  font-size: 32px;
}
.toImg2 .cjzs-en-title {
  color: #0a457d;
  text-align: center;
  font-size: 16px;
}
.text-wrap {
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 24px;
}
.text-wrap .ant-descriptions-item-container {
  justify-content: center !important;
}
.text-wrap .ant-descriptions-item-label {
  display: inline-block !important;
  text-align: right !important;
  width: 6em !important;
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
  margin-top: 16px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  padding: 16px 24px;
}
.game-wrap .name {
  width: 80px;
  border: none;
}
.mt-36 {
  margin-top: 36px;
}
.fz-12 {
  font-size: 12px !important;
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
        height: 788, //设置canvas的高度
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
