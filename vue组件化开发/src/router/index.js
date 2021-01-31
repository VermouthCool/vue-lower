import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './Home'
import About from './About'
import News from './news'
import Messages from './messages'
import Detail from './detail'
Vue.use(VueRouter)
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/Home',
            component:Home
        },
        {
            path:'/About',
            component:About,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'messages',
                    component:Messages,
                    children:[
                        {
                            path:':id',
                            component:Detail,
                            props:true,
                            props:(route)=>({ //route是当前路由 函数中返回的对象的所有的属性都会被转换为标签属性传入路由
                                id:route.params.id
                            })
                        },
                        {
                            path:'',
                            redirect:'1'
                        }
                    ]
                },
                {
                    path:'/about',
                    redirect:'/about/news'
                }
            ]
        },
        {
            path:'/',
            redirect:'/Home'
        }
    ]
})