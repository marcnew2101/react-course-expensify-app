export default (state = {}, action) => {
    if (action.type === 'MAKE_ADMIN') {
        return {
            admin: action.admin
        }

    } else if (action.type === 'MAKE_MOD') {
        return {
            mod: action.mod
        }

    } else if (action.type === 'IS_ADMIN') {
        return action.role

    } else {
        return state;
    }
}