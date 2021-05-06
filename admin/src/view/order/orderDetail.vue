<style lang="less" soped>
.fwrap {
    >div {
        float: left;
        height: 40px;
        margin-right: 50px;
        width: 25%;
        label {
            white-space: nowrap;
            margin-right: 10px;
        }
    }
}
.width300 {
    width: 300px;
}
.remark {
    width: 100%;
    height: 100px;
    padding: 10px;
}
.cate {
    padding: 5px 10px;
    border: solid #666 1px;
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    user-select: none;
}
.cateAct {
    background: #10103d;
    color: #FFF;
}
.upload {
    width: 200px;
    height: 200px;
    border: solid #000 1px;
    border-radius: 10px;
    position: relative;
    >label {
        width: 100%;
        height: 100%;
        cursor: pointer;
        display: block;
    }
    &::before {
        display: block;
        content: "";
        width: 30%;
        height: 5px;
        background:#000;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
    &::after {
        display: block;
        content: "";
        height: 30%;
        width: 5px;
        background:#000;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
    &:hover {
        box-shadow: 0 0 10px #000;
    }
}
.delImg {
    position: absolute;
    left: 190px;
    top:-10px;
}

</style>

<template>
    <div>
        <div>
            <h3>订单状态</h3><br>
            <RadioGroup v-model="status" type="button">
                <Radio label="0">正在处理</Radio>
                <Radio label="2">待发货</Radio>
                <Radio label="4">待收货</Radio>
                <Radio label="1">已收货</Radio>
            </RadioGroup>
        </div>
        <br><br>
        <!-- 产品信息 -->
        <div>
            <h3>产品</h3>
            <Table :columns="columns" :data="order.Items">
                <template slot="action" slot-scope="{row,index}">
                    <Button type="error" size="small" @click="del(index)">删除</Button>
                </template>
                <template slot="price" slot-scope="{row}">
                    <span>{{format(row.price)}}</span>
                </template>
                <template slot="calc" slot-scope="{row}">
                    <span>{{format(row.price * row.Qty)}}</span>
                </template>
                <template slot="Qty" slot-scope="{row,index}">
                    <InputNumber :min="1" v-model="row.Qty" @on-change="changeQty($event, index)"></InputNumber>
                </template>
                
            </Table>
            <br>
            <div class="sb">
                <span></span>
                <Button class="blueBtn" @click="addPro">添加产品</Button>
                <span class="bold">总计: {{format(order.Total)}}</span>
            </div>
            <br><br>
        </div>

        <!-- 优惠信息 -->
        <div>
            <h3>优惠信息</h3><br>
            <div class="clearBoth fwrap">
                <div class="al width300">
                    <label>赠送 : </label>
                    <Select v-model="order.gift">
                        <Option v-for="(item,i) in discount" :key="i" :value="item">{{item}}</Option>
                    </Select>
                </div>

                <div class="al">
                    <label>包邮 :</label>
                    <RadioGroup v-model="deliveryCost">
                        <Radio label="1">是</Radio>
                        <Radio label="2">否</Radio>
                    </RadioGroup>
                </div>

                <div class="al">
                    <label>赠送添加剂 :</label>
                    <Input type="number" style="width: 80px;" v-model="order.giftAdditives" />
                    <span>箱</span>
                </div>

                <div class="al">
                    <label>返利物资 :</label>
                    <Input type="number" style="width: 80px;" v-model="order.rebate" />
                </div>

                <div class="al">
                    <label>返利总金额 :</label>
                    <Input type="number" style="width: 80px;" v-model="order.rebate_total" />
                </div>
            </div>
            <p>备注: </p>
            <textarea v-model="order.remark" class="remark"></textarea>
        </div>
        <br><br>

        <!-- 转账图片 -->
        <div>
            <h3>转账图片</h3><br>
            <div class="upload" v-if="!src" >
                <label for="img" @change="upLoad">
                    <input type="file" id="img" v-show="false">
                </label>
            </div>
            <div class="relative inline-block" v-else >
                <img :src="src" width="200" alt="">
                <Icon type="ios-close-circle delImg" color="red" size="25" @click="delImg" />
            </div>
        </div>
        


        <br>
        <br>
        <div class="flex-end">
            <Button class="blueBtn" @click="sub">储存</Button>
        </div>

        <Drawer title="选择产品" v-model="show" placement="left" :width="800">
            <div class="clearBoth">
                <div v-for="(item,i) in categories" 
                    @click="changeCate(i)"
                    :key="i" :class="['cate', { cateAct: cateAct==i }]">{{item.Name}}</div>
            </div>

            <Table :columns="columns2" :data="categories[cateAct] ? categories[cateAct].commodity : []">
                <template slot="num" slot-scope="{row,index}">
                    <InputNumber :min="0" v-model="row.num" @on-change="changeQty2($event, index)"></InputNumber>
                </template>
            </Table>
        </Drawer>
    </div>
</template>

<script>
export default {
    data () {
        return {
            discount: [
                '无', 
                '金银铜黑系列10送1，橙罐系列10送1',
                "金银铜黑系列10送2，橙罐系列10送1",
                "金银铜黑系列10送3，橙罐系列15送2",
            ],
            deliveryCost: "0",
            columns: [
                { title: "产品名称",key: "name", align: 'center', width:350 },
                { title: "单价",slot: "price", align: 'center' },
                { title: "数量",slot: "Qty", align: 'center' },
                { title: "小计",slot: "calc", align: 'center' },
                { title: "操作",slot: "action", align: 'center' },
            ],
            columns2: [
                { title: "产品名称",key: "name", align: 'center'},
                { title: "型号",key: "proNumber", align: 'center' },
                { title: "价格",key: "price", align: 'center' },
                { title: "每箱含量",key: "specification", align: 'center' },
                { title: "数量",slot: "num", align: 'center' },
            ],
            show: false,
            categories: [],
            cateAct: 0,
            src: "",
            status: "0",
        }
    },
    computed: {
        order: {
            get () { return this.$store.state.order },
            set (val) {
                this.$store.commit("setState", { key: "order", value: val })
            }
        }
    },
    created () {
        this.deliveryCost = this.order.deliveryCost + ""
        this.status = this.order.status + ""
        if (this.order.image) this.src = window.imgUrl + "bankin/" + this.order.image
        if (this.order.status==3) this.status="2"
    },
    methods:{
        delImg () {
            this.src = ''
            this.order.image = ''
        },
        upLoad (e) {
            let f = e.target.files[0]
            // console.log(f)
            if (f.type.includes("jp") || f.type.includes("png")) {
                let data = new FormData()
                data.append("file", f),
                data.append("id", this.order.ID),
                this.$axios({
                    url: "order/image",
                    data,
                    method:"POST"
                }).then(res => {
                    console.log(res)
                    this.src = window.imgUrl + "bankin/" + res.data.data
                    this.order.image = res.data.data
                })

            } else {
                this.$Message.warning("请上传图片文件")
            }
        },
        changeCate (i) {
            this.cateAct = i
        },
        addPro () {
            this.show = true
            this.getCate().then(() => {
                this.getPro()
            })
        },
        getCate () {
            return new Promise((resolve, reject) => {
                this.$axios({
                    url: "category"
                }).then(res => {
                    this.categories = res.data
                    resolve()
                }).catch(e => {
                    console.log(e)
                    reject()
                })
            })
        },
        getPro () {
            this.$axios({
                url: "product"
            }).then(res => {
                this.categories.forEach(cate => {
                    cate.commodity = []
                    res.data.forEach(pro => {
                        pro.num = 0
                        if (pro.categoryId == cate.ID) {
                            cate.commodity.push(pro)
                        }

                        this.order.Items.forEach(item => {
                            if (item.id == pro.ID) {
                                pro.num = item.Qty
                            }
                        })
                    })
                })
                this.categories = [...this.categories]
            })
        },
        format (n) {
            n = Number(n)
            var str = n.toString();
            str = str.replace(/[A-z]+/g, "")
            var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
            let num = str.replace(reg,"$1,");
            return num
        },
        //计算总价
        calc () {
            this.order.Total = 0
            this.order.Items.forEach(item => {
                this.order.Total += item.Qty*item.price
            })
        },
        //储存
        sub () {
            this.$axios({
                url: "sale/update/" + this.order.ID,
                method:"PUT",
                data: {
                    gift: this.order.gift,
					deliveryCost: this.deliveryCost * 1,
					giftAdditives: this.order.giftAdditives * 1,
					rebate: this.order.rebate * 1,
					remark: this.order.remark,
					rebate_total: this.order.rebate_total *1,
                    Items: this.order.Items,
                    Total: this.order.Total,
                    status: this.status * 1,
                    image: this.order.image,
                }
            }).then(res => {
                console.log(res)
                if (res.data) {
                    this.$Message.success('已储存')
                    setTimeout(() => {
                        this.$router.back()
                    },1000)
                    
                }
            })
        },
        //删除产品
        del (i) {
            let that = this
            // that.$Modal.confirm({
            //     title: "提示",
            //     content: "确定删除这个产品?",
            //     onOk () {
                    that.order.Items.splice(i,1)
                    that.calc()
            //     }
            // })
        },
        // 修改数量
        changeQty (e, i) {
            this.order.Items[i].Qty = e
            this.order.Items[i].commodity.num = e
            this.calc()
        },
        //选择产品 修改数量
        changeQty2 (e,i) {
            let currentPro = this.categories[this.cateAct].commodity[i]
            currentPro.num = e
            let index = this.order.Items.findIndex(item => item.id == currentPro.ID)
            if (e > 0) {
                if (index == -1) {
                    this.order.Items.push({
                        id: currentPro.ID,
                        commodity: currentPro,
                        price: currentPro.price,
                        name: currentPro.name,
                        Qty: e
                    })
                } else {
                    this.order.Items[index].Qty = e
                }
                this.calc()
            } else {
                this.del(index)
            }
            
        },
    }
}
</script>

