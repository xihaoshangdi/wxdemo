<template>
    <div class="op-area">
        <Icon class="op-icon " :class="{top:isTop}" @click.native="signTop" name="sign"/>
        <Icon class="op-icon " @click.native="win.minimize()" name="minus"/>
        <Icon class="op-icon " @click.native="changeWindow" :name="[isMax!==true?'max':'max-after']"/>
        <Icon class="op-icon remove" @click.native="win.close()" name="remove"/>
    </div>
</template>


<script lang="js">
    import Icon from "@/components/BaseComponents/Icon";

    const {remote} = require("electron");
    const win = remote.getCurrentWindow();
    export default {
        name: "FrameUnit",
        data() {
            return {
                isTop: false,
                isMax: false,
                windowSize: undefined,
                win: win
            };
        },
        components: {Icon},
        methods: {
            signTop() {
                this.isTop = !this.isTop;
                win.setAlwaysOnTop(this.isTop);

            },
            changeWindow() {
                if (this.isMax) {
                    win.setSize(this.windowSize[0], this.windowSize[1]);
                    win.center();

                } else {
                    this.windowSize = win.getSize();
                    console.log(this.windowSize);
                    win.maximize();
                }
                this.isMax = !this.isMax;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .op-area {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 1;
        -webkit-app-region: no-drag;
    }

    .op-icon{
        box-sizing: content-box;
        width: 0.6em;
        height: 0.6em;
        margin: 5px 10px;
        color: #676767;
        cursor: pointer;
    }

    .op-icon:hover {
        margin: 0;
        padding: 5px 10px;
        background-color: rgba(0, 0, 0, 0.1);
    }

    .op-icon.top {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .remove:hover {
        background-color: #F45454;
    }
</style>