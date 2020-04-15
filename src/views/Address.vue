<template>
    <layout>
        <div class="user-area">
            <UserNav/>
        </div>
        <div class="talk-bg">
            <Icon name="bg"/>
        </div>
    </layout>
</template>


<script lang="js">
    import Layout from "@/components/BaseComponents/Layout";
    import UserNav from "@/components/UserArea/UserNav";
    import Icon from "@/components/BaseComponents/Icon";
    export default {
        name: "Address",
        components: {Icon, UserNav, Layout}
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