export default [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path:"/login",
        name: "login",
        // redirect: "/index/order",
        component: () => import("@/view/login/login.vue")
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
                path:"/index/admin",
                name: "admin",
                meta: {
                    name: "管理员账户"
                },
                component: () => import("@/view/admin/admin.vue")
            },
            {
                path:"/index/admin/create",
                name: "adminCreate",
                meta: {
                    name: "创建管理员"
                },
                component: () => import("@/view/admin/create.vue")
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

            {
                path:"/index/newsCategory",
                name: "newsCategory",
                meta: {
                    name: "新闻分类管理"
                },
                component: () => import("@/view/newsCategory/newsCategory.vue")
            },
            {
                path:"/index/newsCategory/create",
                name: "newsCategoryCreate",
                meta: {
                    name: "新增新闻分类"
                },
                component: () => import("@/view/newsCategory/create.vue")
            },
            {
                path:"/index/news",
                name: "news",
                meta: {
                    name: "新闻管理"
                },
                component: () => import("@/view/news/news.vue")
            },
            {
                path:"/index/news/create",
                name: "newsCreate",
                meta: {
                    name: "新增新闻"
                },
                component: () => import("@/view/news/create.vue")
            },

            {
                path:"/index/adv",
                name: "adv",
                meta: {
                    name: "广告管理"
                },
                component: () => import("@/view/adv/adv.vue")
            },
            {
                path:"/index/adv/create",
                name: "advCreate",
                meta: {
                    name: "新增广告"
                },
                component: () => import("@/view/adv/create.vue")
            },

            {
                path:"/index/publicityCategory",
                name: "publicityCategory",
                meta: {
                    name: "宣传素材分类管理"
                },
                component: () => import("@/view/publicityCategory/publicityCategory.vue")
            },
            {
                path:"/index/publicityCategory/create",
                name: "publicityCategoryCreate",
                meta: {
                    name: "新增宣传素材分类"
                },
                component: () => import("@/view/publicityCategory/create.vue")
            },
            {
                path:"/index/publicity",
                name: "publicity",
                meta: {
                    name: "宣传素材管理"
                },
                component: () => import("@/view/publicity/publicity.vue")
            },
            {
                path:"/index/publicity/create",
                name: "publicityCreate",
                meta: {
                    name: "新增宣传素材"
                },
                component: () => import("@/view/publicity/create.vue")
            },

            {
                path:"/index/loop",
                name: "loop",
                meta: {
                    name: "轮播图管理"
                },
                component: () => import("@/view/loop/loop.vue")
            },
            {
                path:"/index/loop/create",
                name: "loopCreate",
                meta: {
                    name: "新增轮播图"
                },
                component: () => import("@/view/loop/create.vue")
            },




        ]
    },
    
    
]