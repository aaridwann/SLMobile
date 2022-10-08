
export const ActionTypeUser = {
    startFetch: "START_FETCH",
    doneFetch: 'DONE_FETCH',
    errorFetch: "ERROR_FETCH"

}
export const initialUserState = {
    loading: true,
    user: null,
    state: false,
    message: ''
}

export default function AuthReducer(state, action) {
    const { payload } = action
    switch (action.type) {
        case ActionTypeUser.startFetch:
            return ({ ...state, loading: true })
        case ActionTypeUser.doneFetch:
            return ({ ...state, loading: false, user: payload, state: true })
        case ActionTypeUser.doneFetch:
            return ({ ...state, loading: false, user: null, message: payload, state: false })
        default:
            return state
    }
}