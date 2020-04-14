<template>
    <div class="side">
        <div>
            <BaseUserImg class="user-img"/>
            <router-link
                    v-for="(item,index) in topList"
                    :key="item"
                    :to="hashPath[item]"
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
                    class="bottom-icon"
                    :name="item"
                    :key="item"/>
        </div>
    </div>
</template>


<script lang="js">
    import BaseUserImg from "@/components/BaseComponents/BaseUserImg";
    import Icon from "@/components/BaseComponents/Icon";

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
                console.log(index);
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

            .user-img{
                width: 35px;
                height: 35px;
                margin-bottom: 15px;
            }
            .top-icon {
                box-sizing: content-box;
                padding: 12px 0;
            }
            .bottom-icon {
                box-sizing: content-box;
                padding: 5px 0;
            }
            .bottom-icon:hover,.hover:hover {
                color: whitesmoke;
            }
        }
    }

    .router-link-exact-active .icon{
        color: green;
    }

</style>