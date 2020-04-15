<template>
    <div class="talk-area">
        <div class="talk-nav">
            <span class="talk-title">{{userInfo.title}}</span>
        </div>
        <div class="talk-content">
            <div class="info">
                <TheBaseInfo v-for="value in userInfo.msgList" :key="value" :info="value"/>
            </div>
            <TheBaseInputArea/>
        </div>
    </div>
</template>
<script>
    import TheBaseInputArea from "@/components/TheBaseInputArea";
    import TheBaseInfo from "@/components/TheBaseInfo";

    export default {
        components: {TheBaseInfo, TheBaseInputArea},
        data() {
            return {
                userList: this.$store.getters.renderUserList,
                userInfo: this.$store.getters.renderUserInfo
            };
        },
        methods: {}
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