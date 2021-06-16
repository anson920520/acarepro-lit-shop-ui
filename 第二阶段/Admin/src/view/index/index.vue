@@ -0,0 +1,146 @@
<style lang="less" scoped>
.Index {
    height: 100vh;
    >div:first-child {
        border-bottom: solid #000 1px;
    }
}
.Wrap {
    display:flex;
    padding-top: 85px;
    >div {
        height: 100%;
        overflow-y: auto;
        box-sizing: border-box;
    }
    >div:first-child {
        width: 200px;
    }
    >div:last-child {
        flex: 10;
    }
}
.menuWrap {
    height: 100%;
    border-right: solid #000 1px;
}
.Main {
    padding: 30px 40px;
}
.p20 {
    padding: 15px 60px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: #FFF;
    z-index: 1;
    border-bottom: solid #000 1px;
}
.ml10 {
    margin-left: 10px;
}
.user {
    color: #000;
    margin-left: 10px;
}
</style>

<template>
<div class="Index columns ">
    <div>
        <header class="sb al p20">
            <div>
                <img src="@/assets/img/logo.png" width="80">
            </div>
            <div class="al">
                <img src="@/assets/img/ava.png" width="30" alt="">
                <div>
                    <Dropdown @on-click="onClick">
                        <a href="javascript:void(0)" class="user">
                            {{name}}
                            <Icon type="ios-arrow-down"></Icon>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem name="logout">登出</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </header>
    </div>
    <div class="Wrap">
        <div class="menuWrap noBar">
            <myMenu :list="list" @active="active" :activeName="activeName"></myMenu>
        </div>

        <div class="Main bar">
            <router-view></router-view>
        </div>
    </div>
</div>
   
</template>

<script>
// import menuList from "@/router/routes.ts"
export default {
    data () {
        return {
            activeName: "待确认订单",
            list: [
                {
                    path:"/index/order",
                    name: "待确认订单",
                    children: []
                },
                {
                    path:"/index/record",
                    name: "订单记录",
                    children: []
                },
                {
                    path:"/index/admin",
                    name: "管理员账户",
                    children: []
                },
                {
                    path:"/index/account",
                    name: "账户管理",
                    children: []
                },
                {
                    path:"/index/category",
                    name: "系列管理",
                    children: []
                },
                {
                    path:"/index/commodity",
                    name: "产品管理",
                    children: []
                },
                {
                    path:"/index/sale",
                    name: "业务负责人管理",
                    children: []
                },
                {
                    path:"/index/adv",
                    name: "广告管理",
                    children: []
                },
                
                {
                    path:"/",
                    name: "新闻",
                    children: [
                        {
                            path:"/index/newsCategory",
                            name: "新闻分类管理",
                            children: []
                        },
                        {
                            path:"/index/news",
                            name: "新闻管理",
                            children: []
                        },
                        
                    ]
                },
            ],
            name: "Administrator"
        }
    },
    watch: {
        "$route": {
            handler () {
                this.activeName = this.$route.meta.name
            },
            immediate: true
        },
    },
    created () {
        let name = localStorage.getItem("name")
        if (name) {
            this.name = name
        }
    },
    methods:{
        onClick (e) {
            if (e == "logout") {
                localStorage.removeItem("jwt")
                this.$router.replace("/login")
            }
        },
        active (menu) {
            this.$router.push(menu.path)
            // console.log(menu)
        },
        logout () {
            localStorage.removeItem("jwt")
            localStorage.removeItem("name")
            this.$router.replace("/login")
        },
    }
    
}
</script>
