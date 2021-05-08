import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCqTgPoP1QfjKkoYMbflQREYomgr0-S-uU",
    authDomain: "story-hub-ec358.firebaseapp.com",
    projectId: "story-hub-ec358",
    storageBucket: "story-hub-ec358.appspot.com",
    messagingSenderId: "345694386439",
    appId: "1:345694386439:web:15eef41ea71f31e51d6da2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()