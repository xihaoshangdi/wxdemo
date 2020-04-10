<template>
  <Layout>
    <div class="user-area">
      <div class="nav">search</div>
      <div class="user">
        <div class="img" @click="xx"></div>
        <span>xxxxxxx</span>
      </div>
    </div>
    <div class="talk-area">
      <div class="nav">
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

export default {
  name: 'Home',
  components: {
    FrameUnit,
    TheBaseInputArea,
    Layout,
  },
  methods:{
    xx(){
      window.minimize();
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-area{
    width: 200px;
    border: 1px solid red;
  }
  .nav{
    height: 50px;
    border: 1px solid red;
  }
  .user{
    height: 54px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .img{
    position: absolute;
    width: 35px;
    height: 35px;
    left: 10px;
    background-color: rgba(0,0,0,0.3);
  }


  .talk-area{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }

</style>
