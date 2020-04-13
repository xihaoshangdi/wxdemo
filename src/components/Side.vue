<template>
    <div class="side">
        <div>
            <BaseUserImg/>
            <router-link
                    v-for="(item,index) in topList"
                    :key="item"
                    :to="hashPath[item]"
                    active-class="selected"
            >
                <Icon
                        @click.native="updateSelect(index)"
                        :class="{hover:isSelect!==index}"
                        class="top-icon"
                        :name="isSelect!==index?item:item+'-after'"/>
            </router-link>
        </div>
        <div>
            <Icon
                    v-for="item in bottomList"
                    class="side-bottom-icon"
                    :name="item"
                    :key="item"/>
        </div>
    </div>
</template>


<script lang="js">
    import BaseUserImg from "@/components/BaseUserImg";
    import Icon from "@/components/Icon";

    export default {
        name: "Side",
        components: {Icon, BaseUserImg},
        data() {
            return {
                hashPath: {
                    "chat": "/",
                    "mail": "/address",
                    "square": "/collection",
                    "fielder": "/fielder",
                    "see": "/see"
                },
                topList: ["chat", "mail", "square", "fielder", "see"],
                bottomList: ["phone", "more"],
                isSelect: this.$store.state.sideSelect
            };
        },
        methods: {
            updateSelect(index) {
                this.$store.commit("updateSelect", index);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .side {
        min-width: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #2A2D31;

        & > div {
            padding-top: 20px;
            padding-bottom: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .top-icon {
                margin: 15px 0;
            }

            .side-bottom-icon {
                margin: 5px 0;
            }

            .hover:hover {
                color: whitesmoke;
            }
        }
    }

    .selected.router-link-exact-active> .icon {
        color: green;
    }

</style>