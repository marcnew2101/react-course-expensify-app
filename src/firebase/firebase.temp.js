import * as firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
//const sendSignInLinkToEmail = new firebase.auth.sendSignInLinkToEmail();

export { firebase, googleAuthProvider, database as default};