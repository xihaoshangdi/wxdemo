<template>
    <div class="info-box">
        <span>你吃饭了吗？</span><BaseUserImg/>
    </div>
</template>


<script lang="js">
    import BaseUserImg from "@/components/BaseUserImg";
    export default {
        name: "TheBaseInfo",
        components: {BaseUserImg}
    };
</script>

<style lang="scss" scoped>
    .info-box{
        display: flex;
        margin: 10px 0;
        padding-left: 100px;
        padding-right: 10px;
        justify-content: flex-end;
        align-items: center;
    }
    span{
        max-width: 325px;
        word-wrap: break-word;word-break: break-all;
        margin-right: 10px;
        background-color: #9EEA6A;
        padding: 5px;
        border-radius: 3px;
    }
</style>