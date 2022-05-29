<template>
  <div class="order-list">
    <div class="container">
      <div class="head"><order-count /></div>
      <div class="table">
        <el-table :data="orderList" style="width: 100%">
          <el-table-column prop="id" label="序号"></el-table-column>
          <el-table-column
            prop="purchaseOrderSerial"
            label="采购订单编号"
          ></el-table-column>
          <el-table-column prop="supplier" label="供应商"></el-table-column>
          <el-table-column prop="materiel" label="物料"></el-table-column>
          <el-table-column prop="purchaseCount" label="数量"></el-table-column>
          <el-table-column prop="remarks" label="备注"></el-table-column>
          <el-table-column
            prop="deliveryDate"
            label="最迟交货日期"
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
  name: "PurchaseOrderList",
  filters: {
    formatStatus(value) {
      return value ? "已下单" : "待下单";
    },
  },
  computed: {
    circleStyle() {
      return this;
    },
  },
  data() {
    return {
      orderList: [
        {
          id: 1,
          purchaseOrderSerial: "DM20220529001A",
          supplier: "外壳-阿僧",
          materiel: "105*117Y 外壳",
          purchaseCount: 2000,
          remarks: "用耐指纹料打",
          deliveryDate: "2022-06-02",
          orderStatus: 0,
        },
        {
          id: 2,
          purchaseOrderSerial: "DM20220529002A",
          supplier: "外壳-阿僧",
          materiel: "105*117Y 外壳",
          purchaseCount: 2000,
          remarks: "用耐指纹料打",
          deliveryDate: "2022-06-02",
          orderStatus: 1,
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