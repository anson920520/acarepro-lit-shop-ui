<style lang="less" scoped>
.label {
    width: 75px;
    display: block;
}
.mr10 {
    margin-right: 20px;
}
.detailHeader {
    padding: 0 20px 20px 20px;
    border-bottom: solid #000 1px;
}
.padding20 {
    padding:0 20px;
}
.orderTable {
    text-align: center;
    >div:first-child {
        border-bottom: solid #000 1px;
    }
    >div:nth-of-type(2) {
        border-bottom: solid #000 1px;
    }
}
.grid {
    >div {
        padding: 10px;
        flex: 1.8;
    }
}
.grid2 {
    border-bottom: solid #CFCFCF 1px;
    >div {
        padding: 6px;
        flex: 1.8;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.total {
    margin-left: 20px;
    position: relative;
    padding: 5px;
    width: 86px;
    &::after {
        display: block;
        content: "";
        width: 100%;
        border-bottom: solid #000 1px;
        position: absolute;
        left: 0;
        bottom: 2px;
    }
    &::before {
        display: block;
        content: "";
        width: 100%;
        border-bottom: solid #000 1px;
        position: absolute;
        left: 0;
        bottom: 4px;
    }
}
.orderFooter {
    padding: 20px;
    border: solid 1px #000;
}
.bottomBtn {
    position: absolute;
    left: 50%;
    bottom: -135px;
    transform: translateX(-50%);
}
.totalWrap {
    margin: 5px 0;
}
.redColor {
    color: #E50000;
}
</style>

<template>
    <div>
        <h4 class="ju">订单记录</h4>
        <br>
        <div class="flex-end">
            {{totalText}}:<span class="bold redColor"> ￥{{format(total)}}</span>
        </div>
        <br>

        <div class="sb">
            <div class="al">
                <div class="al mr10">
                    <span class="label" style="width: 160px">企业名称 (业务负责人): </span>
                    <Select style="width: 200px;" v-model="userID">
                        <Option value="-1">全部</Option>
                        <Option v-for="(item,i) in users" :key="i" :value="item.ID">{{item.company}} ({{item.sale}})</Option>
                    </Select>
                </div>

                <div class="al mr10">
                    <span class="label">起始时间: </span>
                    <DatePicker type="date" format="yyyy-MM-dd" style="width: 120px;" @on-change="changeDate($event, 'start_time')"></DatePicker>
                </div>

                <div class="al mr10">
                    <span class="label">结束时间: </span>
                    <DatePicker type="date" format="yyyy-MM-dd" style="width: 120px;" @on-change="changeDate($event, 'end_time')"></DatePicker>
                </div>

                <div class="al mr10">
                    <span class="label">订单状态: </span>
                    <Select style="width: 100px;" v-model="status">
                        <Option value="-1">全部</Option>
                        <Option value="0">正在处理</Option>
                        <Option value="2">待发货</Option>
                        <!-- <Option value="3">待发货</Option> -->
                        <Option value="4">待收货</Option>
                        <Option value="1">已收货</Option>
                    </Select>
                </div>
            </div>
            
            <div class="al">
                <Button class="blueBtn" @click="filterData">搜寻订单记录</Button>
                <Button type="success" class="resetAll" @click="resetAll">重新整理</Button>
            </div>
            
        </div>
        <br>
        <Table :loading="loading" :columns="columns" :data="dataList" @on-row-click="showDetail" border>
            <template slot="status" slot-scope="{row}">
                <span v-if="row.status==0" style="color:#10103d;">正在处理</span>
                <span v-if="row.status==1" style="color:green;">已收货</span>
                <span v-if="row.status==2" style="color:#ECC849;">待发货</span>
                <span v-if="row.status==3" style="color:#ECC849;">待发货</span>
                <span v-if="row.status==4" style="color:#FD6C35;">待收货</span>
            </template>
            <template slot="company" slot-scope="{row}">
                <div>{{users.find(u => u.ID==row.userID) ? users.find(u => u.ID==row.userID).company : "" }}</div>
            </template>
            <template slot="logistics" slot-scope="{row}">
                <div v-if="row.logistics_company" style="text-align: left;">
                    <span>物流: {{row.logistics_company}}</span><br>
                    <span>单号: {{row.logistics_num}}</span>
                </div>
            </template>
        </Table>
        <br>
        <div class="flex-end">
            <Page :total="count" :current="page" :page-size="offset" show-elevator show-total @on-change="chnagePage" />
        </div>

        <!-- 详情Modal -->
        <Modal v-model="show" :width="600">
            <div slot="header" class="sb detailHeader">
                <img src="@/assets/img/logo.png" width="80" />
                <div>
                    <br><br>
                    <span class="size12">订单编号: {{detail.OrderID}}</span><br>
                    <span class="size12">下单日期: {{detail.CreatedAt}}</span>
                </div>
            </div>
            <div class="size12 relative">
                <h4 class="ju size14">销售订单</h4>
                <div class="flex">
                    <div style="flex: 5">
                        <div class="padding20">
                            <p>买方:</p>
                            <p>{{users.find(u => u.ID==detail.userID) ? users.find(u => u.ID==detail.userID).company : "" }}</p>
                            <p>{{users.find(u => u.ID==detail.userID) ? users.find(u => u.ID==detail.userID).address : "" }}</p>
                            <p>{{
                                users.find(u => u.ID==detail.userID) ? 
                                users.find(u => u.ID==detail.userID).principal + " " + users.find(u => u.ID==detail.userID).phone
                                : ""  
                            }}</p>
                        </div>
                    </div>
                    <div style="flex: 5">
                        <p>收货资料:</p>
                        <p>{{users.find(u => u.ID==detail.userID) ? users.find(u => u.ID==detail.userID).receiver : "" }}</p>
                        <p>{{users.find(u => u.ID==detail.userID) ? users.find(u => u.ID==detail.userID).shipping : "" }}</p>
                        <p v-if="detail.logistics_company">物流信息: {{detail.logistics_company + " " + detail.logistics_num}}</p>
                        <p v-if="detail.delivery_time">发货时间: {{detail.delivery_time}}</p>
                    </div>
                </div>
                <div class="orderTable">
                    <div class="flex grid bold">
                        <div>型号</div>
                        <div style="flex:3">产品名称</div>
                        <div>规格</div>
                        <div>产品数量</div>
                        <div>单位</div>
                        <div>单价</div>
                        <div>金额</div>
                    </div>
                    <div>
                        <div v-for="(item,i) in detail.Items" :key="i">
                            <div v-if="item.type!= 'discount'"  class="flex grid2">
                                <div>{{item.commodity.proNumber}}</div>
                                <div style="flex:3">{{item.name}}</div>
                                <div>{{item.commodity ? item.commodity.viscosity : ""}}</div>
                                <div>{{item.Qty}}</div>
                                <div>{{item.commodity.specification}}</div>
                                <div>{{item.commodity.price}}</div>
                                <div>{{format((item.commodity.price * item.Qty).toFixed(2) * 1)}}</div>
                            </div>
                            <div v-else class="flex grid2">
                                <div>N/A</div>
                                <div style="flex:3">{{item.name}}</div>
                                <div>N/A</div>
                                <div>{{item.Qty}}</div>
                                <div>N/A</div>
                                <div>0</div>
                                <div>0</div>
                            </div>
                        </div>
                    </div>
                    <div class="sb">
                        <div>
                            <br>
                            <div class="size12 tLeft2 width50">
                                <span>重量: </span>
                                <span >{{detail.weight}}{{detail.unit}}</span>
                            </div>
                            <div class="size12 tLeft2 width50">
                                <span>送货类型: </span>
                                <span v-if="detail.delivery_type == 1">送货到门店</span>
                                <span v-if="detail.delivery_type == 2">网点自提</span>
                            </div>
                            <div class="size12 tLeft2 width50">
                                <span>赠送: </span>
                                <span>{{detail.gift ? detail.gift : '无'}}</span>
                            </div>
                            <div class="sb size12">
                                <p>
                                    <span>包邮: </span>
                                    <span v-if="!detail.deliveryCost" style="color: #E50000;">未处理</span>
                                    <span v-if="detail.deliveryCost==1">是</span>
                                    <span v-if="detail.deliveryCost==2">否</span>
                                </p>
                                <p>
                                    <span>赠送添加剂: </span>
                                    <span>{{detail.giftAdditives}}</span>
                                </p>
                                
                            </div>
                            <div class="sb size12">
                                <p>
                                    <span>返利物资: </span>
                                    <span>{{detail.rebate}}%</span>
                                </p>
                                <p>
                                    <span>返利总金额: </span>
                                    <span>{{format(detail.rebate_total)}}</span>
                                </p>
                            </div>
                            <div class="sb size12">
                                <p>
                                    <span>业务负责人: </span>
                                    <span>{{detail.sale}}</span>
                                </p>
                                <p></p>
                            </div>
                            <br>
                        </div>
                        <div class="totalWrap">
                            <div class="al">
                                <span>总金额: </span>
                                <div>
                                    <div class="total"> ￥{{format(detail.Total)}} </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="orderFooter">
                    <p>备注</p>
                    <p>{{detail.remark ? detail.remark : "暂无备注"}}</p>
                </div>
                <div class="bottomBtn">
                    <Button type="primary" class="color0 " @click="exportCsv">下载订单</Button>
                    <br>
                    <br>
                    <br>
                    <br>
                </div>
                
            </div>

            <div slot="footer"></div>
        </Modal>
    </div>
</template>

<script>
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    data () {
        return {
            columns:[
                { title: "公司名称", slot: "company", align: "center" },
                { title: "业务负责人", key: "sale", align: "center" },
                { title: "下单日期", key: "CreatedAt", align: "center" },
                { title: "更新日期", key: "UpdatedAt", align: "center" },
                { title: "物流公司及单号", slot: "logistics", align: "center" },
                { title: "总共箱数", key: "count", align: "center", width: 100 },
                { title: "金额(￥)", key: "Total", align: "center", width: 100 },
                { title: "订单状态", slot: "status", align: "center", width: 120 },
            ],
            allData: [],
            dataList: [],
            loading: false,
            users: [],
            start_time: "",
            end_time: "",
            detail: {},
            show: false,
            products: [],
            total: 0,
            totalText: "当前总金额",
            page: 1,
            offset: 20,
            sale: "",
            userID: "-1",
            status: "-1",
            count: 0,
        }
    },
    created () {
        // this.getData()
        this.getUser()
        // this.getProduct()
        this.getAccount()
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
                    that.getUser()
                    that.getAccount()
                }
            })
        },
        chnagePage (e) {
            // this.page = e
            // this.getData()
            this.$router.push(this.$route.path + "?page=" + e)
            document.getElementsByClassName("Main")[0].scrollTop = 0
        },
        getAccount () {
            let D = new Date()
            let y = D.getFullYear()
            let m = D.getMonth() + 1
            // this.$axios({
            //     url: "statistics/" + y + "-" + m,
            //     // params: {
            //     //     date: y + "-" + m
            //     // }
            // }).then(res => {
            //     console.log(res)
            //     if (res.data[0]) {
            //         this.total = res.data[0]
            //     } else {
            //         this.total = 0
            //     }
            // }).catch(e => {
            //     console.lgo(e)
            //     this.total =0
            // })
        },
        //下載訂單
        exportCsv () {
            let that = this
            that.downloadLoading = true
            document.getElementsByClassName("ivu-modal-close")[0].style.display = "none"
            document.getElementsByClassName("bottomBtn")[0].style.display = "none"
            let load = this.$Message.loading('下載中...')
            setTimeout(() => {
                
                let oDiv = document.getElementsByClassName("ivu-modal-content")[0]
                oDiv.setAttribute("id", "detail")
                let html = oDiv
                let contentWidth = html.clientWidth ; // 获得该容器的宽
                let contentHeight = html.clientHeight ; // 获得该容器的高
                html2Canvas(oDiv, {
                    scale: 3.5,allowTaint: true
                }).then(function (canvas) {
                    load()
                    that.downloadLoading = false
                    document.getElementsByClassName("ivu-modal-close")[0].style.display = 'block'
                    document.getElementsByClassName("bottomBtn")[0].style.display = "block"
                    let pageData = canvas.toDataURL('image/jpeg', 1.0)
                    //一页 pdf 显示 html 页面生成的 canvas高度
                    let pageHeight = contentWidth
                    //未生成 pdf 的 html页面高度
                    let leftHeight = contentHeight
                    //上页面偏移
                    let position = 0
                    //左面偏移
                    let leftPosition = 0
                    //a4纸的尺寸[595.28,841.89]，html 页面生成的 canvas 在pdf中图片的宽高

                    let imgWidth = 590
                    let imgHeight = imgWidth / contentWidth * contentHeight
                    let PDF = new JsPDF('', 'pt', 'a4')
                    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                    //当内容未超过pdf一页显示的范围，无需分页
                    if (leftHeight < pageHeight) {
                        PDF.addImage(pageData, 'JPEG', leftPosition, 0, imgWidth, imgHeight)
                    } else {
                        while (leftHeight > 0) {
                            PDF.addImage(pageData, 'JPEG', leftPosition, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight
                            position -= 841.89
                            //避免添加空白页
                            if (leftHeight > 0) {
                                PDF.addPage()
                            }
                        }
                    }
                    // load()
                    PDF.save(that.detail.OrderID + '.pdf')
                }).catch(e => {
                    console.log(e)
                    document.getElementsByClassName("ivu-modal-close")[0].style.display = 'block'
                    document.getElementsByClassName("bottomBtn")[0].style.display = "block"
                    that.downloadLoading = false
                    laod()
                })
            },100)
            
        },
        getProduct () {
            return new Promise((resolve, reject) => {
                this.$axios({
                    url: "product"
                }).then(res => {
                    if (res.data.code == 200) {
                        // res.data.forEach(item => {
                        //     let half = item.desc.split(" ")[0].length
                        //     item.proNumber = item.desc.slice(0,half)
                        //     item.specification = item.desc.slice(half,-1).trim()
                        // })
                        this.products = res.data.data
                    } else {
                        this.products = []
                    }
                    resolve()
                }).catch(e => {
                    console.log(e)
                    reject()
                })
            })
            
        },
        showDetail (item) {
            this.show = true
            this.detail = item
            // if (!this.products.length) {
            //     this.getProduct().then(res => {
            //         item.Items.forEach(pro => {
            //             pro.commodity = {}
            //             this.products.forEach(commodity => {
            //                 if (pro.id == commodity.ID) {
            //                     pro.commodity = commodity
            //                 }
            //             })
            //         })
            //         this.show = true
            //         this.detail = item
            //     })
            // } else {
            //     item.Items.forEach(pro => {
            //         pro.commodity = {}
            //         this.products.forEach(commodity => {
            //             if (pro.id == commodity.ID) {
            //                 pro.commodity = commodity
            //             }
            //         })
            //     })
            //     this.show = true
            //     this.detail = item
            // }
        },
        changeDate (e, key) {
            this[key] = e
        },
        filterData () {
            this.getData()
            // if (this.userID) {
            //     this.dataList = this.allData.filter(item => item.userID == this.userID)
            // } else {
            //     this.dataList = this.allData
            // }
            
            // this.dataList = this.dataList.filter(item => {
            //     if (!this.CreatedAt) {
            //         return true
            //     } else {
            //         return item.createTimestamp >= this.CreatedAt
            //     }
            // })

            // this.dataList = this.dataList.filter(item => {
            //     if (!this.updateAt) {
            //         return true
            //     } else {
            //         return item.createTimestamp <= (this.updateAt + 86400000)
            //     }
            // })
            // this.total = 0
            // this.totalText = "所过滤订单总金额"
            // this.dataList.forEach(item => {
            //     if (item.status == 1) {
            //         this.total += item.Total
            //     }
            // })
            // if ((!this.userID) && (!this.CreatedAt) && (!this.updateAt)) {
            //     this.totalText = "当前总金额"
            // }

        },
        getUser () {
            this.$axios({
                url: "",
                params: {
                    page: 1,
                    offset: 9999
                }
            }).then(res => {
                res.data.data.forEach(item => {
                    item.ID = String(item.ID)
                })
                this.users = res.data.data.reverse()
            })
        },
        getData () {
            let status = this.status
            if (status == -1) { status = '' }
            let userID = Number(this.userID)
            if (userID == -1) { userID = '' }
            // status = '(0,1)'
            if (status) {
                if (status == 2) {
                    status = '(2,3)'
                } else {
                    status = '(' + status +')'
                }
            } else {
                status = ''
            }
            // status = "(0,1)"
            this.loading = true
            this.total = 0
            this.$axios({
                url: "getAdminOrder/",
                params: {
                    page: this.page,
                    offset: this.offset,
                    start_time: this.start_time,
                    end_time: this.end_time,
                    status: status,
                    user_id: userID
                }
            }).then(res => {
                this.loading = false
                if (res.data.code == 200) {
                    res.data.data.forEach(item => {
                        item.count = 0
                        item.Items.forEach(pro => {
                            item.count += Number(pro.Qty)
                        })
                        // item.Total = this.format(item.Total)
                        item.logistics = item.logistics_company + " " + item.logistics_num
                        if (item.CreatedAt) {
                            item.CreatedAt = new Date(item.CreatedAt).toLocaleDateString()
                            item.createTimestamp = new Date(item.CreatedAt).getTime()
                        }
                        if (item.UpdatedAt) {
                            item.UpdatedAt = new Date(item.UpdatedAt).toLocaleDateString()
                            item.updateTimestamp = new Date(item.updateAt).getTime()
                        }

                        
                    })
                    this.allData = this.dataList = res.data.data
                    this.totalText = "当前总金额"
                    this.total = res.data.all_total[0]
                    this.count = res.data.all_count[0]
                } else {
                    this.allData = this.dataList = []
                    this.count = 0
                }
            }).catch(e => {
                this.loading = false
                console.log(e)
            })
        },
        // format (n, x=2) {
        //     n = Number(n)
        //     if (x) {
        //         let pow = Math.pow(10,x)
        //         n = Math.ceil(n*pow) / pow
        //     }
        //     var str = n.toString();
        //     str = str.replace(/[A-z]+/g, "")
        //     var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
        //     let num = str.replace(reg,"$1,");
        //     return num
        // },
    }
}
</script>

