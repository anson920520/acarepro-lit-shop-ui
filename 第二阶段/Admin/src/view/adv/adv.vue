<style lang="less" scoped>
.width80 {
    width: 80%;
}

</style>

<template>
    <div>
        <h4 class="ju">广告管理</h4>
        <br>
        <div class="sb">
            <div></div>
            <div class="sb">
                <Button class="blueBtn" @click="toAdd" v-if="role==1">新增广告</Button>
                <Button type="success" class="resetAll" @click="resetAll">重新整理</Button>
            </div>
            
        </div>
        <br>
        <Table :columns="columns" :data="dataList" :loading="loading" border draggable @on-drag-drop="drap">
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
            <template slot="detail" slot-scope="{row}">
                <div class="c1" v-html="row.detail">{{row.detail}}</div>
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
                { title: "状态",slot: "status", align: 'center' },
                { title: "详情",slot: "detail", align: 'center' },
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
    computed: {
        role () { return this.$store.state.role }
    },
    methods:{
        drap (s,e) {
            if (e == s) {
                return false
            }
            console.log(s,e)
            let sRank = this.dataList[s].rank
            let eRank = this.dataList[e].rank
            this.dataList[s].rank = eRank
            this.dataList[e].rank = sRank
            this.dataList.sort((a,b) => {
                return b.rank - a.rank
            })
            
            this.editFn(this.dataList[s])
            this.editFn(this.dataList[e])
        },
        editFn (item) {
            this.$axios({
                url: "putAdvertisement/",
                method:"PUT",
                data: {
                    id: item.ID,
                    name: item.name,
                    detail: item.detail,
                    status: item.status,
                    image: item.image,
                    rank: Number(item.rank)
                },
            })
        },
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
            this.$router.push("/index/adv/create")
        },
        getData () {
            this.loading=true
            this.$axios({
                url: "getAdvertisement/",
                params: {
                    page: this.page,
                    offset: this.offset,
                }
            }).then(res => {
                if (res.data.code == 200) {
                    res.data.data.sort((a,b) => {
                        return b.rank - a.rank
                    })
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
                    path: "/index/adv/create",
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
                        url: "deleteAdvertisement/",
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

