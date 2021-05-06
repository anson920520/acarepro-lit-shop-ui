import axios from "axios"

// axios.defaults.baseURL = "https://acarepro.online/store/qiaoyumin/login/little/api/v1/"
// axios.defaults.baseURL = "/lwz/"
axios.defaults.baseURL = "http://192.168.1.115:5005/api/v1/"

// window.imgUrl = "http://139.9.174.163/"
window.imgUrl = "https://acarepro.online/IMGPATH/"

axios.interceptors.request.use(config => {
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
                res.data.forEach(pro => {
                    initPro(pro)
                })
            } catch {}
            
        }
        
    }
    return res
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