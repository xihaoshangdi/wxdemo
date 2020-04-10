<template>
    <div class="side">
        <div>
            <BaseUserImg/>
            <Icon
                    @click.native="select(item)"
                    v-for="item in sideListTop"
                    :class="[isFocus===item ? 'selected' : '']"
                    class="side-top-icon"
                    :name="item"
                    :key="item"/>
        </div>
        <div>
            <Icon
                    v-for="item in sideListBottom"
                    class-prefix="side-bottom"
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
        data(){
            return{
                sideListTop:['weixin','tongxunlu','box','filepackage','lingxing'],
                sideListBottom:['Phone','more'],
                isFocus:undefined
            }
        },
        methods:{
            select(item){
                this.isFocus=item;
            }
        },
    };
</script>

<style lang="scss" scoped>
    .side{
        width: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #2A2D31;
        & > div{
            padding-top: 20px;
            padding-bottom: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .side-top-icon{
                margin: 15px 0;
            }
            .side-bottom-icon{
                margin: 5px 0;
            }
        }
    }
</style>