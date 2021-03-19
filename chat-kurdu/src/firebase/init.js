import firebase from 'firebase/app'
import firestore from 'firebase/firestore'



var firebaseConfig = {
    apiKey: "AIzaSyDcb1oeME8Q6xARg7E1Ws--dxMBjl9pxPw",
    authDomain: "chat-kurdu.firebaseapp.com",
    projectId: "chat-kurdu",
    storageBucket: "chat-kurdu.appspot.com",
    messagingSenderId: "680072047530",
    appId: "1:680072047530:web:4879f308b4530a9bb119d3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();