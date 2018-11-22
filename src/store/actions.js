const actions = {
    setHeaderHeight: ({ commit }, headerHeight) => {
        return commit('SET_PADDING_TOP', headerHeight)
    },
    setfooterHeight: ({ commit }, footerHeight) => {
        return commit('SET_FOOTER_HEIGHT', footerHeight)
    }
}

export default actions
