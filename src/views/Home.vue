<template>
    <Layout>
        <div class="user-area">
            <UserNav/>
            <router-link to="/about">
                <BaseUser
                        v-for="(item,index) in userList"
                        :key="index"
                        :title="item.title"
                        :describe="item.describe"
                        @click.native="update(index)"
                        @dblclick.native="creatPage"

                />
            </router-link>

        </div>

        <div class="talk-bg" v-if="!userInfo.title">
            <Icon name="bg"/>
        </div>
        <router-view></router-view>
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
                const result = ipcRenderer.sendSync("create-window", this.userInfo);
                console.log(result);
                if (result) {
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
</style>
