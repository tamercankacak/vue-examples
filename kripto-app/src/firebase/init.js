import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBLGL8I1h-qdYLmDvINcBYXoXfiKbTL5CY",
    authDomain: "kripto-applikasyon.firebaseapp.com",
    projectId: "kripto-applikasyon",
    storageBucket: "kripto-applikasyon.appspot.com",
    messagingSenderId: "880526456107",
    appId: "1:880526456107:web:1b124f5a733dd1221fc16e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()