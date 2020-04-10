<template>
    <div class="op-area">
        <div v-for="i in list" :key="i">
            <Icon class="op-icon" :name="i"/>
        </div>
        <Icon class="op-icon remove" name="remove"/>
    </div>
</template>


<script lang="js">
    import Icon from "@/components/Icon";

    export default {
        name: "FrameUnit",
        data() {
            return {
                list: ["sign", "minus", "max"]
            };
        },
        components: {Icon}
    };
</script>

<style lang="scss" scoped>
    .op-area {
        border: 1px solid red;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .op-icon {
        box-sizing: content-box;
        width: 0.8em;
        height: 0.8em;
        padding: 5px 10px;
        color: black;
        cursor: pointer;
    }

    .op-icon:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    .remove:hover {
        background-color: red;
    }
</style>