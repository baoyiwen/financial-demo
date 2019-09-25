import { setStore, getStore, } from '@/utils/store'

const user = {
    theme: getStore({
        name: 'theme'
    }) || '#409EFF',
    mutations: {
        SET_THEME: (state, color) => {
            state.theme = color
            setStore({
                name: 'theme',
                content: state.theme
            })
        }
    }
}

export default user;
