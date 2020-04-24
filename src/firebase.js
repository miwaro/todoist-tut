import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAcOiuJufcfSOWodf2qdEtmFBqgrJ61C3k",
    authDomain: "todoist-tut-4051c.firebaseapp.com",
    databaseURL: "https://todoist-tut-4051c.firebaseio.com",
    projectId: "todoist-tut-4051c",
    storageBucket: "todoist-tut-4051c.appspot.com",
    messagingSenderId: "837398797572",
    appId: "1:837398797572:web:5a924d191fb2a04e2a8451"
});

export { firebaseConfig as firebase };