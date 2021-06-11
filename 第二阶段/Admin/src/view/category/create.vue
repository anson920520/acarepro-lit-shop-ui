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
        <h4 class="ju" v-if="!id">新增系列</h4>
        <h4 class="ju" v-else>编辑系列</h4>
        <br>
        <Form :label-width="120" :model="addForm" ref="addForm" :rules="rules" >
            <div class="borderBox al ju">
                <FormItem label="系列名称" prop="Name">
                    <input class="input" v-model="addForm.Name" />
                </FormItem>

                <!-- <FormItem label="促销政策" prop="Desc">
                    <input class="input" v-model="addForm.Desc" />
                </FormItem>

                <FormItem label="优惠数量" prop="Promotion">
                    <input class="input" v-model="addForm.Promotion" type="number" />
                </FormItem> -->
            </div>
        </Form>
        <br>
        <div class="width70 flex-end">
            <Button class="blueBtn" @click="okAdd" v-if="!id">确认新增系列</Button>
            <Button class="blueBtn" @click="okEdit" v-else>储存</Button>
        </div>

        
    </div>
</template>

<script>
export default {
    data () {
        return {
            addForm: {
                Name: '',Desc:"default", Promotion: 0
            },
            id: "",
            rules: {
                Name: [ { required: true, message: "请输入系列名称",trigger: 'blur' } ],
                Desc: [ { required: true, message: "请输入促销政策",trigger: 'blur' } ],
                Promotion: [ { required: true, message: "请输入优惠数量",trigger: 'blur' } ],
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
                url: "category/one/" + this.id
            }).then(res => {
                if (res.data) {
                    this.addForm.Name = res.data[0].Name
                    this.addForm.Desc = res.data[0].Desc
                    this.addForm.Promotion = res.data[0].Promotion + ""
                }
            }).catch(e => {
                console.log(e)
            })
        },
        okEdit () {
            let that = this
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    if (that.addForm.Promotion == 0) {
                        that.$axios({
                            url: "category/cancelPromo/" + this.id,
                            method:"PUT"
                        })
                    }
                    that.$axios({
                        url: "category/edit/" + this.id,
                        method:"PUT",
                        data: {
                            "Name": that.addForm.Name,
                            "Desc": that.addForm.Desc,
                            "Promotion": that.addForm.Promotion * 1,
                        }
                    }).then(res => {
                        console.log(res)
                        if (res.data.code == 200) {
                            this.$Message.success('编辑成功')
                            this.$router.back()
                        } else {
                            this.$Message.success(res.data.message)
                        }
                    })
                }
            })
        },
        okAdd () {
            let that = this
            this.$refs.addForm.validate(flag => {
                if (flag) {
                    that.$axios({
                        url: "category/create",
                        method:"POST",
                        data: {
                            "Name": that.addForm.Name,
                            "Desc": that.addForm.Desc,
                            "Promotion": that.addForm.Promotion * 1,
                        }
                    }).then(res => {
                        console.log(res)
                        if (res.data.code == 200) {
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

