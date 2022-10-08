
export const ActionTypeUser = {
    startFetch: "START_FETCH",
    doneFetch: 'DONE_FETCH',
    errorFetch: "ERROR_FETCH",
    deleteUser: "DELETE_USER"

}
export const initialUserState = {
    loading: true,
    user: null,
    token: null,
    state: false,
    message: ''
}

export default function AuthReducer(state, action) {
    const { payload } = action
    switch (action.type) {
        case ActionTypeUser.startFetch:
            return ({ ...state, loading: true })
        case ActionTypeUser.doneFetch:
            return ({ ...state, loading: false, user: payload.user, token: payload.token, state: true })
        case ActionTypeUser.errorFetch:
            return ({ ...state, loading: false, user: null, token: null, message: payload.message, state: false })
        case ActionTypeUser.deleteUser:
            return ({ ...state, loading: false, user: null, token: null, message: payload.message, state: false })
        default:
            return state
    }
}