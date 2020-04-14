<template>
    <div class="user-nav">
        <div class="input-box"
             :class="{focused:isFocus}"
             @focusin="isFocus=true"
             @focusout="textClear"
        >
            <label>
                <Icon name="search" class="search-icon"/>
                <input type="text" v-model="text" :placeholder="[isFocus===true?'':'搜索']">
                <Icon name="delete" class="delete-icon" v-if="isFocus"/>
            </label>
        </div>
        <Icon name="add" class="add-icon"/>
    </div>
</template>

<script lang="js">
    import Icon from "@/components/BaseComponents/Icon";
    export default {
        name: "UserNav",
        components: {Icon},
        data() {
            return {
                text: undefined,
                isFocus: false
            };
        },
        methods: {
            textClear() {
                this.text = "";
                this.isFocus = false;
            }
        }
    };
</script>

<style lang="scss" scoped>
    .user-nav {
        height: 60px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #EEEAE8;
        .input-box {
            background-color: #DBD9D8;
            border-radius: 3px;
            &.focused {
                background-color: white;
            }

            label {
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 3px 0;
                line-height: 1;
                position: relative;

                input {
                    max-width: 210px;
                    outline: none;
                    border: none;
                    background-color: inherit;

                }

                .search-icon {
                    color: #7E7E7E;
                    width: 0.7em;
                    height: 0.7em;
                    margin: 0 5px;
                }

                .delete-icon {
                    position: absolute;
                    width: 0.8em;
                    height: 0.8em;
                    right: 5px;
                    cursor: pointer;
                }
            }
        }

        .add-icon {
            width: 1em;
            height: 1em;
            border-radius: 3px;
            box-sizing: content-box;
            padding: 4px;
            background-color: #DCD9D8;
        }

        .add-icon:hover {
            background-color: #D1D1D1;
            cursor: pointer;
        }
    }
</style>