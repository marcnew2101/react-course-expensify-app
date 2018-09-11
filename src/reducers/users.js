export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'GET_USER':
            return action.users

        default:
            return state;
    }
}