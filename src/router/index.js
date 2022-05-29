/*
 * @Author: YuanQiii
 * @GitHub: https://github.com/YuanQiii
 * @Date: 2022-04-01 21:21:41
 * @FilePath: \ERP_Vue\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Login = () => import("@/views/login/Login.vue");
const wrongPage = () => import("@/views/404/wrongPage.vue");
const Layout = () => import("@/views/layout/Layout.vue");

const Home = () => import("@/views/home/Home.vue");

const SaleOrderList = () => import('@/views/orderTracking/sale/SaleOrderList')
const PurchaseOrderList = () => import('@/views/orderTracking/purchase/PurchaseOrderList')

export const constantRouterMap = [
  {
    path: "/login",
    name: "login",
    component: Login,
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: wrongPage,
    hidden: true,
  },
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
        meta: {
          title: "首页",
          icon: "home",
        },
      }],
  },
  {
    path: '/orderTracking',
    component: Layout,
    redirect: '/orderTracking/saleOrderList',
    name: 'orderTracking',
    hidden: false,
    meta: {
      title: '订单跟踪',
      icon: 'order'
    },
    children: [
      {
        path: 'saleOrderList',
        name: 'saleOrderList',
        component: SaleOrderList,
        meta: {
          title: '销售订单',
          icon: 'order'
        }
      },
      {
        path: 'purchaseOrderList',
        name: 'purchaseOrderList',
        component: PurchaseOrderList,
        meta: {
          title: '采购订单',
          icon: 'order'
        }
      },
    ]
  }

];

export const asyncRouterMap = [{
  path: "*",
  redirect: "/404",
  hidden: true,
},];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRouterMap,
});

export default router;