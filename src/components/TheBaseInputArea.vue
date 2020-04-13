<template>
    <div class="input-area" :class="{'area-focus':isFocus}">
        <div class="icon-group">
            <span v-for="i in list" :key="i">
                <Icon :name="i" class="input-icon"/>
            </span>
        </div>
        <label @focusin="isFocus=true" @focusout="isFocus=false">
            <textarea></textarea>
        </label>
        <button class="btn">发送</button>
    </div>
</template>

<script lang="js">
    import Icon from "@/components/BaseComponents/Icon";

    export default {
        name: "TheBaseInputArea",
        data() {
            return {
                list: ["face", "filepackage", "cut", "weixin"],
                isFocus: false
            };
        },
        components: {Icon}
    };
</script>

<style lang="scss" scoped>
    .input-area {
        height: 145px;
        position: relative;
        background-color: #F5F5F5;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    }

    .area-focus {
        background-color: white;
    }

    textarea {
        outline: none;
        border: none;
        height: 70px;
        width: 100%;
        overflow-y: auto;
        word-break: break-all;
        background-color: transparent;
        resize: none;
    }

    .icon-group {
        height: 30px;
        display: flex;
        align-items: center;
        padding-left: 15px;

        .input-icon {
            width: 1em;
            height: 1em;
            margin: 0 8px;
        }
    }

    .btn {
        position: absolute;
        width: 65px;
        height: 25px;
        right: 30px;
        bottom: 15px;
        background-color: #E7E6E5;
        border: none;

        &:hover {
            background-color: green;
        }
    }
</style>