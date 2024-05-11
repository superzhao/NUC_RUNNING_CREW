<template>
  <a-typography-title class="page-title">
    <img class="logo" src="@/assets/logo.png" />中北大学校友跑团2024年{{
      month
    }}月群视频抽奖</a-typography-title
  >
  <a-typography-title class="page-title-bg"></a-typography-title>

  <img class="bracelet" src="@/assets/1.jpeg" />
  <img class="bracelet bracelet1" src="@/assets/2.jpeg" />
  <div class="main">
    <a-table
      class="res-table"
      :dataSource="prizeData"
      :columns="columns"
      :pagination="false"
    >
    </a-table>
    <div class="prize-content">
      <a-space>
        <a-button type="primary" @click="startClick">开始</a-button>
        <a-button type="primary" @click="endClick">停止</a-button>
        <a-button @click="aginClick">重抽</a-button>
      </a-space>

      <a-typography-title :level="2" class="active-prize-name">
        <span>奖品：</span>
        <span v-if="prizeIndex > -1"> {{ prizeData[prizeIndex].prize }}</span>
        <span v-else>-</span>
        <span>&nbsp;&nbsp;</span>
        <span>中奖人排序：</span>
        <span v-if="luckyPepoleIndex > 0"> {{ pepoleData[luckyPepoleIndex] }}</span>
        <span v-else>-</span>
      </a-typography-title>
      <span
        v-for="(item, index) in pepoleData"
        :class="luckyPepoleIndex == index ? 'lucky-name  name' : 'name'"
      >
        第{{ item }}位
      </span>
      <p>
        <a-typography> 抽奖说明：</a-typography>

        <a-typography
          >1.{{ month }}月群视频人数：{{ pepoleData.length }}人，奖品：{{
            prizeData.length
          }}份。</a-typography
        >
        <a-typography>3.抽奖过程公平公正公开，欢迎参与和监督。</a-typography>
      </p>
      <p>
        <a-typography-text strong class="color-red mt-16">
          赞助说明：<br />4月群视频奖品由李赵赞助；<br />因跑团经费紧缺，真诚邀请跑团友爱人士为跑团赞助赞助费用或奖品，共同见证跑团的成长与美好～</a-typography-text
        >
        <!-- <a-typography-text strong class="color-red"><br>实名、匿名遵从个人意愿。</a-typography-text> -->
      </p>
    </div>
  </div>
</template>
<script>
var timer = null;
export default {
  data() {
    return {
      month: "4",
      pepoleNum: 15,
      luckyPepoleIndex: -1,
      prizeData: [
        {
          prize: "幸运奖｜定制手环",
          name: "-",
        },
      ],
      pepoleData: [],
      prizeIndex: -1,
      columns: [
        {
          title: "奖品",
          dataIndex: "prize",
          key: "prize",
        },
        {
          title: "中奖人排序",
          dataIndex: "name",
          key: "name",
        },
      ],
    };
  },
  mounted() {
    let pepoleData = [];
    for (let i = 0; i < this.pepoleNum; i++) {
      pepoleData.push(i + 1);
    }
    this.pepoleData = pepoleData;
  },
  methods: {
    startClick() {
      const _this = this;
      this.prizeIndex = this.prizeIndex + 1;
      timer = setInterval(() => {
        _this.luckyPepoleIndex = Math.floor(Math.random() * this.pepoleData.length);
      }, 100);
    },
    aginClick() {
      const _this = this;
      timer = setInterval(() => {
        _this.luckyPepoleIndex = Math.floor(Math.random() * this.pepoleData.length);
      }, 150);
    },
    endClick() {
      let prizeData = this.prizeData;
      prizeData[this.prizeIndex].name = this.pepoleData[this.luckyPepoleIndex];
      this.prizeData = prizeData;
      clearInterval(timer);
    },
  },
};
</script>
<style scope>
.main {
  width: 100%;
  height: 100%;
  display: flex;
}
.bracelet {
  position:absolute;
  top:200px;
  width:300px;
}
.bracelet1{
  top:500px;
}
.page-title {
  margin-bottom: 16px;
  text-align: center;
  background: -webkit-linear-gradient(45deg, #e0c462, #f2e08a); /* Chrome, Safari */
  background: linear-gradient(45deg, #e0c462, #f2e08a); /* 标准语法 */
  -webkit-background-clip: text; /* Chrome, Safari */
  background-clip: text;
  -webkit-text-fill-color: transparent; /* Chrome, Safari */
  color: transparent; /* 兼容不支持background-clip的浏览器 */
}
.logo {
  width: 55px;
  vertical-align: middle;
}
.page-title-bg {
  position: absolute;
  width: 100%;
  height: 55px;
  top: 0;
  z-index: -1;
  margin: 0 !important;
  background: #b71d23 !important;
}
.res-table {
  width: 28%;
  margin-right: 24px;
}
.prize-content {
  width: 70%;
}
.active-prize-name {
  margin-top: 16px !important;
  margin-bottom: 16px !important;
  white-space: nowrap;
}
.name {
  display: inline-block;
  width: 4em;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #b71d23;
  margin: 0 4px;
  border-radius: 4px;
  font-size: 20px;
}
.lucky-name {
  color: #fff;
  background: #b71d23 !important;
}
.ant-btn-primary {
  background: #b71d23 !important;
}
.ant-btn-default:not(:disabled):hover {
  color: #b71d23 !important;
  border-color: #b71d23 !important;
}
.color-red {
  color: #b71d23 !important;
}
.text-code {
  padding: 0 4px;
  background: #000;
  color: #fff;
}
.mt-16 {
  margin-top: 16px;
}
</style>
