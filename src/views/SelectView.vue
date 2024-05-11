<template>
  <div class="select-main">
    <a-typography class="p-title">
      中北大学校友跑团北京分团 首届半程马拉松赛成绩公示</a-typography
    >
    <a-typography class="table-title"> 男运动员成绩</a-typography>
    <a-table :dataSource="mScoreData" :columns="columns" :pagination="false">
      <template #download="{ text, record }">
        <RouterLink :to="`/certificate?sex=m&ranking=${record.ranking}`"
          >证书{{ text }}</RouterLink
        >
      </template>
    </a-table>
    <a-typography class="table-title"> 女运动员成绩</a-typography>
    <a-table :dataSource="fScoreData" :columns="columns" :pagination="false">
      <template #download="{ text, record }">
        <RouterLink :to="`/certificate?sex=f&ranking=${record.ranking}`"
          >证书{{ text }}</RouterLink
        >
      </template>
    </a-table>
  </div>
</template>
<script>
var timer = null;
import scoreData from "../data/scoreData.js";
export default {
  data() {
    return {
      number: "",
      mScoreData: scoreData.m,
      fScoreData: scoreData.f,
      columns: [
        {
          title: "名次",
          dataIndex: "ranking",
          key: "ranking",
        },
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "参赛号",
          dataIndex: "number",
          key: "number",
        },
        {
          title: "成绩",
          dataIndex: "time",
          key: "time",
        },
        {
          title: "操作",
          dataIndex: "download",
          key: "download",
          slots: { customRender: "download" },
        },
      ],
    };
  },
  mounted() {},
  methods: {
    // startClick() {
    // },
  },
};
</script>
<style scope>
.select-main {
  width: 100%;
  height: 100%;
}

.logo {
  width: 55px;
  vertical-align: middle;
}

@media screen and (max-width: 600px) {
  body {
    height: 100%;
    width: 100%;
  }
  .p-title {
    font-size: 22px;
    text-align: center;
    width: 100%;
  }
  .table-title {
    font-size: 16px;
    text-align: center;
    width: 100%;
  }
  .select-main {
    padding: 16px;
  }
  .select {
    margin-top: 100px;
    text-align: center;
  }
}
</style>
