// import {firebase} from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import {initializeApp} from 'firebase/app';
import {getFirestore,connectFirestoreEmulator} from 'firebase/firestore';
import {getAuth,connectAuthEmulator} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBaf99bf255UaKO5pnQGncVC9SPfcnDRN8",
    authDomain: "shrinkr-e3f0e.firebaseapp.com",
    projectId: "shrinkr-e3f0e",
    storageBucket: "shrinkr-e3f0e.appspot.com",
    messagingSenderId: "285112521303",
    appId: "1:285112521303:web:d1e09e9a8e0a64a8f14912"
  };
  // firebase.initializeApp(firebaseConfig);
  // const firestore=firebase.firestore();
  // const auth=firebase.auth();

  // export {
  //   firebase,firestore,auth
  // };
  const app=initializeApp(firebaseConfig);
  const firestore= getFirestore(app);
  const auth= getAuth(app);
//   // if(if (window.location.hostname === 'localhost') {
//   connectFirestoreEmulator(firestore, 'localhost', 8080); // or the port you specified in firebase.json
//   connectAuthEmulator(auth, 'http://localhost:9099');
// }
// ){
  // firestore.useEmulator('localhost',8081);
  //  auth.useEmulator('http://localhost:127.0.0.1:9099');
  // }
  if(process.env.NODE_ENV==='development'){
  // if (window.location.hostname === 'localhost') {
    connectFirestoreEmulator(firestore, 'localhost', 8080); // or the port you specified in firebase.json
    connectAuthEmulator(auth, 'http://localhost:9099');
  }
   {
    connectFirestoreEmulator(firestore, 'localhost', 8081); // or the port you specified in firebase.json
    connectAuthEmulator(auth, 'http://localhost:9099');
  }
  
   export {app, firestore, auth};