<template>
    <Layout>
        <div class="user-area">
            <UserNav/>
            <router-link v-for="(item,index) in userList"
                         :key="index"
                         to='/home/about'>
            <BaseUser
                    :title="item.title"
                    :describe="item.describe"
                    @click.native="update(index)"
                    @dblclick.native="creatPage(index)"
            />
            </router-link>
        </div>
        <div class="talk-bg" v-if="!userInfo.title">
            <Icon name="bg"/>
        </div>
        <router-view v-if="userInfo.title"></router-view>
    </Layout>
</template>

<script>
    // @ is an alias to /src
    import Layout from "../components/BaseComponents/Layout";
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
            Layout
        },
        data() {
            return {
                userList: this.$store.state.userList,
                userInfo: this.$store.state.userInfo
            };
        },
        methods: {
            update(index) {
                this.$store.commit("update",index);
            },
            creatPage(index) {
                this.$store.commit('popInfo',index);
                ipcRenderer.sendSync('create-window', index);
                ipcRenderer.once('insertInfo', () => {
                    this.$store.commit('insertInfo');
                });
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
</style>
