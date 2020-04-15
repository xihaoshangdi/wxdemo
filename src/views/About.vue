<template>
    <div class="talk-area">
        <FrameUnit/>
        <div class="talk-nav">
            <span class="talk-title">{{userInfo.title}}</span>
        </div>
        <div class="talk-content">
            <div class="info">
                <TheBaseInfo v-for="(value,index) in userInfo.msgList" :key="index" :info="value"/>
            </div>
            <TheBaseInputArea/>
        </div>
    </div>
</template>
<script>
    import TheBaseInputArea from "@/components/TheBaseInputArea";
    import TheBaseInfo from "@/components/TheBaseInfo";
    import FrameUnit from "@/components/FrameUnit";
    const {remote} = require("electron");
    export default {
        components: {FrameUnit, TheBaseInfo, TheBaseInputArea},
        data() {
            return {
                userList: this.$store.getters.renderUserList,
                userInfo: this.$store.getters.renderUserInfo
            };
        },
        beforeCreate() {
            if (!this.$store.state.userInfo.title) {
                this.$store.commit("loadInfo");
                const about = remote.getCurrentWindow();
                about.on("closed", () => {
                    this.$store.commit('saveInfo');
                });
            }
        }
    };
</script>
<style lang="scss" scoped>

    .talk-area {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #F5F5F5;
        position: relative;
        flex-grow: 1;
        height: 100vh;
        -webkit-app-region: drag;

        .talk-nav {
            height: 60px;
            background-color: #FAFAFA;
            position: relative;
            box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

            .talk-title {
                position: absolute;
                top: 20px;
                margin-left: 20px;
                font-size: 15px;
            }
        }

        .talk-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            -webkit-app-region: no-drag;

            > .info {
                flex-grow: 1;
            }
        }
    }

</style>