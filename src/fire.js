import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCekYv0cQritUyuVfvtybFRat6tlVsm0Xs",
    authDomain: "djproject-ad740.firebaseapp.com",
    databaseURL: "https://djproject-ad740-default-rtdb.firebaseio.com",
    projectId: "djproject-ad740",
    storageBucket: "djproject-ad740.appspot.com",
    messagingSenderId: "1050874618969",
    appId: "1:1050874618969:web:b281eaddfb35285e8f3d48",
    measurementId: "G-2XLTT1WH0N"
  };
//   // Initialize Firebase
  var fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;;
