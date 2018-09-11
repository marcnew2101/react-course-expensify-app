import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase.js';
import { startAddUser } from './users.js';

export const login = (uid, user) => ({
    type: 'LOGIN',
    uid: uid,
    user: user
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const userInfo = (user) => ({
    type: 'USER',
    user: user
});

export const startGoogleLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            dispatch(startAddUser(result.user.displayName, result.user.uid))
            
        })
    }
};

export const startFacebookLogin = () => {
    return (dispatch) => {
        return firebase.auth().signInWithPopup(facebookAuthProvider).then((result) => {
            dispatch(startAddUser(result.user.displayName, result.user.uid))
            
        })
    }
};

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};