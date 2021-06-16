<style lang="less" scoped>

</style>

<template>
   <div>
        <h4 class="ju">账户管理</h4>
        <div class="sb">
            <div>
                <Input type="text" v-model="keyword" placeholder="输入关键字搜索" style="width: 200px;margin-right: 10px;" />
                <Button class="blueBtn" @click="getData">搜索</Button>
            </div>
            <Button class="blueBtn" v-if="role==1" @click="addUser">创建新用户</Button>
        </div>
        <br>

        <Table :columns="columns" :data="dataList" :loading="loading">
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
            <Page :total="count" :current="limit" :page-size="offset" show-elevator show-total @on-change="chnagePage" />
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
            limit: 1,
            offset: 5,
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
        chnagePage (e) {
            this.limit = e
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
                url: "",
                params: {
                    offset: this.limit,
                    limit: this.offset,
                    id: this.keyword,
                }
            }).then(res => {
                if (res.data) {
                    this.dataList = res.data.reverse()
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

