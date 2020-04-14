<template>
    <Layout>
        <div class="user-area">
            <UserNav/>
            <BaseUser
                    v-for="(item,index) in userList"
                    :key="index"
                    :title="item.title"
                    :describe="item.describe"
                    @click.native="update(index)"
                    @dblclick.native="creatPage"

            />
        </div>
        <div class="talk-bg" v-if="!userInfo.title">
            <Icon name="bg"/>
        </div>
        <div class="talk-area" v-if="userInfo.title">
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
    </Layout>
</template>

<script>
    // @ is an alias to /src
    import Layout from "../components/BaseComponents/Layout";
    import TheBaseInputArea from "@/components/TheBaseInputArea";
    import TheBaseInfo from "@/components/TheBaseInfo";
    import UserNav from "@/components/UserArea/UserNav";
    import BaseUser from "@/components/UserArea/BaseUserCard";
    import Icon from "@/components/BaseComponents/Icon";

    const {ipcRenderer} = require("electron");
    export default {
        name: "Home",
        components: {
            Icon,
            BaseUser,
            UserNav,
            TheBaseInfo,
            TheBaseInputArea,
            Layout
        },
        data() {
            return {
                userList: this.$store.getters.renderUserList,
                userInfo: this.$store.getters.renderUserInfo
            };
        },
        methods: {
            update(index) {
                console.log(this.$store.state);
                this.$store.commit("update", index);
            },
            creatPage() {
                const result=ipcRenderer.sendSync('create-window', this.userInfo);
                console.log(result);
                if (result){
                    this.$store.commit("update", -1);
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .user-area {
        min-width: 250px;
        background-color: #E7E6E5;
    }

    .talk-bg {
        flex-grow: 1;
        position: relative;
        margin-top: 20px;

        > svg {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: rgba(0, 0, 0, 0.1);
            width: 7em;
            height: 7em;
        }
    }

    .talk-area {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        background-color: #F5F5F5;
        position: relative;

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
