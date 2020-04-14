import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sideSelect: 0,
        userInfo: {
            title: undefined,
            describe: undefined,
            msgList: undefined,
        },
        userList: [
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
        ]
    },
    getters: {
        renderUserInfo(state) {
            return state.userInfo;
        },
        renderUserList(state) {
            return state.userList;
        }

    },
    mutations: {
        updateSelect(state, data) {
            state.sideSelect = data;
        },
        sendMsg(state, msg) {
            state.userInfo.msgList.push(msg);
        },
        update(state, index) {
            const info=state.userList[index];
            Vue.set(state.userInfo,'title',info.title);
            Vue.set(state.userInfo,'msgList',info.msgList);
        }
    },
    actions: {},
    modules: {}
});
