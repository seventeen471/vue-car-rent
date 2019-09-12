import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    adminName: '',
    userName: '',
    userPassword: '',
    homeUrl: '',
    preImgUrl: '',
    addBaseUrl: '',
    liIndex: '',
    pageX: '',
    pageY: '',
    liIndex2: '',
  },
  mutations: {
    getAdminName(state,name){
      state.adminName = name;
    },
    getUserName(state,name){
      state.userName = name;
    },
    getUserPassword(state,password){
      state.userPassword = password;
    }
  },
})
export default store
