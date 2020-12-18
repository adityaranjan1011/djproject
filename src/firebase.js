import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCekYv0cQritUyuVfvtybFRat6tlVsm0Xs",
    authDomain: "djproject-ad740.firebaseapp.com",
    projectId: "djproject-ad740",
    storageBucket: "djproject-ad740.appspot.com",
    messagingSenderId: "1050874618969",
    appId: "1:1050874618969:web:f6047a5cde80a20d8f3d48",
    measurementId: "G-7SE5TYQ4JR"
  };
//   // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;;
