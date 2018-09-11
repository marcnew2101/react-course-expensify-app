export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid,
                user: action.user
            }
        case 'LOGOUT':
            return {}
        case 'USER':
            return {
                user: action.user
            }
        default:
            return state;
    }
}