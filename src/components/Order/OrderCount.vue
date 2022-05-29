<template>
  <div class="order-count">
    <el-card class="card" v-for="(item, index) in countList" :key="index">
      <div class="container">
        <svg-icon icon-class="order" class="icon" />
        <div class="text">
          <div class="count">{{ item[Object.keys(item)[0]] }}</div>
          <div class="desc">{{ Object.keys(item)[0] }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import SvgIcon from "../svgIcon/SvgIcon.vue";
export default {
  name: "OrderCount",
  components: {
    SvgIcon,
  },
  data() {
    return {
      countList: [{ 总订单: 99999 }, { 生产中: 99 }, { 采购订单: 9 }],
    };
  },
};
</script>

<style lang="less" scoped>
.order-count {
  .card {
    width: 180px;
    display: inline-block;
    margin-right: 50px;
    .container {
      display: flex;
      align-items: center;
      .icon {
        font-size: 30px;
        color: #409eff;
      }
      .text {
        margin-left: 10px;
        .count {
          font-size: 30px;
          font-weight: bolder;
        }
        .desc {
          font-size: 12px;
          color: #aaa;
        }
      }
    }
  }
}
</style>