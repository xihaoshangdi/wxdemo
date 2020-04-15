<template>
    <div class="box">
        <div class="move top"></div>
        <div class="move bottom"></div>
        <div class="move left"></div>
        <div class="move right"></div>
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
        components: {FrameUnit, Side}
    };
</script>

<style lang="scss" scoped>
    .box {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
        -webkit-app-region: drag;
    }

    .main {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }

    .move {
        position: absolute;
        -webkit-app-region: no-drag;
    }

    .top {
        width: 100vw;
        height: 1px;
        top: 0;
    }

    .bottom {
        width: 100vw;
        height: 2px;
        bottom: 0;
    }

    .left {
        width: 1px;
        height: 100vh;
        left: 0;
    }

    .right {
        width: 2px;
        height: 100vh;
        right: 0;
    }

</style>