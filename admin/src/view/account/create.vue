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
}
.userImg {
    width: 300px;
}
</style>

<template>
    <div>
        <h4 class="ju" v-if="!id">新增账户</h4>
        <h4 class="ju" v-else>编辑账户</h4>
        <br>

        <div>
            <Form ref="addForm" :model="addForm" :rules="rules">
                <div class="p30  sb">
                    <div class="flex3">
                        <FormItem label="" prop="company">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>公</span>
                                    <span>司</span>
                                    <span>名</span>
                                    <span>称</span>
                                </div>: 
                                <input class="input" v-model="addForm.company"  />
                            </div>
                        </FormItem>

                        <FormItem label="" prop="address">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>公</span>
                                    <span>司</span>
                                    <span>地</span>
                                    <span>址</span>
                                </div>: 
                                <input class="input" v-model="addForm.address" />
                            </div>
                        </FormItem>

                        <FormItem label="" prop="principal">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>负</span>
                                    <span>责</span>
                                    <span>人</span>
                                </div>: 
                                <input class="input" v-model="addForm.principal" />
                            </div>
                        </FormItem>

                        <FormItem label="" prop="phone">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>联</span>
                                    <span>络</span>
                                    <span>电</span>
                                    <span>话</span>
                                </div>: 
                                <input class="input" v-model="addForm.phone" />
                            </div>
                        </FormItem>

                        <FormItem label="" prop="username">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>账</span>
                                    <span>号</span>
                                </div>: 
                                <input class="input" v-model="addForm.username" />
                            </div>
                        </FormItem>

                        <FormItem label="" prop="password">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>密</span>
                                    <span>码</span>
                                </div>: 
                                <input class="input" type="text" v-model="addForm.password" />
                            </div>
                        </FormItem>

                    </div>
                    <div class="flex3">
                        <FormItem label="" prop="shipping">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>收</span>
                                    <span>货</span>
                                    <span>地</span>
                                    <span>址</span>
                                </div>: 
                                <input class="input" v-model="addForm.shipping" />
                            </div>
                        </FormItem>

                        <FormItem label="" prop="receiver">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>收</span>
                                    <span>件</span>
                                    <span>人</span>
                                </div>: 
                                <input class="input" v-model="addForm.receiver" />
                            </div>
                        </FormItem>

                        <FormItem label="" prop="sale">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>业</span>
                                    <span>务</span>
                                    <span>负</span>
                                    <span>责</span>
                                    <span>人</span>
                                </div>: 
                                <input class="input" v-model="addForm.sale" />
                            </div>
                        </FormItem>
                    </div>
                    <div class="flex3">
                        <div class="upload" v-if="!src">
                            <label for="img" @change="upLoad">
                                <input type="file" id="img" v-show="false">
                            </label>
                            <br>
                            <p class="ju">上传营业执照</p>
                        </div>
                        <div class="relative"  v-else>
                            <Icon type="md-close" size="25" class="delImg" @click="src=''" />
                            <img :src="src" class="userImg" alt="">
                        </div>
                        
                    </div>
                </div>
            </Form>
            <br>
            <div class="flex-end">
                <Button class="blueBtn" v-if="!id" @click="okAdd">确认新增用户</Button>
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
                company: [ { required: true, message: "　　　　　请输入公司名称",trigger: 'blur' } ],
                address: [ { required: true, message: "　　　　　请输入公司地址",trigger: 'blur' } ],
                username: [ { required: true, message: "　　　　　请输入账号",trigger: 'blur' } ],
                password: [ { required: true, message: "　　　　　请输入密码",trigger: 'blur' } ],
                principal: [ { required: true, message: "　　　　　请输入负责人",trigger: 'blur' } ],
                phone: [ { required: true, message: "　　　　　请输入联络电话",trigger: 'blur' } ],
                shipping: [ { required: true, message: "　　　　　请输入收货地址",trigger: 'blur' } ],
                receiver: [ { required: true, message: "　　　　　请输入收件人",trigger: 'blur' } ],
                sale: [ { required: true, message: "　　　　　请输入业务负责人",trigger: 'blur' } ],
            },
            addForm: {
                company: "",
                address: "",
                username: "",
                password: "",
                principal: '',
                phone: '',
                shipping: '',
                receiver: "",
                sale: "",
            },
            editForm: {
                username: "",
                password: ""
            },
            id: "",
            src: "",
            f: null,    //图片文件

        }
    },
    created () {
        this.getOne()
    },
    methods:{
        upLoad (e) {
            let f = e.target.files[0]
            // console.log(f)
            if (f.type.includes("jp") || f.type.includes("png")) {
                this.src = URL.createObjectURL(f)
                this.f = f
                // let data = new FormData()
                // data.append("file", f),
                // data.append("id", this.id),
                // this.$axios({
                //     url: "user/br/" + this.id,
                //     data,
                //     method:"POST"
                // }).then(res => {
                //     console.log(res)
                // })

            } else {
                this.$Message.warning("请上传图片文件")
            }
        },
        POSTImg (id) {
            let data = new FormData()
            data.append("file", this.f),
            data.append("id", id),
            this.$axios({
                url: "user/br/" + id,
                data,
                method:"POST"
            }).then(res => {
                console.log(res)
            })
        },
        okEdit () {
            let that = this
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    that.$axios({
                        url: "user/edit/" + this.id,
                        method:"PUT",
                        data: {
                            username: that.addForm.username,
                            password: that.addForm.password,
                            "principal": that.addForm.principal,
                            "company": that.addForm.company,
                            "phone": that.addForm.phone,
                            "address": that.addForm.address,
                            "shipping": that.addForm.shipping,
                            "receiver": that.addForm.receiver,
                            "sale": that.addForm.sale
                        }
                    }).then(res => {
                        if (res.data.code == 200) {
                            this.$Message.success('编辑成功')
                            this.$router.back()
                        } else {
                            this.$Message.success(res.data.message)
                        }
                        if (that.f) {
                            that.POSTImg(that.id)
                        }
                    })
                    
                }
            })
        },
        getOne () {
            let id = this.$route.query.id
            if (id) {
                this.id = id
                this.$axios({
                    url: "user/one/" + this.id,
                    method:"GET",
                }).then(res => {
                    console.log(res)
                    if (res.data) {
                        this.addForm.company = res.data.company
                        this.addForm.address = res.data.address
                        this.addForm.principal = res.data.principal
                        this.addForm.phone = res.data.phone
                        this.addForm.username = res.data.username
                        this.addForm.password = res.data.password
                        this.addForm.shipping = res.data.shipping
                        this.addForm.receiver = res.data.receiver
                        this.addForm.sale = res.data.sale
                        if (res.data.image) {
                            this.src = window.imgUrl + "license/" + res.data.image
                        }
                        
                    }
                }).catch(e => {
                    console.log(e)
                })
            }
        },
        okAdd () {
            let that = this
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    that.$axios({
                        url: "user/create",
                        method:"POST",
                        data: {
                            "username": that.addForm.username,
                            "password": that.addForm.password,
                            "principal": that.addForm.principal,
                            "company": that.addForm.company,
                            "phone": that.addForm.phone,
                            "address": that.addForm.address,
                            "shipping": that.addForm.shipping,
                            "receiver": that.addForm.receiver,
                            "sale": that.addForm.sale
                        }
                    }).then(res => {
                        console.log(res)
                        if (res.data.code == 200) {
                            if (this.f) {
                                this.POSTImg(res.data.id)
                            }
                            this.$Message.success('新增成功')
                            this.$router.back()
                        } else {
                            this.$Message.success(res.data.message)
                        }
                    })
                }
            })
        }
    }
}
</script>

