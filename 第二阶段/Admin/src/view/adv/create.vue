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
.flex3 {
    width: 33.33%;
}
.addFormLabel {
    min-width: 68px;
}
.width200 {
    width: 70%;
    height:200px;
}
.upload {
    margin: auto;
    width: 200px;
    height: 200px;
    border: solid #000 1px;
    border-radius: 10px;
    position: relative;
    
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
        <h4 class="ju" v-if="!id">新增广告</h4>
        <h4 class="ju" v-else>编辑广告</h4>
        <br>
        <Form ref="addForm" :model="addForm" :rules="rules">
            <div class="p30 sb">
                <div class="flex3">
                    <FormItem label="" prop="name">
                        <div class="al">
                            <div class="sb addFormLabel ">
                                <span>标</span>
                                <span>题</span>
                            </div>: 
                            <input class="input" v-model="addForm.name" />
                        </div>
                    </FormItem>

                    <FormItem label="" prop="shipping">
                        <div class="al">
                            <div class="sb addFormLabel ">
                                <span>状</span>
                                <span>态</span>
                            </div>: 
                            <RadioGroup v-model="addForm.status" style="margin-left:20px">
                                <Radio label='1'>启用</Radio>
                                <Radio label='0'>隐藏</Radio>
                            </RadioGroup>
                        </div>
                    </FormItem>

                </div>
                <div class="flex3">
                    <FormItem label="" prop="detail">
                        <div class="flex">
                            <div class="sb addFormLabel ">
                                <span>详</span>
                                <span>情</span>
                            </div>: 
                            <textarea class="width200" v-model="addForm.detail" ></textarea>

                        </div>
                    </FormItem>
                </div>
                <div class="flex3">
                    <div class="flex">
                        <div class="sb addFormLabel ">
                            <span>图</span>
                            <span>片</span>
                        </div>: 
                        <!-- <Upload :action="baseURL + 'uploadImageNews/'" multiple :on-success="uploadSuccess1" name="file" :headers="headers" :show-upload-list="false">
                            <Button class="blueBtn">上传圖片</Button>
                        </Upload> -->
                        <div>
                            <div class="upload" v-if="!addForm.image">
                                <label for="img" @change="upLoad">
                                    <input type="file" id="img" v-show="false">
                                </label>
                            </div>
                            <div class="relative"  v-else>
                                <Icon type="md-close" size="25" class="delImg" @click="addForm.image=''" />
                                <img :src="addForm.image" class="userImg" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- <br>
                    <div class="clearBoth" style="width: 80%;">
                        <div class="imgList" 
                            :style="{'background-image': `url(${item})`}"
                            draggable="true" @dragover="dragover" @dragstart="dragstart(i)" @drop="drop(i, 'addForm')"
                            v-for="(item,i) in addForm.img" :key="item">
                            <div class="delImg1" @click="delImg(i,'addForm')"><div></div></div>
                        </div>
                    </div> -->
                    
                </div>
            </div>
        </Form>
        <br>
        <div class="width70 flex-end">
            <Button class="blueBtn" @click="okAdd" v-if="!id">确认新增广告</Button>
            <Button class="blueBtn" @click="okEdit" v-else>储存</Button>
        </div>

        
    </div>
</template>

<script>
export default {
    data () {
        return {
            addForm: {
                name: '',
                news_category_id: '',
                status: "1",
                start_time: "",
                end_time:"",
                detail:"",
                image: ""
            },
            id: "",
            rules: {
                // name: [ { required: true, message: "　　　　　请输入广告名称",trigger: 'blur' } ],
                // detail: [ { required: true, message: "　　　　　请输入详情",trigger: 'blur' } ],
            },
            categories: [],
            startImg: -1,
            baseURL: "",
            headers: {
                token: localStorage.getItem("jwt"),
            }
        }
    },
    created () {
        this.baseURL = window.baseURL
        let id = this.$route.query.id
        if (id) {
            this.id = id
            this.getOne()
        }
    },
    methods:{ 
        upLoad (e) {
            let f = e.target.files[0]
            // console.log(f)
            if (f.type.includes("jp") || f.type.includes("png")) {
                // this.addForm.image = URL.createObjectURL(f)
                let data = new FormData()
                data.append("file", f),
                data.append("id", this.id),
                this.$axios({
                    url: "uploadImageNews/",
                    data,
                    method:"POST"
                }).then(res => {
                    console.log(res)
                    this.addForm.image = window.imgUrl + "news/" + res.data.data
                })

            } else {
                this.$Message.warning("请上传图片文件")
            }
        },
        changeTime (e,key) {
            this.addForm[key] = e
        },
        uploadSuccess1 (e) {
            if (e.img_url) {
                this['addForm'].img.push(e.img_url)
            }
        },
        getOne () {
            this.$axios({
                url: "getAdvertisement/",
                params: {
                    id: this.id
                }
            }).then(res => {
                if (res.data.data[0]) {
                    this.addForm.name = res.data.data[0].name
                    this.addForm.status = res.data.data[0].status + ""
                    this.addForm.detail = res.data.data[0].detail
                    this.addForm.image = res.data.data[0].image
                }
            }).catch(e => {
                console.log(e)
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
                        url: "putAdvertisement/",
                        method:"PUT",
                        data: {
                            id: that.id * 1 ,
                            name: this.addForm.name,
                            detail: this.addForm.detail,
                            status: this.addForm.status * 1,
                            image: this.addForm.image,
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
                        url: "postAdvertisement/",
                        method:"POST",
                        data: {
                            name: this.addForm.name,
                            detail: this.addForm.detail,
                            status: this.addForm.status * 1,
                            image: this.addForm.image,
                            // image: "['1','2','3']",
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
                        // if (e.response) {
                        //     this.$Message.success(e.response.data.message)
                        // }
                    })
                }
            })
        },

    }
}
</script>

