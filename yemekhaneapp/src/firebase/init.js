import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCs6QJa_96ZB2y873VTHiyAp8F4Hq5I1Vk",
    authDomain: "yemekhane-app-16e32.firebaseapp.com",
    projectId: "yemekhane-app-16e32",
    storageBucket: "yemekhane-app-16e32.appspot.com",
    messagingSenderId: "404866083439",
    appId: "1:404866083439:web:26c4ae84b8b91a5efc3b9a"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();