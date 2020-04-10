<template>
    <div class="op-area">
        <Icon class="op-icon " @click.native="signTop" name="sign"/>
        <Icon class="op-icon " @click.native="win.minimize()" name="minus"/>
        <Icon class="op-icon " @click.native="win.maximize()" name="max"/>
        <Icon class="op-icon remove" @click.native="win.close()" name="remove"/>
    </div>
</template>


<script lang="js">
    import Icon from "@/components/Icon";

    const {remote} = require("electron");
    const win = remote.getCurrentWindow();
    export default {
        name: "FrameUnit",
        data() {
            return {
                isTop:false,
                win:win
            };
        },
        components: {Icon},
        methods: {
            signTop(){
                this.isTop=!this.isTop;
                win.setAlwaysOnTop(this.isTop);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .op-area {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .op-icon {
        box-sizing: content-box;
        width: 0.8em;
        height: 0.8em;
        padding: 5px 10px;
        color: black;
        cursor: pointer;
    }

    .op-icon:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .remove:hover {
        background-color: red;
    }
</style>