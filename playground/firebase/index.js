import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyA5FIA0TMG_XxEKE34trxcr5LYYvPvpSuk",
    authDomain: "todo-app-a4b2a.firebaseapp.com",
    databaseURL: "https://todo-app-a4b2a.firebaseio.com",
    projectId: "todo-app-a4b2a",
    storageBucket: "todo-app-a4b2a.appspot.com",
    messagingSenderId: "526626851222"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

  firebaseRef.set({
        app: {name:'Todo App',
              version: '7.0'  
             },
        isRunning: true,
        user: {
            name: 'Artem',
            age: 20
        }
  });
firebaseRef.child('user').on('value', (snapshot) =>{
    console.log('triggered', snapshot.val());
});
firebaseRef.update({
    'user/name': 'Jonna'
});
firebaseRef.update({
    'app/name': 'SOAD'
});
var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) =>{
    console.log('child_added', snapshot.key, snapshot.val());
});
todosRef.push({
    text:'My shadow'
});
todosRef.push({
    text:'Only one that walks beside me'
});
//   firebaseRef.update({
//      'app/name': 'Application',
//      'user/name': 'Jonna'
//   });
//   firebaseRef.child('user/name').remove();
//    firebaseRef.update({
//     isRunning: null
//   });