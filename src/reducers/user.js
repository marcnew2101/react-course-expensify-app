export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECTED_USER':
            return action.uid
        default:
            return state;
    }
}