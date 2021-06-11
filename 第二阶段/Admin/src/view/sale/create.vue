<style lang="less" scoped>
.borderBox {
    width: 100%;
    padding: 30px 0 20px;
    border: solid #CCC 1px;
    margin: auto;
    border-radius: 10px;
}
.width70 {
    width: 100%;
    margin: auto;
}
</style>

<template>
    <div>
        <h4 class="ju" v-if="!id">新增业务负责人</h4>
        <h4 class="ju" v-else>编辑业务负责人</h4>
        <br>
        <Form :label-width="120" :model="addForm" ref="addForm" :rules="rules" >
            <div class="borderBox al ju">
                <FormItem label="姓名" prop="username">
                    <input class="input" v-model="addForm.username" />
                </FormItem>

                <FormItem label="密码" prop="password">
                    <input class="input" type="text" v-model="addForm.password" />
                </FormItem>

            </div>
        </Form>
        <br>
        <div class="width70 flex-end">
            <Button class="blueBtn" @click="okAdd" v-if="!id">确认新增业务负责人</Button>
            <Button class="blueBtn" @click="okEdit" v-else>储存</Button>
        </div>

        
    </div>
</template>

<script>
export default {
    data () {
        return {
            addForm: {
                username: '',password:"", Promotion: ""
            },
            id: "",
            rules: {
                username: [ { required: true, message: "请输入业务负责人名称",trigger: 'blur' } ],
                password: [ { required: true, message: "密码",trigger: 'blur' } ],
            },
        }
    },
    created () {
        let id = this.$route.query.id
        if (id) {
            this.id = id
            this.getOne()
        }
    },
    methods:{ 
        getOne () {
            this.$axios({
                url: "sale/users"
            }).then(res => {
                if (res.data) {
                    res.data.forEach(item => {
                        if (item.ID == this.id) {
                            this.addForm.username = item.username
                            this.addForm.password = item.password
                        }
                    })
                }
            })
        },
        okEdit () {
            let that = this
            let Form = new FormData()
            Form.append("id", that.id)
            Form.append("username", that.addForm.username)
            Form.append("password", that.addForm.password)
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    that.$axios({
                        url: "sale/edit/",
                        method:"PUT",
                        data: Form,
                    }).then(res => {
                        console.log(res)
                        // if (res.data.code == 200) {
                            this.$Message.success('编辑成功')
                            this.$router.back()
                        // } else {
                            // this.$Message.success(res.data.message)
                        // }
                    })
                }
            })
        },
        okAdd () {
            let that = this
            let Form = new FormData()
            Form.append("username", that.addForm.username)
            Form.append("password", that.addForm.password)

            this.$refs.addForm.validate(flag => {
                if (flag) {
                    that.$axios({
                        url: "sale/register/",
                        method:"POST",
                        data: Form,
                        // headers: {
						// 	"Content-Type": "application/x-www-form-urlencoded"
						// },
                    }).then(res => {
                        console.log(res)
                        if (res.data.ID) {
                            this.$Message.success('创建成功')
                            this.$router.back()
                        } else {
                            this.$Message.success(res.data.message)
                        }
                    })
                }
            })
        },

    }
}
</script>

