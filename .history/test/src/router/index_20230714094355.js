// 用于创建整个应用的路由器
import VueRouter from 'vue-router'

import About from '../components/About.vue'
import Home from '../components/Home.vue'
import Message from '../components/Message.vue'
import News from '../components/News.vue'
import Detail from '../components/Detail.vue'
export default new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail
                        }
                    ]
                },
            ]
        },
    ]
});
