<template>
    <div class="card-area">
        <BaseUserImg class="img"/>
        <div class="card-info">
            <div class="title">这是一个长的群名描述</div>
            <div class="describe">这是最新的一条信息描述</div>
        </div>
        <div class="card-after">
            <span>昨天</span>
            <Icon name="zhong" class="card-icon"/>
        </div>
    </div>
</template>


<script lang="js">
    import BaseUserImg from "@/components/BaseUserImg";
    import Icon from "@/components/Icon";
    export default {
        name: "BaseUser",
        components: {Icon, BaseUserImg}
    };
</script>

<style lang="scss" scoped>
    %ellipsis{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .card-area {
        height: 54px;
        display: flex;
        align-items: center;
        cursor: default;
        font-size: 13px;
        position: relative;
        box-sizing: content-box;
        padding: 3px 0;
    }
    .card-area:hover{
        background-color: rgba(0,0,0,0.1);
    }
    .img {
        width: 41px;
        height: 41px;
        margin: 0 10px;
    }
    .card-info{
        width: 130px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .title{
        padding: 1px;
        @extend %ellipsis
    }
    .describe{
        padding: 1px;
        color: #999999;
        @extend %ellipsis
    }
    .card-after{
        position: absolute;
        right: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 12px;
        color: #999999;
    }
    .card-icon{
        margin-top: 5px;
    }



</style>