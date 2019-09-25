// 创建modules保存tagsView
const tagsViews = {
    state: {
        visitedViews: [],//  存放所有浏览器打开过的，切不重复的路由,
        cachedViews: [] //
    },
    mutations: {
        // 创建添加浏览器打开过的路由的方法
        ADD_VIEW_ROUTER:(state,view) =>{
            if(state.visitedViews.some(v => v.path === view.path)) {
                return ;
            }
            state.visitedViews.push({
                name: view.name,
                path: view.path,
                title: view.meta.title || "no-title",
            })
        },
        ADD_CACHED_VIEW: (state, view) => {
            if (state.cachedViews.includes(view.name)) return
            if (!view.meta.noCache) {
                state.cachedViews.push(view.name)
            }
        },

        // 创建删除浏览器打开过的路由方法
        DEL_VIEW_ROUTER:(state,view) =>{
            // entries与for循环遍历数组键值对，与keys()和values()一样是ES6新加入的方法
            for (let [i,v] of state.visitedViews.entries()){
                if(v.path === view.path){
                    state.visitedViews.splice(i,1);
                    break;
                }
            }
        },
        DEL_CACHED_VIEW: (state, view) => {
            for (const i of state.cachedViews) {
                if (i === view.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews.splice(index, 1)
                    break
                }
            }
        },

        // 删除其他的打开过的路由
        DEL_OTHERS_VISITED_VIEWS: (state, view) => {
            for (const [i, v] of state.visitedViews.entries()) {
                if (v.path === view.path) {
                    state.visitedViews = state.visitedViews.slice(i, i + 1)
                    break
                }
            }
        },
        DEL_OTHERS_CACHED_VIEWS: (state, view) => {
            for (const i of state.cachedViews) {
                if (i === view.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews = state.cachedViews.slice(index, index + 1)
                    break
                }
            }
        },

        // 删除全部缓存和活跃路由
        DEL_ALL_VISITED_VIEWS: state => {
            state.visitedViews = []
        },
        DEL_ALL_CACHED_VIEWS: state => {
            state.cachedViews = []
        },

        UPDATE_VISITED_VIEW: (state, view) => {
            for (let v of state.visitedViews) {
                if (v.path === view.path) {
                    v = Object.assign(v, view)
                    break
                }
            }
        }
    },
    actions:{
        // 在组件内调用this.$store.dispatch(方法名, 参数)触发mutations里面的添加方法
        addView({ dispatch }, view){
            dispatch('addViewRouter',view);
            dispatch('addCachedView',view);
        },
        addViewRouter({commit},view){ //通过解构赋值得到commit方法
            //去触发ADD_VISITED_VIEWS，并传入参数
            commit('ADD_VIEW_ROUTER', view);
        },
        addCachedView({ commit }, view) {
            commit('ADD_CACHED_VIEW', view)
        },

        // 删除某一个路由调用this.$store.dispatch(方法名, 参数)触发mutations里面的添加方法
        delView({ dispatch, state }, view){
            return new Promise(resolve => {
                dispatch('delViewRouter', view)
                dispatch('delAllCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delViewRouter({commit, state} ,view){ //删除数组存放的路由之后，需要再去刷新路由，这是一个异步的过程，需要有回掉函数，所以使用并返回promise对象，也可以让组件在调用的时候接着使用.then的方法
            //console.log(view)
            return new Promise((resolve)=> { //resolve方法：未能成功后回掉的方法
                commit('DEL_VIEW_ROUTER',view);
                resolve([...state.visitedViews]);
            })
        },
        delCachedView({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_CACHED_VIEW', view)
                resolve([...state.cachedViews])
            })
        },

        // 删除其他浏览器缓存的活跃标签
        delOthersViews({ dispatch, state }, view) {
            return new Promise(resolve => {
                dispatch('delOthersVisitedViews', view)
                dispatch('delOthersCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delOthersVisitedViews({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_OTHERS_VISITED_VIEWS', view)
                resolve([...state.visitedViews])
            })
        },
        delOthersCachedViews({ commit, state }, view) {
            return new Promise(resolve => {
                commit('DEL_OTHERS_CACHED_VIEWS', view)
                resolve([...state.cachedViews])
            })
        },

        // 清空页签
        delAllViews({ dispatch, state }, view) {
            return new Promise(resolve => {
                dispatch('delAllVisitedViews', view)
                dispatch('delAllCachedViews', view)
                resolve({
                    visitedViews: [...state.visitedViews],
                    cachedViews: [...state.cachedViews]
                })
            })
        },
        delAllVisitedViews({ commit, state }) {
            return new Promise(resolve => {
                commit('DEL_ALL_VISITED_VIEWS')
                resolve([...state.visitedViews])
            })
        },
        delAllCachedViews({ commit, state }) {
            return new Promise(resolve => {
                commit('DEL_ALL_CACHED_VIEWS')
                resolve([...state.cachedViews])
            })
        },

        // 修改页签内容
        updateVisitedView({ commit }, view) {
            commit('UPDATE_VISITED_VIEW', view)
        },
    }
}

export default tagsViews
