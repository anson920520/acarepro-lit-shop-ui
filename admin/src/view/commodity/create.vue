<style lang="less" scoped>
.p30 {
    padding: 30px;
    border: solid #CCC 1px;
    border-radius: 10px;
}
.flex3 {
    flex: 3.33;
}
.addFormLabel {
    min-width: 68px;
}
.addFormLabel + input, .addFormLabel + select {
    width: 70%;
}
.pl10 {
    // padding-left: 7%;
}
.upload {
    margin: auto;
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
    }
}
.userImg {
    width: 300px;
}
.cusInp {
    width: 60px;
    height: 25px;
    margin-right: 10px;
}
.left100 {
    left: 100% !important;
}
</style>

<template>
    <div>
        <h4 class="ju" v-if="!id">新增产品</h4>
        <h4 class="ju" v-else>编辑产品</h4>
        <br>

        <div>
            <Form ref="addForm" :model="addForm" :rules="rules">
                <div class="p30  sb">
                    <div class="flex3">
                        <FormItem label="" prop="categoryId">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>产</span>
                                    <span>品</span>
                                    <span>系</span>
                                    <span>列</span>
                                </div>: 
                                <select class="input" v-model="addForm.categoryId" >
                                    <option value="" disabled selected>请选择产品系列</option>
                                    <option v-for="(item,i) in categories" :key="i" :value="item.ID">{{item.Name}}</option>
                                </select>
                            </div>
                        </FormItem>
                        <FormItem label="" prop="name">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>产</span>
                                    <span>品</span>
                                    <span>名</span>
                                    <span>称</span>
                                </div>: 
                                <input class="input" v-model="addForm.name" />
                            </div>
                        </FormItem>

                        <FormItem label="" prop="proNumber">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>产</span>
                                    <span>品</span>
                                    <span>型</span>
                                    <span>号</span>
                                </div>: 
                                <input class="input" v-model="addForm.proNumber" />
                            </div>
                        </FormItem>
                    </div>
                    <div class="flex3" style="flex:4">
                        <FormItem label="" prop="viscosity">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>粘</span>
                                    <span>度</span>
                                </div>: 
                                <input class="input" v-model="addForm.viscosity" />
                            </div>
                        </FormItem>
                        <FormItem label="" prop="price">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>价</span>
                                    <span>格</span>
                                </div>: 
                                <input class="input" type="number" v-model="addForm.price"  />
                            </div>
                        </FormItem>
                        <FormItem label="" prop="specification1">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>每</span>
                                    <span>箱</span>
                                    <span>含</span>
                                    <span>量</span>
                                </div>: 
                                <!-- <input class="input" v-model="addForm.specification" /> -->
                                <div class="al">
                                    <input type="number" min="1" class="cusInp" v-model="addForm.specification.val1" >
                                    <select class="cusInp" v-model="addForm.specification.val2">
                                        <option value="升">升</option>
                                        <option value="毫升">毫升</option>
                                    </select> 
                                    <span style="margin-right:10px;">×</span>
                                    <input type="number" min="1" class="cusInp" v-model="addForm.specification.val3">
                                    <select class="cusInp" v-model="addForm.specification.val4">
                                        <option value="瓶">瓶</option>
                                        <option value="桶">桶</option>
                                    </select>
                                </div>
                            </div>
                        </FormItem>

                    </div>
                    <div class="flex3">
                        <div class="upload" v-if="!src">
                            <label for="img" @change="upLoad">
                                <input type="file" id="img" v-show="false">
                            </label>
                            <br>
                            <p class="ju">上传产品图片</p>
                        </div>
                        <div class="relative" v-else>
                            <Icon type="md-close" size="25" class="delImg left100" @click="src=''" />
                            <img :src="src" class="userImg" alt="">
                        </div>
                        <br>
                    </div>
                </div>
            </Form>
            <br>
            <div class="flex-end">
                <Button class="blueBtn" v-if="!id" @click="okAdd">确认新增产品</Button>
                <Button class="blueBtn" v-else @click="okEdit">储存</Button>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            rules: {
                categoryId: [ { required: true, message: "　　　　　请选择产品系列" } ],
                name: [ { required: true, message: "　　　　　请输入产品名称",trigger: 'blur' } ],
                proNumber: [ { required: true, message: "　　　　　请输入型号",trigger: 'blur' } ],
                price: [ { required: true, message: "　　　　　请输入价格",trigger: 'blur' } ],
                specification: [ { required: true, message: "　　　　　请输入每箱含量",trigger: 'blur' } ],
                viscosity: [ { required: true, message: "　　　　　请输入粘度",trigger: 'blur' } ],
            },
            addForm: {
                categoryId: "",
                name: "",
                proNumber: "",
                price: "",
                viscosity: "",
                specification: {
                    val1: "", val2: "升", val3: "", val4: "瓶"
                },
                status: "1",
            },
            item: {},
            id: "",
            src: "",
            f: null,    //图片文件
            categories: [],
        }
    },
    created () {
        this.getOne()
        this.getCate()
    },
    methods:{
        getCate () {
            this.loading=true
            this.$axios({
                url: "category"
            }).then(res => {
                if (res.data) {
                    this.categories = res.data
                } else {
                    this.loading = false
                }
            }).catch(e => {
                console.log(e)
                this.loading = false
            })
        },
        upLoad (e) {
            let f = e.target.files[0]
            // console.log(f)
            if (f.type.includes("jp") || f.type.includes("png")) {
                this.src = URL.createObjectURL(f)
                this.f = f
            } else {
                this.$Message.warning("请上传图片文件")
            }
        },
        POSTImg (id) {
            let data = new FormData()
            data.append("file", this.f),
            data.append("id", id),
            this.$axios({
                url: "image",
                data,
                method:"POST"
            }).then(res => {
                console.log(res)
            })
        },
        okEdit () {
            let that = this
            this.$refs.addForm.validate(flag => {
                let desc = {
                    viscosity: that.addForm.viscosity,
                    proNumber: that.addForm.proNumber,
                    specification: that.addForm.specification,
                    status: that.addForm.status,
                }
                if (flag) {
                    let data = {
                        "name": that.addForm.name,
                        "desc": JSON.stringify(desc),
                        "price": that.addForm.price * 1,
                        image: that.addForm.image,
                        categoryId: that.addForm.categoryId,
                    }
                    that.$axios({
                        url: "product/edit/" + this.id,
                        method:"PUT",
                        data
                    }).then(res => {
                        console.log(res)
                        if (res.data.code == 200) {
                            this.$Message.success('编辑成功')
                            this.$router.back()
                        } else {
                            this.$Message.success(res.data.message)
                        }
                    }).catch(e => {
                        console.log(e)
                    })


                    if (this.f) {
                        this.POSTImg(this.id)
                    }
                }
            })
        },
        getOne () {
            let id = this.$route.query.id
            if (id) {
                this.id = id
            }
            if (this.$route.params.item) {
                let item = this.$route.params.item
                this.item = item
                this.addForm.name = item.name
                this.addForm.image = item.image
                this.addForm.proNumber = item.proNumber
                this.addForm.price = item.price + ""
                this.addForm.specification = item.desc.specification
                this.addForm.viscosity = item.desc.viscosity
                this.addForm.status = item.desc.status
                this.addForm.categoryId = item.categoryId
                if (item.image) {
                    this.src = window.imgUrl + "images/" + item.image
                }
                
            }
        },
        okAdd () {
            let that = this
            
            this.$refs.addForm.validate(flag => {
                let desc = {
                    viscosity: that.addForm.viscosity,
                    proNumber: that.addForm.proNumber,
                    specification: that.addForm.specification,
                    status: "1",
                }
                if (flag) {
                    if (!this.src) {
                        this.$Message.warning('请上传产品图片')
                        return false
                    }
                    let data = {
                        "name": that.addForm.name,
                        "desc": JSON.stringify(desc),
                        "price": that.addForm.price * 1,
                        image: "0",
                        categoryId: that.addForm.categoryId,
                    }
                    console.log(data)
                    // return false
                    that.$axios({
                        url: "product/create",
                        method:"POST",
                        data
                    }).then(res => {
                        console.log(res)
                        if (res.data.code == 200) {
                            this.$Message.success('创建成功')
                            if (res.data.id) {
                                that.POSTImg(res.data.id)
                            }
                            this.$router.back()
                        } else {
                            this.$Message.success(res.data.message)
                        }
                    }).catch(e => {
                        console.log(e)
                    })
                }
            })
        }
    }
}
</script>

