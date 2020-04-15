import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sideSelect: 0,
        userInfo: {
            title: undefined,
            describe: undefined,
            msgList: undefined
        },
        userList: undefined
    },
    mutations: {
        initInfoList(state) {
            // store.commit("loadInfoList");
            if (!state.userList) {
                state.userList = [
                    {
                        title: "一个测试群1",
                        describe: "一个测试的简讯1",
                        msgList: ["吃了吗1？"]
                    },
                    {
                        title: "一个测试群2",
                        describe: "一个测试的简讯2",
                        msgList: ["吃了吗2？"]
                    }
                ];
            }
        },
        saveInfoList(state) {
            window.localStorage.setItem("userList", JSON.stringify(state.userList));
        },
        loadInfoList(state) {
            state.userList = JSON.parse(window.localStorage.getItem("userList"));
        },
        saveInfo(state) {
            window.localStorage.setItem("Info", JSON.stringify(state.userInfo));
        },
        loadInfo(state) {
            state.userInfo = JSON.parse(window.localStorage.getItem("Info"));
        },
        popInfo(state, index) {
            store.commit("saveInfo");
            Vue.set(state.userInfo, "title", undefined);
            state.userList.splice(index, 1);
            store.commit("saveInfoList");
        },
        insertInfo(state) {
            const userinfo = JSON.parse(window.localStorage.getItem("Info"));
            state.userList.push(userinfo);
        },
        sendMsg(state, msg) {
            state.userInfo.msgList.push(msg);
        },
        update(state, index) {
            const info = state.userList[index];
            Vue.set(state.userInfo, "title", info.title);
            Vue.set(state.userInfo, "describe", info.describe);
            Vue.set(state.userInfo, "msgList", info.msgList);
        },
        updateSelect(state, data) {//页面跳转
            state.sideSelect = data;
        }
    },
    actions: {},
    modules: {},
    getters: {
        renderUserInfo(state) {
            return state.userInfo;
        },
        renderUserList(state) {
            return state.userList;
        }
    }
});
export default store;
