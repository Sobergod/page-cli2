const page = {
    state: {
        headerHeight: 48,
        footerHeight: 50,
    },
    mutations: {
        'SET_HEADER_HEIGHT': (state, headerHeight) => {
            state.headerHeight = headerHeight
        },
        'SET_FOOTER_HEIGHT': (state, headerHeight) => {
            state.headerHeight = headerHeight
        }
    }
}

export default page
