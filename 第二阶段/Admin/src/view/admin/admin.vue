<style lang="less" scoped>

</style>

<template>
   <div>
        <h4 class="ju">管理员账户</h4>
        <div v-if="role==1">
            <Button class="blueBtn" @click="addUser">创建管理员</Button>
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

            <template slot="role" slot-scope="{row}">
                <span >{{row.role}}</span>
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
                { title: "名称",key: "name", align: 'center' },
                { title: "账号",key: "username", align: 'center' },
                { title: "等级",slot: "role", align: 'center' },
                { title: "操作", slot: "action", align: 'center' }
            ],
            dataList: [],
            loading: false,
            page: 1,
            offset: 99999,
            count: 0,
        }
    },
    created () {
        if (this.role == 2) {
            this.columns.pop()
        }
        this.getData()
    },
    computed: {
        role () { return this.$store.state.role }
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
                    path: "/index/admin/create",
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
            this.$router.push("/index/admin/create")
        },
        getData () {
            this.loading = true
            this.$axios({
                url: "getAdmin/",
                method:"GET",
                params: {
                    offset: this.page,
                    limit: this.offset
                }
            }).then(res => {
                if (res.data.code == 200) {
                    this.dataList = res.data.data
                }
                this.loading = false
            }).catch(e => {
                console.log(e)
                this.loading = false
                this.dataList = e.response.data.data
            })
        },
        del (item) {
            let that = this
            that.$Modal.confirm({
                title: "提示!",
                content: "确定删除这条信息?",
                onOk () {
                    that.$axios({
                        url: "deleteAdmin/",
                        method:"DELETE",
                        data: {
                            id: item.ID
                        }
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

