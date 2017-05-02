import firebase from 'firebase';

 try{
    var config = {
    apiKey: "AIzaSyA5FIA0TMG_XxEKE34trxcr5LYYvPvpSuk",
    authDomain: "todo-app-a4b2a.firebaseapp.com",
    databaseURL: "https://todo-app-a4b2a.firebaseio.com",
    projectId: "todo-app-a4b2a",
    storageBucket: "todo-app-a4b2a.appspot.com",
    messagingSenderId: "526626851222"
  };
  firebase.initializeApp(config);
 } catch (e){

 }

export var firebaseRef = firebase.database().ref();
export default firebase;