<template>
    <layout>
        <div class="user-area">
            <UserNav/>
        </div>
        <div class="talk-area">
            <div class="talk-nav">
                <span class="talk-title">我的收藏</span>
            </div>
        </div>

    </layout>
</template>


<script lang="js">
    import Layout from "@/components/BaseComponents/Layout";
    import UserNav from "@/components/UserArea/UserNav";
    export default {
        name: "Collection",
        components: {UserNav, Layout}
    };
</script>

<style lang="scss" scoped>
    .user-area {
        min-width: 250px;
        background-color: #E7E6E5;
    }
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
    }
</style>