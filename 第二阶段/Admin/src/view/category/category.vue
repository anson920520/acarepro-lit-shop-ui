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

            <Button class="blueBtn" @click="toAdd">新增系列</Button>
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
        }
    },
    created () {
        this.getData()
    },
    methods:{
        toAdd () {
            this.$router.push("/index/category/create")
        },
        getData () {
            this.loading=true
            this.$axios({
                url: "category"
            }).then(res => {
                if (res.data) {
                    this.dataList = res.data
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

