import Vue from 'vue'
import store from './vuex/store'//引入组件
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
// import {Button,Toast,MessageBox} from 'mint-ui'
new Vue({//注册局部
  el:'#root',
  components:{//必须先要注册组件
  },
  template:'<div @click="jia" >{{count}}</div>',
  beforeCreate() {
    Vue.prototype.global = this
  },
  store,//所有的组件都能看到的属性 $store
  methods:{
    ...mapActions(['jia','jian']),//注意区分大小写 this.$store.dispatch('jia)'
    ...mapMutations({li:'jia'}), //li(){this.$store.commmit('jia')}
    // jia(){
    //   console.log('jian');
    // }
  },
  data(){
    return{
      content:[]
    }
  },
  mounted() {
    this.$on('tian',(a)=>{
        this.content=a
    })
  },
  computed:{
    ...mapState(['count']),//{count(){return $store.state.count}}
    ...mapGetters(['jain'])//{jain(){return $store.getter.jain}}
  }
})