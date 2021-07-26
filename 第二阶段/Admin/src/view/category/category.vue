<style lang="less" scoped>
.width80 {
    width: 80%;
}

</style>

<template>
    <div>
        <h4 class="ju">系列管理</h4>
        <br>
        <div class="sb">
            <div></div>
            <div class="al">
                <Button class="blueBtn" @click="toAdd" v-if="role==1">新增系列</Button>
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
                { title: "系列名称",key: "Name", align: 'center' },
                // { title: "促销政策",key: "Desc", align: 'center' },
                // { title: "优惠数量",key: "Promotion", align: 'center' },
                { title: "操作", slot: "action", align: 'center' }
            ],
            dataList: [],
            loading: false,
            id: "",
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
        // this.getData()
    },
    watch: {
        "$route": {
            handler (val) {
                if (val.query.page) {
                    this.page = val.query.page * 1
                    this.getData()
                } else {
                    console.log(val)
                    this.$router.push(val.path + "?page=1")
                }
            },
            immediate: true
        },
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
            this.$router.push(this.$route.path + "?page=" + e)
            document.getElementsByClassName("Main")[0].scrollTop = 0
        },
        toAdd () {
            this.$router.push("/index/category/create")
        },
        getData () {
            this.loading=true
            this.$axios({
                url: "category",
                params: {
                    page: this.page,
                    offset: this.offset
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
        action (e,item) {
            console.log(item)
            if (e == 'edit') {
                this.$router.push({
                    path: "/index/category/create",
                    query: {
                        id: item.ID
                    }
                })
            } 
            if (e == "del") {
                this.del(item)
            }
        },
        del (item) {
            let that = this
            that.$Modal.confirm({
                title: "提示!",
                content: "确定删除这条信息?",
                onOk () {
                    that.$axios({
                        url: "category/delete/" + item.ID,
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

