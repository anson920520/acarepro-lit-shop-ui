<style>
@import url("~@/assets/css/public.css");
.Wrap {
    height: calc(100% - 10px);
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

