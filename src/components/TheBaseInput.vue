<template>
    <div class="input-box">

        <label>
            <Icon name="search" class="input-icon"/>
            <input type="text" placeholder="搜索">
        </label>
    </div>

</template>


<script lang="js">
    import Icon from "@/components/Icon";
    export default {
        name: "TheBaseInput",
        components: {Icon}
    };
</script>

<style lang="scss" scoped>
    .input-box{
        border: 1px solid rgba(0,0,0,0.1);
        background-color: rgba(0,0,0,0.1);
        border-radius: 3px;
    }
    label{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 3px 0;
        line-height: 1;
    }
    input{
        max-width: 190px;
        outline: none;
        border: none;
        background-color: inherit;
    }
    .input-icon{
        width: 0.7em;
        height: 0.7em;
        margin: 0 5px;
    }
</style>