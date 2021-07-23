<style lang="less" scoped>
.orderBox {
    text-align: center;
    overflow: hidden;
    >div {
        width: 103.3%;
        // border: solid red 1px;
    }
}
.orders {
    width: 21.9%;
    border: solid 1px #000;
    border-radius: 10px;
    float: left;
    margin-right: 3%;
    margin-bottom: 3%;
    >h4 {
        // border: solid green 2px;
        height: 50px;
        margin: 20px auto 0;
        width: 80%;
    }
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        border: solid #E50000 1px    !important;
    }
}
.orderBtn {
    >div {
        height:80px;
        width:70px;
        border: solid #000 1px;
        margin: 0 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            box-shadow: 0 0 10px #000;
        }
    }
    
}
.totalWrap {
    margin: 5px 0;
}
.btnGropu {
    padding: 0 3%;
    >div {
        width: 45%;
        margin: 5%;
        border-radius:10px;
        font-size: 14px;
        user-select: none;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
            box-shadow: 0 0 10px #333;
        }
    }
    >div:first-child {
        background: #EE870E;
    }
    >div:nth-of-type(2) {
        background: #0FF90A;
    }
    >div:last-child {
        background: #E50000;
    }
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
.sendBtn {
    padding:0 30px !important;
    transform:translateY(-10px)
}
.disabled {
    box-shadow: none !important;
    cursor: auto !important;
    opacity: 0.8 !important;
    background: #ccc !important;
}
.width80 {
    width: 85%;
    margin: auto;
}
.tLeft {
    text-align: left;
    overflow: hidden;
    text-overflow:ellipsis; white-space: nowrap;
}
.imgMask {
    width: 100vw;
    height: 100vw;
    background: rgba(0,0,0,0.6);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    >img {
        height: 80vh;
        width: auto;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
.editIcon {
    position: absolute;
    right: 2px;
    top: 2px;
    &:hover {
        transform: scale(1.3);
    }
}
.bg2 {
    background: green !important;
}
</style>

<template>
    <div>
        <h4 class="size16 ju">待确认订单</h4><br>
        <div class="noData" v-if="dataList.length===0">暫無訂單</div>

        <div class="orderBox">
            <div class="clearBoth">
                <div v-for="(item,i) in dataList" :key="i" class="orders relative">
                    <Icon v-if="role==1" type="md-create" color="000" size="20" class="editIcon" @click="toEdit(item)" />
                    <!-- <img v-show="item.image" :src="imgUrl + 'bankin/' + item.image" alt="" style="height: 0;width: 0;display: block;"> -->
                    <h4 class="companyName">{{users.find(u => u.ID==item.userID) ? users.find(u => u.ID==item.userID).company : "" }}</h4>
                    <!-- {{item.status}} -->
                    <div class="ju orderBtn">
                        <div class="ju al" @click="showDetail(item)">
                            <div>
                                <p>PDF</p><p>订单</p>
                            </div>
                        </div>
                        <div class="ju al" @click="previewImg(item)">
                            <div>
                                <p>客户</p>
                                <p>转账</p>
                                <p>截屏</p>
                            </div>
                        </div>
                    </div>
                    <br>
                    <p>下单日期: {{item.CreatedAt}}</p>
                    <p>总共 {{item.count}} 箱</p>
                    <p>RMB {{format(item.Total)}}</p>
                    <br>
                    <div class="size12 tLeft width80">
                        <span>赠送: </span>
                        <span>{{item.gift ? item.gift : '无'}}</span>
                    </div>
                    <div class="sb width80 size12">
                        <p>
                            <span>包邮: </span>
                            <span v-if="!item.deliveryCost" style="color: #E50000;">未处理</span>
                            <span v-if="item.deliveryCost==1">是</span>
                            <span v-if="item.deliveryCost==2">否</span>
                        </p>
                        <p>
                            <span>赠送添加剂: </span>
                            <span>{{item.giftAdditives}}</span>
                        </p>
                        
                    </div>
                    <div class="sb width80 size12">
                        <p>
                            <span>返利物资: </span>
                            <span>{{item.rebate}}%</span>
                        </p>
                        <p>
                            <span>返利总金额: </span>
                            <span>{{item.rebate_total}}</span>
                        </p>
                    </div>
                    <div v-if="role==1" class="btnGropu ju" @click.stop=''>
                        <div class="bg2" @click="adminUnLock(item)" v-if="item.status==2||item.status==3||item.status==4">解锁</div>
                        <div v-else  @click="adminLock(item)">锁定</div>

                        <div v-if="item.logistics_num" class="disabled">已发货</div>
                        <div v-else class="op" @click.stop.prevent="send(item)">发货</div>

                        <div class="op" @click.stop.prevent="del(item,i)">删除</div>
                    </div>
                    <br v-else>
                </div>
            </div>
            
        </div>
        <div class="ju">
            <Button v-if="!noMore" class="blueBtn" @click="getMore">加载更多</Button>
            <div class="noData" v-else>没有更多</div>
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
                                <div style="flex:3">{{item.commodity.name}}</div>
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
        <!-- 发货 -->
        <Modal v-model="showSend" :width="400">
            <br>
            <Form :model="sendForm" :rules="rules" ref="sendForm" :label-width="100">
                <FormItem label="发货时间" prop="delivery_time">
                    <DatePicker type="date" v-model="sendForm.delivery_time" style="width: 200px;" />
                </FormItem>
                <FormItem label="物流公司" prop="logistics_company">
                    <Input type="text" v-model="sendForm.logistics_company" style="width: 200px;" />
                </FormItem>
                <FormItem label="物流单号" prop="logistics_num">
                    <Input type="text" v-model="sendForm.logistics_num" style="width: 200px;" />
                </FormItem>
            </Form>
            <div slot="footer" class="ju">
                <Button type="primary" class="sendBtn color0" @click="okSend">发货</Button>
            </div>
        </Modal>
        <transition name="fade">
            <div class="imgMask" v-if="src" @click="src=''">
                <img :src="src" alt="" @click.stop.prevent=''>
            </div>
        </transition>
        

    </div>
</template>

<script>
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
export default {
    data () {
        return {
            show: false,
            showSend: false,
            sendForm: {
                logistics_company: "",
                logistics_num: "",
                delivery_time: new Date(),
            },
            rules: {
                logistics_company: [{ required: true, message: "请输入物流公司", trigger: 'blur' }],
                logistics_num: [{ required: true, message: "请输入物流单号", trigger: 'blur' }],
            },
            dataList: [],
            sendItem: {},
            detail: {},
            products: [],
            users: [],
            imgUrl: '',
            src: "",    // big Img
            page: 1,
            offset: 20,
            count: 0,
            noMore: false,
        }
    },
    created () {
        // this.getProduct()
        this.getData()
        this.getUser()
        this.imgUrl = window.imgUrl
        // this.timer = setInterval(() => {
        //     this.getData()
        // },30000)
    },
    beforeDestroy () {
        // clearInterval(this.timer)
        console.log("beforeDestroy")
    },
    computed: {
        order: {
            get () { return this.$store.state.order },
            set (val) {
                this.$store.commit("setState", { key: "order", value: val })
            }
        },
        role () { return this.$store.state.role }
    },
    methods:{
        toEdit (item) {
            this.order = item
            this.$router.push("/index/order/detail")
        },
        previewImg (item) {
            // console.log(window.imgUrl + "bankin/" + item.image)
            if (item.image) {
                // this.$imagePreview({
                //     images: [ "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png","https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"],
                //     index: 1,
                // })
                this.src = window.imgUrl + "bankin/" + item.image
            } else {
                this.$Message.warning("暂无图片信息")
            }
            
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
                    console.log(canvas)
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
                    load()
                })
            },100)
            
        },
        getUser () {
            this.$axios({
                url: "",
                params: {
                    page: 1,
                    offset: 9999
                }
            }).then(res => {
                this.users = res.data.data
            })
        },
        getProduct () {
            return new Promise((resolve, reject) => {
                this.$axios({
                    url: "product"
                }).then(res => {
                    if (res.data) {
                        // res.data.forEach(item => {
                        //     let half = item.desc.split(" ")[0].length
                        //     item.proNumber = item.desc.slice(0,half)
                        //     item.specification = item.desc.slice(half,-1).trim()
                        // })
                        this.products = res.data
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
        okSend () {
            let that = this
            that.$refs.sendForm.validate(flag => {
                if (flag) {
                    let D = new Date(that.sendForm.delivery_time)
                    let y = D.getFullYear()
                    let m = D.getMonth() + 1
                    let d = D.getDate()
                    m = m < 10 ? "0" + m : m
                    d = d < 10 ? "0" + d : d
                    let date = y + "-" + m + "-" + d
                    that.$axios({
                        url: "order/logistics/" + that.sendItem.ID,
                        method:'PUT',
                        data: {
                            delivery_time: date,
                            logistics_num: that.sendForm.logistics_num,
                            logistics_company: that.sendForm.logistics_company,
                        }
                    }).then(res => {
                        that.getData()
                        that.showSend = false
                    }).catch(e => {
                        console.log(e)
                        that.getData()
                        that.showSend = false
                    })
                }
            })
            
        },
        send (item) {
            this.showSend = true
            this.sendItem = item
        },
        // 删除
        del (item,i) {
            let that = this
            that.$Modal.confirm({
                title: "提示!",
                content: "确定删除这个订单?",
                onOk () {
                    that.$axios({
                        url: "order/delete/" + item.ID,
                        method:'DELETE',
                    }).then(res => {
                        console.log("删除订单",res)
                        // that.getData()
                        that.dataList.splice(i,1)
                    }).catch(e => {
                        console.log(e)
                        // that.getData()
                    })
                }
            })
        },
        adminLock (item) {
            let that = this
            this.$Modal.confirm({
                title: "提示!",
                content: "确定锁定这个订单? ",
                onOk () {
                    that.$axios({
                        url: "admin/order/lock/" + item.ID,
                        method:"PUT",
                    }).then(res => {
                        that.getData()
                    }).catch(e => {
                        console.log(e)
                        that.getData()
                    })
                }
            })
            
        },
        adminUnLock (item) {
            let that = this
            this.$Modal.confirm({
                title: "提示!",
                content: "确定解锁这个订单? ",
                onOk () {
                    that.$axios({
                        url: "sale/update/" + item.ID,
                        method:"PUT",
                        data: {
                            gift: item.gift,
                            deliveryCost: item.deliveryCost * 1,
                            giftAdditives: item.giftAdditives * 1,
                            rebate: item.rebate * 1,
                            remark: item.remark,
                            rebate_total: item.rebate_total *1,
                            Items: item.Items,
                            Total: item.Total,
                            status: 0,
                            image: item.image,
                        }
                    }).then(res => {
                        that.getData()
                    }).catch(e => {
                        console.log(e)
                        that.getData()
                    })
                }
            })
        },
        //锁定订单
        lock (e,item) {
            let f = e.target.files[0]
            // console.log(f)
            if (f.type.includes("jp") || f.type.includes("png")|| f.type.includes("gif")) {
                let Form = new FormData()
                // Form.append("file", f)
                Form.append("file", f)
                Form.append("id", item.ID)
                this.$axios({
                    url: "order/lock/" + item.ID,
                    method:"POST",
                    data: Form
                }).then(res => {
                    this.getData()
                }).catch(e => {
                    console.log(e)
                    that.getData()
                })
            } else {
                this.$Message.warning("请上传图片文件")
            }
        },
        showDetail (item) {
            this.show = true
            this.detail = item
            // if (!this.products.length) {
            //     this.getProduct().then(res => {
            //         if (item.Items) {
            //             item.Items.forEach(pro => {
            //                 pro.commodity = {}
            //                 this.products.forEach(commodity => {
            //                     if (pro.id == commodity.ID) {
            //                         pro.commodity = commodity
            //                     }
            //                 })
            //             })
            //         }
                    
            //         this.show = true
            //         this.detail = item
            //     })
            // } else {
            //     item.Items.forEach(pro => {
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
        getMore () {
            this.page++
            this.getData()
        },
        // format (n) {
        //     n = Number(n)
        //     var str = n.toString();
        //     str = str.replace(/[A-z]+/g, "")
        //     var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
        //     let num = str.replace(reg,"$1,");
        //     return num
        // },
        getData () {
            let load = this.$Message.loading({
                content: '加载中...',
                duration:100
            })

            this.$axios({
                url: "getAdminOrder/",
                params: {
                    page: this.page,
                    offset: this.offset,
                    status: "(0,2,3,4)"
                }
            }).then(res => {
                console.log(res)
                load()
                if (res.data.code == 200) {
                    res.data.data.forEach(item => {
                        item.count = 0
                        if (item.Items) {
                            item.Items.forEach(pro => {
                                item.count += Number(pro.Qty)
                            })
                        }
                        item.CreatedAt = new Date(item.CreatedAt).toLocaleDateString()
                    })
                    this.dataList = this.dataList.concat(res.data.data)
                    this.count = res.data.all_count[0]
                    if (this.dataList.length >= this.count ) {
                        this.noMore = true
                    }
                }
            }).catch(e => {
                console.log(e)
                load()
            })
        },
    }
}
</script>

