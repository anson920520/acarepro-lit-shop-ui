import axios from "axios"
import router from "@/router/router"
import {Modal} from "view-design"

// window.baseURL = "https://acarepro.online/store/qiaoyumin/login/little/api/v1/"
// axios.defaults.baseURL = "/lwz/"
// axios.defaults.baseURL = "/local/"
// window.baseURL = "http://192.168.1.115:5005/api/v1/"
window.baseURL = "http://139.9.194.151:9005/api/v1/"


axios.defaults.baseURL = window.baseURL

window.imgUrl = "http://139.9.194.151:7111/"
// window.imgUrl = "https://acarepro.online/IMGPATH/"

axios.interceptors.request.use(config => {
    config.headers = {
        token: localStorage.getItem("jwt")
    }
    return config   
})
axios.interceptors.response.use(res => {
    //處理時間格式
    if (res.data instanceof Array) {
        res.data.forEach(item => {
            if (item.CreatedAt) {
                format(item,'CreatedAt','createAt')
            }
            if (item.UpdatedAt) {
                format(item, "UpdatedAt", "updateAt")
            }
        })
    }

    //處理產品信息
    if (res.config.url.includes("product")) {
        if (res.data) {
            try {
                res.data.data.forEach(pro => {
                    initPro(pro)
                })
            } catch {}
            
        }
        
    }

    return res
}, e => {
    console.log(123,e, e.response)
    if (e.response) {
        if (e.response.data.msg) {
            if (e.response.data.msg.includes("token")) {
                Modal.warning({
                    title: "提示",
                    content: "登录信息已过期，请重新登录！",
                    onOk () {
                        router.replace("/login")
                    }
                })
                
            }
        }
    }
})

function initPro (item) {
    try {
        item.desc = JSON.parse(item.desc)
        if (!item.desc.specification) {
            item.desc.specification = {}
        } else {
            item.specification = item.desc.specification.val1 + item.desc.specification.val2 + " × " + item.desc.specification.val3 + item.desc.specification.val4
        }
        item.proNumber = item.desc.proNumber
        item.viscosity = item.desc.viscosity
    } catch {
        console.log('catch', item.ID)
        item.desc = {}
    }
}

function format (item,key1, key2) {
    let D = new Date(item[key1])
    // console.log(D)
    let h = D.getHours() < 10 ? "0" + D.getHours() : D.getHours()
    let m = D.getMinutes() < 10 ? "0" + D.getMinutes() : D.getMinutes()
    item[key2] = D.toLocaleDateString() + " " + h + ":" + m
}

export default axios