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
        <h4 class="ju" v-if="!id">新增新闻分类</h4>
        <h4 class="ju" v-else>编辑新闻分类</h4>
        <br>
        <Form :label-width="120" :model="addForm" ref="addForm" :rules="rules" >
            <div class="borderBox al ju">
                <FormItem label="分类名称" prop="name">
                    <input class="input" v-model="addForm.name" />
                </FormItem>

            </div>
        </Form>
        <br>
        <div class="width70 flex-end">
            <Button class="blueBtn" @click="okAdd" v-if="!id">确认新增新闻分类</Button>
            <Button class="blueBtn" @click="okEdit" v-else>储存</Button>
        </div>

        
    </div>
</template>

<script>
export default {
    data () {
        return {
            addForm: {
                name: ''
            },
            id: "",
            rules: {
                name: [ { required: true, message: "请输入新闻分类名称",trigger: 'blur' } ],
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
                url: "getNewsCategory/",
                params: {
                    id: this.id
                }
            }).then(res => {
                if (res.data.data[0]) {
                    this.addForm.name = res.data.data[0].name
                    // res.data.forEach(item => {
                    //     if (item.id == this.id) {
                    //         this.addForm.username = item.username
                    //         this.addForm.password = item.password
                    //     }
                    // })
                }
            })
        },
        okEdit () {
            let that = this
            let Form = new FormData()
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    let load = this.$Message.loading({
                        content: "Loading...",
                        duration: "999"
                    })
                    that.$axios({
                        url: "putNewsCategory/",
                        method:"PUT",
                        data: {
                            id: that.id * 1 ,
                            name: that.addForm.name
                        },
                    }).then(res => {
                        load()
                        console.log(res)
                        // if (res.data.code == 200) {
                            this.$Message.success('编辑成功')
                            this.$router.back()
                        // } else {
                            // this.$Message.success(res.data.message)
                        // }
                    }).catch(e => {
                        console.log(e)
                        load()
                    })
                }
            })
        },
        okAdd () {
            let that = this
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    let load = this.$Message.loading({
                        content: "Loading...",
                        duration: "999"
                    })
                    that.$axios({
                        url: "postNewsCategory/",
                        method:"POST",
                        data: {
                            name: this.addForm.name
                        }
                    }).then(res => {
                        load()
                        console.log(res)
                        if (res.data.code == 200) {
                            this.$Message.success('创建成功')
                            this.$router.back()
                        } else {
                            this.$Message.success(res.data.message)
                        }
                    }).catch(e => {
                        console.log(e)
                        load()
                    })
                }
            })
        },

    }
}
</script>

