<template>
  <div class="order-list">
    <div class="container">
      <div class="head"><order-count /></div>
      <div class="table">
        <el-table :data="orderList" style="width: 100%">
          <el-table-column prop="id" label="序号"></el-table-column>
          <el-table-column
            prop="productionOrderSerial"
            label="生产订单编号"
          ></el-table-column>
          <el-table-column prop="customer" label="客户名称"></el-table-column>
          <el-table-column
            prop="productCount"
            label="总产品数量"
          ></el-table-column>
          <el-table-column prop="orderDate" label="下单日期"></el-table-column>
          <el-table-column
            prop="deliveryDate"
            label="交货日期"
          ></el-table-column>
          <el-table-column label="订单状态">
            <template slot-scope="scope">
              <div
                class="circle"
                :style="getCircleStyle(scope.row.orderStatus)"
              ></div>
              <span>{{ scope.row.orderStatus | formatStatus }}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <pagination :pageConfig="pageConfig" :total="total" />
      </div>
    </div>
  </div>
</template>

<script>
import OrderCount from "@/components/Order/OrderCount.vue";
import Pagination from "../../../components/pagination/Pagination.vue";
export default {
  components: { OrderCount, Pagination },
  name: "SaleOrderList",
  filters: {
    formatStatus(value) {
      return value ? "待发货" : "待生产";
    },
  },
  data() {
    return {
      orderList: [
        {
          id: 0,
          productionOrderSerial: "DM20220529001",
          customer: "十堰-弗列加",
          productCount: 2001,
          orderDate: "2022-05-29",
          deliveryDate: "2022-06-29",
          orderStatus: 1,
        },
        {
          id: 1,
          productionOrderSerial: "DM20220529001",
          customer: "十堰-弗列加",
          productCount: 2001,
          orderDate: "2022-05-29",
          deliveryDate: "2022-06-29",
          orderStatus: 0,
        },
      ],
      pageConfig: {
        pageSize: 10,
        pageNum: 1,
      },
      total: 2,
    };
  },
  methods: {
    getCircleStyle(value) {
      return `background-color: ${value ? "green" : "red"}`;
    },
  },
};
</script>


<style lang="less" scoped>
.order-list {
  .container {
    .head {
      margin-bottom: 40px;
    }
    .pagination {
      margin-top: 40px;
      float: right;
    }
  }
  .circle {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }
}
</style>