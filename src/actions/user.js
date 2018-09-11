import database from '../firebase/firebase.js';

export const setSelectedUser = (uid) => {
    return {
        type: 'SELECTED_USER',
        uid: uid
    }
}

export const startSetSelectedUser = (uid) => {
    return (dispatch) => {

        const selectedUser = { uid };

        database.ref(`users/selectedUser`).set(selectedUser).then(() => {
            dispatch(setSelectedUser(selectedUser));
        })
    };
}