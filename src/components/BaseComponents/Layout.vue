<template>
    <div class="box" @mousedown="start" @mouseup="stop" >
        <Side />
        <div class="main">
            <slot></slot>
        </div>
    </div>

</template>


<script lang="js">
    import Side from "@/components/BaseComponents/Side";
    const {ipcRenderer} = require("electron");
    export default {
        name: "Layout",
        components: {Side},
        methods: {
            start() {
                ipcRenderer.send("window-move-start", true);
            },
            stop(){
                console.log('xxx');
                ipcRenderer.send("window-move-start", false);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .box {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
    }

    .main{
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }
</style>