<template>
    <div class="input-area">
        <div class="icon-group"></div>
        <button class="btn">发送</button>
    </div>
</template>

<script lang="js">
    export default {
        name: "TheBaseInputArea"
    };
</script>

<style lang="scss" scoped>
    .input-area{
        height: 115px;
        border: 1px solid red;
        position: relative;
    }
    .icon-group{
        height: 30px;
        border: 1px solid red;

    }
    .btn{
        position: absolute;
        width: 60px;
        height: 20px;
        right: 20px;
        bottom: 5px;
    }
</style>