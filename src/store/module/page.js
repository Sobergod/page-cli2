const page = {
    state: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    mutations: {
        'SET_PADDING_TOP': (state, paddingTop) => {
            state.paddingTop = paddingTop
        },
        'SET_PADDING_BOTTOM': (state, paddingBottom) => {
            state.paddingBottom = paddingBottom
        }
    }
}

export default page
