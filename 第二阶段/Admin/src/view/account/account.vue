<style lang="less" scoped>

</style>

<template>
   <div>
        <h4 class="ju">账户管理</h4>
        <div class="sb">
            <div>
                <Input type="text" clearable @on-clear='getData' v-model="keyword" placeholder="输入公司名称搜索" style="width: 200px;margin-right: 10px;" />
                <Button class="blueBtn" @click="getData">搜索</Button>
            </div>
            <div class="sb">
                <Button class="blueBtn" v-if="role==1" @click="addUser">创建新用户</Button>
                <Button type="success" class="resetAll" @click="resetAll">重新整理</Button>
            </div>
            
        </div>
        <br>

        <Table :columns="columns" :data="dataList" :loading="loading" border>
            <template slot="action" slot-scope="{row}">
                <Dropdown @on-click="action($event, row)">
                    <a href="javascript:void(0)">
                        操作
                        <Icon type="ios-arrow-down"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem name="edit">编辑</DropdownItem>
                        <DropdownItem name="del">删除</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </template>
        </Table>
        <br>
        <div class="flex-end">
            <Page :total="count" :current="page" :page-size="offset" show-elevator show-total @on-change="chnagePage" />
        </div>
   </div>

</template>

<script>
export default {
    data () {
        return {
            columns: [
                { title: "公司",key: "company", align: 'center' },
                // { title: "地址",key: "address", align: 'center' },
                // { title: "负责人",key: "principal", align: 'center' },
                { title: "账号",key: "username", align: 'center' },
                { title: "密码",key: "password", align: 'center' },
                { title: "电话",key: "phone", align: 'center' },
                { title: "收件地址",key: "shipping", align: 'center', width: 350 },
                { title: "收件人",key: "receiver", align: 'center' },
                { title: "业务负责人",key: "sale", align: 'center' },
                { title: "操作", slot: "action" }
            ],
            dataList: [],
            loading: false,
            keyword:"",
            page: 1,
            offset: 20,
            count: 0,
        }
    },
    computed: {
        role () { return this.$store.state.role }
    },
    created () {
        if (this.role == 2) {
            this.columns.pop()
        }
        this.getData()
    },
    methods:{
        resetAll () {
            let that = this
            this.$Modal.confirm({
                title:"提示",
                content:"确定重新整理全部数据?",
                onOk() {
                    that.page = 1
                    that.getData()
                }
            })
        },
        chnagePage (e) {
            this.page = e
            this.getData()
        },
        action (e,item) {
            console.log(item)
            if (e == 'edit') {
                this.$router.push({
                    path: "/index/account/create",
                    query: {
                        id: item.ID
                    }
                })
            } 
            if (e == "del") {
                this.del(item)
            }
        },
        addUser () {
            this.$router.push("/index/account/create")
        },
        getData () {
            this.loading = true
            this.$axios({
                url: "fetch/user/",
                params: {
                    page: this.page,
                    offset: this.offset,
                    company: this.keyword,
                }
            }).then(res => {
                if (res.data.code == 200) {
                    this.dataList = res.data.data
                    this.count = res.data.all_count[0]
                } else {
                    this.dataList = []
                    this.count = 0
                }
                this.loading = false
            }).catch(e => {
                console.log(e)
                this.loading = false
            })
        },
        del (item) {
            let that = this
            that.$Modal.confirm({
                title: "提示!",
                content: "确定删除这条信息?",
                onOk () {
                    that.$axios({
                        url: "user/delete/" + item.ID,
                        method:"DELETE"
                    }).then(res => {
                        that.getData()
                    }).catch(e => {
                        console.log(e)
                        that.getData()
                    })
                }
            })
        }
    }
}
</script>

