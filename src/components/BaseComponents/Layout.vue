<template>
    <div class="box">
        <Side/>
        <div class="main">
            <slot></slot>
        </div>
    </div>

</template>


<script lang="js">
    import Side from "@/components/BaseComponents/Side";
    export default {
        name: "Layout",
        components: {Side},
    };
</script>

<style lang="scss" scoped>
    .box {
        display: flex;
        flex-direction: row;
        height: 100vh;
        width: 100vw;
    }

    .main{
        display: flex;
        flex-direction: row;
        flex-grow: 1;
    }
</style>