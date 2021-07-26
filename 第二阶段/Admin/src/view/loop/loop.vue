<style lang="less" scoped>
.width80 {
    width: 80%;
}

</style>

<template>
    <div>
        <h4 class="ju">轮播图管理</h4>
        <br>
        <div class="sb">
            <div></div>
            <div class="al">
                <Button class="blueBtn" @click="toAdd" v-if="role==1">新增轮播图</Button>
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
            <template slot="status" slot-scope="{row}">
                <Tag v-if="row.status==1" color='success'>启用</Tag>
                <Tag v-if="row.status==0" color='warning'>隐藏</Tag>
            </template>
            <template slot="link" slot-scope="{row}">
                <div class="c1">{{row.link}}</div>
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
                { title: "标题",key: "name", align: 'center' },
                { title: "图片链接",slot: "link", align: 'center' },
                { title: "操作", slot: "action", align: 'center' }
            ],
            dataList: [],
            loading: false,
            id: "",
            page: 1,
            offset: 20,
            count: 0,
            categories: []
        }
    },
    created () {
        if (this.role == 2) {
            this.columns.pop()
        }
        // this.getData()
    },
    computed: {
        role () { return this.$store.state.role }
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
            this.$router.push("/index/loop/create")
        },
        getData () {
            this.loading=true
            this.$axios({
                url: "getCarousel/",
                params: {
                    page: this.page,
                    offset: this.offset,
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
                    path: "/index/loop/create",
                    query: {
                        id: item.ID,
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
                        url: "deleteCarousel/",
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

