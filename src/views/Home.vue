<template>
    <Layout>
        <div class="user-area">
            <UserNav/>
            <BaseUser/>
        </div>
        <div class="talk-area">
            <div class="talk-nav">
                <frame-unit/>
                <span class="talk-title">文件传输助手</span>
            </div>
            <div class="talk-content">
                <TheBaseInfo/>
            </div>
            <TheBaseInputArea/>
        </div>
    </Layout>
</template>

<script>
    // @ is an alias to /src
    import Layout from "../components/BaseComponents/Layout";
    import TheBaseInputArea from "@/components/TheBaseInputArea";
    import FrameUnit from "@/components/FrameUnit";
    import TheBaseInfo from "@/components/TheBaseInfo";
    import UserNav from "@/components/UserArea/UserNav";
    import BaseUser from "@/components/UserArea/BaseUserCard";

    export default {
        name: "Home",
        components: {
            BaseUser,
            UserNav,
            TheBaseInfo,
            FrameUnit,
            TheBaseInputArea,
            Layout
        }
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
        flex-grow: 1;
        background-color: #F5F5F5;

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
        }
    }

</style>
