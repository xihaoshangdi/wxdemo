<template>
    <Layout>
        <div class="user-area">
            <div class="user-nav">
                <TheBaseInput/>
                <Icon name="i-add" class="add-btn"/>
            </div>
            <BaseUser/>
        </div>
        <div class="talk-area">
            <div class="talk-nav">
                <frame-unit/>
            </div>
            用户对话页
            <TheBaseInputArea/>
        </div>
    </Layout>
</template>

<script>
    // @ is an alias to /src
    import Layout from "../components/Layout";
    import TheBaseInputArea from "@/components/TheBaseInputArea";
    import FrameUnit from "@/components/FrameUnit";
    import TheBaseInput from "@/components/TheBaseInput";
    import Icon from "@/components/Icon";
    import BaseUser from "@/components/BaseUserCard";

    export default {
        name: "Home",
        components: {
            BaseUser,
            Icon,
            TheBaseInput,
            FrameUnit,
            TheBaseInputArea,
            Layout
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>
    .user-area {
        width: 250px;
        background-color: #E7E6E5;
    }
    .user-nav {
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #DBD9D8;
        .add-btn {
            width: 1em;
            height: 1em;
            border-radius: 3px;
            box-sizing: content-box;
            padding: 4px;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }

    .talk-area {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
        .talk-nav{
            height: 60px;
            border: 1px solid red;
            background-color: #FAFAFA;
        }
    }

</style>
