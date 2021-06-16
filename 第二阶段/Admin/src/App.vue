<style lang="less">
@import url("~@/assets/css/public.css");
.Wrap {
    height: calc(100%);
    min-width: 1000px;
}

@media screen and (max-width: 1233px) {
    .orders {
        width: 30% !important;
    }
}
.color0 {
    color: #000 !important;
}
.blueBtn {
    background: #10103d !important;
    color: #FFF !important;
}
.input {
    padding: 0;
    border: none;
    border-bottom: solid 1px #000;
    outline: none;
    width: 200px;
}
.delImg {
    position: absolute;
    left: 305px;
    top: -5px;
    cursor: pointer;
    z-index: 50;
}
.noData {
    padding: 20px;
    text-align: center;
    color: #666;
}
.width50 {
    width: 250px;
}
.tLeft2 {
    text-align: left;
    overflow: hidden;
}
.imgList {
    width: 75px;
    height: 75px;
    border: solid #888 1px;
    float: left;
    margin-top: 10px;
    margin-right: 10px;
    cursor:move;
    transition: 0.3s;
    background-size: cover;
    background-position: center;
    position: relative;
    &:hover {
        box-shadow: 0 0 5px #333;
    }
}
.noBorder input {
    border: none !important;
    box-shadow: none !important;
}
.delImg1 {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #E50000;
    cursor: pointer;
    right: -7px;
    top: -7px;
    display: flex;
    transition: 0.3s;
    &:hover {
        transform: rotate(180deg);
    }
    >div {
        width: 60%;
        height: 3px;
        margin: auto;
        background: #FFF;
    }
    
}

</style>

<template>
    <div class="">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "app",
        created () {
            let role = localStorage.getItem('role')
            if (role) {
                this.$store.commit("setState", {
                    key: "role",
                    value: Number(role)
                })
            }
        }
    }
</script>

