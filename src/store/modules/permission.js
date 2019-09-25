import { asyncRouterMap, pathManage } from '@/routers/router'

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }

//
// function hasPermission(roles, route) {
//   return true;
//   // if (route.meta && route.meta.role) {
//   //
//   //   if(roles.indexOf(route.meta.role)!=-1){
//   //     return true
//   //   }else {
//   //     return false
//   //   }
//   //   // return roles.some(role => route.meta.roles.includes(role))
//   // } else {
//   //   return true
//   // }
// }
/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(routes) {
  const res = []
  routes.forEach(route => {
    //console.log(route)
    const tmp = { ...route }
    if (true) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children)
      }
      res.push(tmp)
    }
  })

  return res
}

const permission = {
  state: {
    routers: pathManage,
    currentM:1,
    routersM: [],
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = pathManage.concat(routers);
      state.routersM = [];
      state.currentM = sessionStorage.getItem('currentM')?sessionStorage.getItem('currentM'):state.currentM;
      state.routers.forEach(item =>{
        // if(item.module == state.currentM){
        //   state.routersM.push(item)
        // }
        state.routersM.push(item)
      })
      //console.log(state.routersM)
    },
    // SET_CURRENTM:(state,module)=>{
    //   state.currentM = module
    //   state.routersM = [];
    //   state.routers.forEach(item =>{
    //     if(item.module == state.currentM){
    //       state.routersM.push(item)
    //     }
    //   })
    // }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        //const { roles } = data
        let accessedRouters;
            accessedRouters = filterAsyncRouter(asyncRouterMap)
        // if (roles.includes('admin')) {
        //   // accessedRouters = asyncRouterMap
        //   accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        // } else {
        //   accessedRouters = filterAsyncRouter(asyncRouterMap, roles)
        // }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    },
    // Generateodule({ commit }, data) {
    //   sessionStorage.setItem('currentM', data)
    //   commit('SET_CURRENTM', data)
    // }
  }
}

export default permission
