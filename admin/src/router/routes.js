export default [
    {
        path: "/",
        redirect: "/index/order"
    },
    {
        path:"/index",
        name: "index",
        redirect: "/index/order",
        component: () => import("@/view/index/index.vue"),
        children: [
            {
                path:"/index/order",
                name: "order",
                meta: {
                    name:"待确认订单"
                },
                component: () => import("@/view/order/order.vue")
            },
            {
                path:"/index/order/detail",
                name: "orderDetail",
                meta: {
                    name:"编辑订单"
                },
                component: () => import("@/view/order/orderDetail.vue")
            },
            {
                path:"/index/record",
                name: "record",
                meta: {
                    name: "订单记录"
                },
                component: () => import("@/view/record/record.vue")
            },
            {
                path:"/index/account",
                name: "account",
                meta: {
                    name: "账户管理"
                },
                component: () => import("@/view/account/account.vue")
            },
            {
                path:"/index/account/create",
                name: "accountCreate",
                meta: {
                    name: "创建账户"
                },
                component: () => import("@/view/account/create.vue")
            },
            {
                path:"/index/category",
                name: "category",
                meta: {
                    name: "系列管理"
                },
                component: () => import("@/view/category/category.vue")
            },
            {
                path:"/index/category/create",
                name: "categoryCreate",
                meta: {
                    name: "新增系列"
                },
                component: () => import("@/view/category/create.vue")
            },
            {
                path:"/index/commodity",
                name: "commodity",
                meta: {
                    name: "产品管理"
                },
                component: () => import("@/view/commodity/commodity.vue")
            },
            {
                path:"/index/commodity/create",
                name: "commodityCreate",
                meta: {
                    name: "新增产品"
                },
                component: () => import("@/view/commodity/create.vue")
            },
            {
                path:"/index/sale",
                name: "sale",
                meta: {
                    name: "业务负责人管理"
                },
                component: () => import("@/view/sale/sale.vue")
            },
            {
                path:"/index/sale/create",
                name: "saleCreate",
                meta: {
                    name: "新增业务负责人"
                },
                component: () => import("@/view/sale/create.vue")
            },
        ]
    },
    // {
    //     path:"/login",
    //     name: "login",
    //     redirect: "/index/order",
    //     component: () => import("@/view/login/login.vue")
    // },
    
]