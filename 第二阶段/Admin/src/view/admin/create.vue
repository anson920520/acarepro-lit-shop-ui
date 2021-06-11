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
                        <FormItem label="" prop="name">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>名</span>
                                    <span>称</span>
                                </div>: 
                                <input class="input" v-model="addForm.name" />
                            </div>
                        </FormItem>
                        <FormItem label="" prop="role">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>等</span>
                                    <span>级</span>
                                </div>: 
                                <RadioGroup v-model="addForm.role">
                                    <Radio label="1">一级</Radio>
                                    <Radio label="2">二级</Radio>
                                </RadioGroup>
                            </div>
                        </FormItem>
                    </div>
                    <div class="flex3">
                        

                        <FormItem label="" prop="username">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>账</span>
                                    <span>号</span>
                                </div>: 
                                <input class="input" v-model="addForm.username" />
                            </div>
                        </FormItem>
                        
                    </div>
                    <div class="flex3">
                        <FormItem label="" prop="password">
                            <div class="al">
                                <div class="sb addFormLabel ">
                                    <span>密</span>
                                    <span>码</span>
                                </div>: 
                                <input class="input" type="password" v-model="addForm.password" />
                            </div>
                        </FormItem>
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
                name: [ { required: true, message: "　　　　　请输入名称",trigger: 'blur' } ],
                username: [ { required: true, message: "　　　　　请输入账号",trigger: 'blur' } ],
                password: [ { required: true, message: "　　　　　请输入密码",trigger: 'blur' } ],
            },
            addForm: {
                name: "",
                username: "",
                password: "",
                role: "1"
            },
            editForm: {
                username: "",
                password: "",
                name:"",
                role: ""
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
        okEdit () {
            let that = this
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    that.$axios({
                        url: "putAdmin/",
                        method:"PUT",
                        data: {
                            id: this.id * 1,
                            username: that.addForm.username,
                            password: that.addForm.password,
                            "role": that.addForm.role * 1,
                            "name": that.addForm.name,
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
                    url: "getAdmin/",
                    method:"GET",
                    params: {
                        id: this.id
                    }
                }).then(res => {
                    console.log(res)
                    if (res.data) {
                        let data = res.data.data[0]
                        this.addForm.name = data.name
                        this.addForm.username = data.username
                        this.addForm.password = data.password
                        this.addForm.role = data.role + ""
                    }
                }).catch(e => {
                    console.log(e)
                    let data = e.response.data.data[0]

                    this.addForm.name = data.name
                    this.addForm.username = data.username
                    this.addForm.password = data.password
                    this.addForm.role = data.role + ""
                })
            }
        },
        okAdd () {
            let that = this
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    that.$axios({
                        url: "postAdmin/",
                        method:"POST",
                        data: {
                            "username": that.addForm.username,
                            "password": that.addForm.password,
                            "name": that.addForm.name,
                            "role": that.addForm.role * 1,
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

