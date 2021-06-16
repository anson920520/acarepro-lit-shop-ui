<style lang="less" scoped>
.width80 {
    width: 80%;
}
.cate {
    border: solid #000 1px;
    padding: 3px 10px;
    float: left;
    margin-right: 5px;
    border-radius: 5px;
    margin-bottom: 5px;
    transition: 0.3s;
    cursor: pointer;
    user-select: none;
    &:hover {
        box-shadow: 0 0 10px #000;
    }
}
.act {
    border: solid #E50000 1px !important;
}
</style>

<template>
    <div>
        <h4 class="ju">产品管理</h4>
        <br>
        <div class="sb">
            <div class="clearBoth width80">
                <div :class="['cate', { act: i==act }]" 
                    @click="changeCate(i)"
                    v-for="(item,i) in categories" :key="i">{{item.Name}}</div>
            </div>

            <Button class="blueBtn" @click="toAdd" v-if="role==1">新增产品</Button>
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
            <template slot="status" slot-scope="{row}">
                <RadioGroup v-model="row.desc.status" @on-change="changeStatus( $event,row)">
                    <Radio label="1">上架</Radio>
                    <Radio label="2">下架</Radio>
                </RadioGroup>
            </template>
        </Table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            columns: [
                { title: "产品名称",key: "name", align: 'center', width:350 },
                { title: "型号",key: "proNumber", align: 'center' },
                { title: "粘度",key: "viscosity", align: 'center' },
                { title: "价格",key: "price", align: 'center' },
                { title: "每箱含量",key: "specification", align: 'center' },
                { title: "上架/下架",key: "status", align: 'center', slot: "status" },
                { title: "操作", slot: "action", align: 'center' },
            ],
            dataList: [],
            loading: false,
            act: 0,
            categories: [],
        }
    },
    computed: {
        role () { return this.$store.state.role }
    },
    created () {
        if (this.role == 2) {
            this.columns.pop()
            this.columns.pop()
        }
        this.getCate()
    },
    methods:{
        changeStatus (e, item) {
            let desc = item.desc
            desc.status = e
            let data = {
                "name": item.name,
                "desc": JSON.stringify(desc),
                "price": item.price * 1,
                image: item.image,
                categoryId: item.categoryId,
            }
            this.$axios({
                url: "product/edit/" + item.ID,
                method:"PUT",
                data
            })
        },
        changeCate (i) {
            this.act = i
            this.getData(this.categories[this.act])
        },
        getCate () {
            this.loading=true
            this.$axios({
                url: "category"
            }).then(res => {
                if (res.data) {
                    this.categories = res.data
                    this.getData(this.categories[this.act])
                } else {
                    this.loading = false
                }
            }).catch(e => {
                console.log(e)
                this.loading = false
            })
        },
        toAdd () {
            this.$router.push("/index/commodity/create")
        },
        getData (cate) {
            this.loading=true
            this.$axios({
                url: "product/" + cate.ID
            }).then(res => {
                if (res.data) {
                    res.data.forEach(item => {
                        // try {
                        //     item.desc = JSON.parse(item.desc)
                        //     if (!item.desc.specification) {
                        //         item.desc.specification = {}
                        //     } else {
                        //         item.specification = item.desc.specification.val1 + item.desc.specification.val2 + " × " + item.desc.specification.val3 + item.desc.specification.val4
                        //     }
                        //     item.proNumber = item.desc.proNumber
                        // } catch {
                        //     console.log('cateh', item.ID)
                        //     item.desc = {}
                        // }
                        
                    })
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
                    name: "commodityCreate",
                    query: {
                        id: item.ID
                    },
                    params: {
                        item
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
                        url: "product/delete/" + item.ID,
                        method:"DELETE"
                    }).then(res => {
                        that.getData(that.categories[that.act])
                    }).catch(e => {
                        console.log(e)
                        that.getData(that.categories[that.act])
                    })
                }
            })
        }
    }
}
</script>

