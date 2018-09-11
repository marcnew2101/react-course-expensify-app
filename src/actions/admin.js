import database from '../firebase/firebase.js';

export const makeAdmin = (admin) => {
    return {
        type: 'MAKE_ADMIN',
        admin: admin
    }
}

export const makeMod = (mod) => {
    return {
        type: 'MAKE_MOD',
        admin: mod
    }
}

export const isAdmin = (role) => {
    return {
        type: 'IS_ADMIN',
        role
    }
}

export const startMakeAdmin = (roleData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            admin = false
        } = roleData;

        const privileges = { admin };

        database.ref(`users/${uid}/role`).set(privileges).then(() => {
            dispatch(makeAdmin(privileges));
        });
    };
};

export const startMakeMod = (roleData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            mod = false
        } = roleData;

        const privileges = { mod };

        database.ref(`users/${uid}/role`).set(privileges).then(() => {
            dispatch(makeMod(privileges));
        });
    };
};

export const getRole = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        database.ref(`users/${uid}`).once('value').then((snapshot) => {
            return dispatch(isAdmin(snapshot.child('role/admin').val()))
        })
    }
}