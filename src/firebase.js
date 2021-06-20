// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBJT4VDGDobubo36HTWqoLR0kg-DiFt1xk",
    authDomain: "clone-270f4.firebaseapp.com",
    projectId: "clone-270f4",
    storageBucket: "clone-270f4.appspot.com",
    messagingSenderId: "129030612483",
    appId: "1:129030612483:web:0750eebaeac75063819036",
    measurementId: "G-R1Z0Z31483"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth=firebase.auth();

  export {db,auth};