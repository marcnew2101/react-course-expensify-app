import database from '../firebase/firebase.js';

export const getUser = (users) => {
    return {
        type: 'GET_USER',
        users: users
    }
}

export const startGetUser = () => {
    return (dispatch) => {
        return database.ref(`users`).once('value').then((snapshot) => {
            const users = [];
            snapshot.forEach((childSnapshot) => {
                users.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            const userList = users.filter(item => item.id !== 'selectedUser');
            dispatch(getUser(userList))
        })
    };
};

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        user: user
    }
}

export const startAddUser = (userData = {}, userId) => {
    return (dispatch) => {
        const { userName = userData } = userData;
        const user = { userName };

        database.ref(`users/${userId}/userInfo`).set(user).then(() => {
            dispatch(setUser(user));
        })
    };
};