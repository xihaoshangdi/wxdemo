<template>
    <div class="box">
        <FrameUnit/>
        <Side/>
        <div class="main">
            <slot></slot>
        </div>
    </div>

</template>


<script lang="js">
    import Side from "@/components/BaseComponents/Side";
    import FrameUnit from "@/components/FrameUnit";
    export default {
        name: "Layout",
        components: {FrameUnit, Side},
    }
</script>

<style lang="scss" scoped>
    .box {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
        -webkit-app-region: drag;
    }
    .main{
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }
</style>