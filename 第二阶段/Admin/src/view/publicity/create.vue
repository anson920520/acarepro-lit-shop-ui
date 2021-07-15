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

</style>

<template>
    <div>
        <h4 class="ju" v-if="!id">新增宣传素材</h4>
        <h4 class="ju" v-else>编辑宣传素材</h4>
        <br>
        <Form ref="addForm" :model="addForm" :rules="rules">
            <div class="p30 flex">
                <div class="flex3">
                    <FormItem label="" prop="publicity_category_id">
                        <div class="al">
                            <div class="sb addFormLabel ">
                                <span>分</span>
                                <span>类</span>
                            </div>: 
                            <select class="input" v-model="addForm.publicity_category_id">
                                <option v-for="(item) in categories" :key="item.ID" :value="item.ID">{{item.name}}</option>
                            </select>
                        </div>
                    </FormItem>

                    <FormItem label="" prop="name">
                        <div class="al">
                            <div class="sb addFormLabel ">
                                <span>标</span>
                                <span>题</span>
                            </div>: 
                            <input class="input" v-model="addForm.name" />
                        </div>
                    </FormItem>

                    <FormItem label="" prop="start_time">
                        <div class="al">
                            <div class="sb addFormLabel ">
                                <span>开</span>
                                <span>始</span>
                                <span>时</span>
                                <span>间</span>
                            </div>: 
                            <DatePicker class="input noBorder" format="yyyy-MM-dd" :value='addForm.start_time' @on-change="changeTime($event,'start_time')"></DatePicker>
                        </div>
                    </FormItem>

                    <FormItem label="" prop="end_time">
                        <div class="al">
                            <div class="sb addFormLabel ">
                                <span>结</span>
                                <span>束</span>
                                <span>时</span>
                                <span>间</span>
                            </div>: 
                            <DatePicker class="input noBorder" format="yyyy-MM-dd" :value='addForm.end_time' @on-change="changeTime($event,'end_time')"></DatePicker>
                        </div>
                    </FormItem>

                    <FormItem label="" prop="shipping">
                        <div class="al">
                            <div class="sb addFormLabel ">
                                <span>状</span>
                                <span>态</span>
                            </div>: 
                            <RadioGroup v-model="addForm.status" style="margin-left:20px;">
                                <Radio label='1'>启用</Radio>
                                <Radio label='0'>隐藏</Radio>
                            </RadioGroup>
                        </div>
                    </FormItem>
                </div>
                <div class="flex3">
                    <div class="al">
                        <div class="sb addFormLabel ">
                            <span>附</span>
                            <span>件</span>
                        </div>: 
                        <Upload :action="baseURL + 'uploadFile/'" :on-success="uploadSuccess" name="file" :headers="headers" :show-upload-list="false">
                            <Button class="blueBtn">上传附件</Button>
                        </Upload>
                    </div>
                    <br>

                    <div class="flex al" v-show="addForm.file">
                        <a :href="addForm.file" target="_blank">{{addForm.file}}</a>
                        <Icon type="md-close" class="op cursor" @click="addForm.file=''" size="25" />
                    </div>
                    <br><br>

                    <div class="al">
                        <div class="sb addFormLabel ">
                            <span>图</span>
                            <span>片</span>
                        </div>: 
                        <Upload :action="baseURL + 'uploadImageNews/'" multiple :on-success="uploadSuccess1" name="file" :headers="headers" :show-upload-list="false">
                            <Button class="blueBtn">上传圖片</Button>
                        </Upload>
                    </div>
                    <br>
                    <div class="clearBoth" style="width: 80%;">
                        <div class="imgList" 
                            :style="{'background-image': `url(${item})`}"
                            draggable="true" @dragover="dragover" @dragstart="dragstart(i)" @drop="drop(i, 'addForm')"
                            v-for="(item,i) in addForm.img" :key="item">
                            <div class="delImg1" @click="delImg(i,'addForm')"><div></div></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <FormItem label="" prop="detail">
                <div class="flex">
                    <div class="sb addFormLabel ">
                        <span>详</span>
                        <span>情</span>
                    </div>: 
                    <!-- <textarea class="width200" v-model="addForm.detail" ></textarea> -->
                    <div id="dom"></div>

                </div>
            </FormItem>
        </Form>
        <br>
        <div class="width70 flex-end">
            <Button class="blueBtn" @click="okAdd" v-if="!id">确认新增宣传素材</Button>
            <Button class="blueBtn" @click="okEdit" v-else>储存</Button>
        </div>

        
    </div>
</template>

<script>
import E from "wangeditor"

export default {
    data () {
        return {
            addForm: {
                name: '',
                publicity_category_id: '',
                status: "1",
                start_time: "",
                end_time:"",
                detail:"",
                img: [],
                file: ""
            },
            id: "",
            rules: {
                name: [ { required: true, message: "　　　　　请输入宣传素材名称",trigger: 'blur' } ],
                publicity_category_id: [ { required: true, message: "　　　　　请选择宣传素材分类" } ],
                start_time: [ { required: true, message: "　　　　　请选择开始时间",trigger: 'blur' } ],
                end_time: [ { required: true, message: "　　　　　请选择结束时间",trigger: 'blur' } ],
                detail: [ { required: true, message: "　　　　　请输入详情",trigger: 'blur' } ],
            },
            categories: [],
            startImg: -1,
            baseURL: "",
            headers: {
                token: localStorage.getItem("jwt"),
            },
            dom: {}

        }
    },
    created () {
        this.baseURL = window.baseURL
        let id = this.$route.query.id
        if (id) {
            this.id = id
            this.getOne()
        }
        this.getCate()
    },
    mounted () {
        let that = this
        this.dom = new E("#dom")
        this.dom.config.onchange = (html) => {
            that.addForm.detail = html
        }
        this.dom.config.zIndex = 10
        this.dom.config.placeholder = "請輸入详情"
        this.dom.create()
    },
    methods:{ 
        changeTime (e,key) {
            this.addForm[key] = e
        },
        uploadSuccess (e) {
            console.log(e)
            if (e.data) {
                this['addForm'].file=  window.imgUrl + 'file/' + e.data
            }
        },
        uploadSuccess1 (e) {
            console.log(e)
            if (e.data) {
                this['addForm'].img.push( window.imgUrl + 'news/' + e.data)
            }
        },
        drop (i,key) {
            if (this.startImg != -1) {
                let one = this[key].img[this.startImg]
                let two = this[key].img[i]
                this[key].img.splice(this.startImg,1,two)
                this[key].img.splice(i,1,one)
            }
        },
        dragstart (i) { this.startImg = i },
        dragover (e) { e.preventDefault() },
        delImg (i,key) {
            this[key].img.splice(i,1)
        },
        getCate () {
            this.$axios({
                url: "getPublicityCategory/",
                params: {
                    page: 1,
                    offset: 99999,
                }
            }).then(res => {
                console.log(res)
                this.categories = res.data.data
            })
        },
        getOne () {
            this.$axios({
                url: "getPublicity/",
                params: {
                    id: this.id
                }
            }).then(res => {
                if (res.data.data[0]) {
                    this.addForm.name = res.data.data[0].name
                    this.addForm.publicity_category_id = res.data.data[0].publicity_category_id
                    this.addForm.start_time = res.data.data[0].start_time.split("T")[0]
                    this.addForm.end_time = res.data.data[0].end_time.split("T")[0]
                    this.addForm.status = res.data.data[0].status + ""
                    this.addForm.detail = res.data.data[0].detail
                    this.addForm.file = res.data.data[0].file
                    this.addForm.img = JSON.parse(res.data.data[0].image)
                    this.dom.txt.html(this.addForm.detail)
                    // res.data.forEach(item => {
                    //     if (item.id == this.id) {
                    //         this.addForm.username = item.username
                    //         this.addForm.password = item.password
                    //     }
                    // })
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
                        url: "putPublicity/",
                        method:"PUT",
                        data: {
                            id: that.id * 1 ,
                            name: this.addForm.name,
                            detail: this.addForm.detail,
                            publicity_category_id: this.addForm.publicity_category_id,
                            status: this.addForm.status * 1,
                            start_time: this.addForm.start_time,
                            end_time: this.addForm.end_time,
                            file: this.addForm.file,
                            image: JSON.stringify(this.addForm.img),
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
                        url: "postPublicity/",
                        method:"POST",
                        data: {
                            name: this.addForm.name,
                            detail: this.addForm.detail,
                            publicity_category_id: this.addForm.publicity_category_id,
                            status: this.addForm.status * 1,
                            start_time: this.addForm.start_time,
                            end_time: this.addForm.end_time,
                            image: JSON.stringify(this.addForm.img),
                            file: this.addForm.file,
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
                        load()
                        console.log(e)
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

