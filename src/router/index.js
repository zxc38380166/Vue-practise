import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  { // 路由的方法
   path:'/RouterMethod',
   component:()=>import('../views/RouterMethod.vue')
  },
  {
    // 404導向 (輸入錯誤路由的路徑)
    path: '/:pathMatch(.*)*',   // '/:pathMatch(.*)*' 為404固定結構
    component:()=>import('../views/404NotFound.vue')
  },
  {
    //重新導向
    path: '/NewPage/:pathMatch(.*)*', // 當在 NewPage 路由下輸入錯誤的路徑
    redirect:{      // redirect 為重新導向固定結構
      name:'Home',  // 帶入要導向的路徑 可以直接是路徑也可以用 name 帶入
    }
  },
  { // 巢狀路由
    path: '/NewPage', 
    name: 'NewPage',
    component: () => import('../views/NewPage.vue'), 
    children: [       // children 為巢狀路由的固定結構 
      {
        path: 'a',    // 子路由結構跟一般路由結構一樣
        component:()=>import('../views/ComponentA.vue') 
      },
      {
        path:'b',
        component:()=>import('../views/ComponentB.vue')
      },
      {
        path:'DynamicRouter/:id', // :id為將這一個地址的屬性設定為參數,供元件取得 (以此達到動態路由)
        component:()=>import('../views/DynamicRouter.vue')
      },
      {//動態路由 方法1
        path:'DynamicRouterProps/:id', 
        component:()=>import('../views/DynamicRouterProps.vue'),
        props:()=>({
          id:'e660da83f23441a3',  // 在路由表中傳遞屬性給元件,元件接收方式為 props:['id']
        })
      },
      {//動態路由 方法2
        path:'DynamicRouterPropsDynamic/:id', 
        component:()=>import('../views/DynamicRouterPropsDynamic.vue'),
        props:(route)=>{
          console.log(route)
          return{                 // props值已回傳方式取得路由全部地址再由地址帶上 params.id 屬性
            id:route.params.id
          }  
        }
      },
      {
        path:'name',
        component:()=>import('../views/Name.vue'),
        children:[    // 子路由中再加入子路由並用物件連接多個元件名子做連接 
          {
            path:'a2b',   // 此路徑在 /NewPage/name 之下故路徑為 /NewPage/name/a2b
            components:{
              left:()=>import('../views/ComponentA.vue'), // left跟right為子路由連接的名子
              right:()=>import('../views/ComponentB.vue')
            }
          },
          {
            path:'c2a',
            components:{
              left:()=>import('../views/ComponentC.vue'),
              right:()=>import('../views/ComponentA.vue')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass:'active',   // 替整個路由加入 className:'active' 以此引入 bootsrap 樣式
  scrollBehavior(to, from, savedPosition){    // to 為要進入的路由路徑 from 為上一頁進來的路由路徑 
    
    console.log(to, from, savedPosition)      // savedPosition 用來設定滾動位置
    
    if( to.fullPath.match('NewPage') ){       // 當 to.fullPath 的進入路徑為 NewPage 回傳滾動高度
      return { top:300 }
    }
    return {
      top:200, //當有設定 top值時則每次切換路由都會滾動到指定top點
    }
  },
})

export default router
