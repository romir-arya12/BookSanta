import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAmZ14Ppc_XfLglc-Rzar5AY0jRwFcjrbw",
  authDomain: "book-santa-59d1a.firebaseapp.com",
  databaseURL: "https://book-santa-59d1a.firebaseio.com",
  projectId: "book-santa-59d1a",
  storageBucket: "book-santa-59d1a.appspot.com",
  messagingSenderId: "40888077035",
  appId: "1:40888077035:web:6901e80c5016ae12ef4cae",
  measurementId: "G-2D97R8ZQX5"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();