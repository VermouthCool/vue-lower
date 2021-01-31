import Vuex from 'vuex'
Vue.use(Vuex)
import Vue from 'vue'
let state ={
    /*
    相当于data的对象
    */
   count:0,//初始化数据
};
let mutations ={
    //相当于reducer 不能有异步
    jia(state){
        state.count++
    },
    jian(state){

    }
};
let actions ={
    /*
    异步
    */
   jia({commit,state}){
        commit('jia')
   },
   jian(){
       //一样
   }
};
let getters ={
    /*
    专门用发来获取计算的方法
    */
    jain(state){
        return state.count>2
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})