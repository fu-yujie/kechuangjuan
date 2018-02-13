import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
    menulist:[],//菜单列表
    refreshname:'',//刷新页面二级标题
    count: 0,
    adminleftnavnum:"1" , //管理后台左侧导航
    company:''
}
const mutations = {
	SAVE_MENU_LIST(state, obj) {
		state.menulist = obj;
    },
    SAVE_REFRESH_NAME(state, obj) {
		state.refreshname = obj;
    },
     SAVE_COMPANY(state, obj) {
		state.company = obj;
    },
    increment (state) {
        state.count++
    }
}
const getters = {

}
const actions = {

}
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})
