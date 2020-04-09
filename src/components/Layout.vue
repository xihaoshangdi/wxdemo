<template>
    <div class="box">
        <div class="side">
                icon-list
        </div>
        <div class="main">
            <slot></slot>
        </div>
    </div>

</template>


<script lang="js">
    export default {
        name: "Layout"
    };
</script>

<style lang="scss" scoped>
    .box {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
        border: 1px solid green;

    }
    .side{
        display: flex;
        flex-direction: column;
        width: 50px;
        border: 1px solid red;
    }
    .main{
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }
</style>