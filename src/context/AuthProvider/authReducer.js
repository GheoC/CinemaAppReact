export const initialAuthState = {
    username: '',
    role: '',
    userId: '',
    token: '',
    expirationDate: ''
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {...state, username: action.payload};
        case 'AUTHENTICATE':
            return {...action.payload};
        case 'LOGOUT': {
            return {...initialAuthState}
        }
        default:
            return {...state};
    }
}
export default authReducer;