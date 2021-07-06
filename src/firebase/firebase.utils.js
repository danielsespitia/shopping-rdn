// Packages
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBebB9v_2tW3aC5EMvqskL1EI4dSJYhjzE',
  authDomain: 'shopping-rdn.firebaseapp.com',
  projectId: 'shopping-rdn',
  storageBucket: 'shopping-rdn.appspot.com',
  messagingSenderId: '735262867084',
  appId: '1:735262867084:web:a60deadd42cfb4f13785a9',
  measurementId: 'G-SJ97L1G6LR',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
