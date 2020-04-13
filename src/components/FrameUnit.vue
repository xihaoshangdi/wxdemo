<template>
    <div class="op-area">
        <Icon class="op-icon " @click.native="signTop" name="sign"/>
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
                isTop:false,
                isMax:false,
                windowSize:undefined,
                win:win
            };
        },
        components: {Icon},
        methods: {
            signTop(){
                this.isTop=!this.isTop;
                win.setAlwaysOnTop(this.isTop);

            },
            changeWindow(){
                if (this.isMax){
                    win.setSize(this.windowSize[0],this.windowSize[1]);
                    win.center();

                }else{
                    this.windowSize=win.getSize();
                    console.log(this.windowSize);
                    win.maximize();
                }
                this.isMax=!this.isMax;
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
        width: 0.6em;
        height: 0.6em;
        padding: 5px 10px;
        color: #676767;
        cursor: pointer;
    }
    .op-icon:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .remove:hover {
        background-color: #F45454;
    }
</style>