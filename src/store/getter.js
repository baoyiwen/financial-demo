const getters = {
    visitedViews:state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    size: state => state.app.size,
    device: state => state.app.device,
    m_routers: state => state.permission.routersM,
    permission_routers: state => state.permission.routers,
    currentM: state => state.permission.currentM,
    addRouters: state => state.permission.addRouters,
    theme: state => state.user.theme
}

export default getters;
