import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBnhgiXUj85tH2tKc_kAWwhy03a81oUkI8',
  authDomain: 'facebook-clone-fe08a.firebaseapp.com',
  projectId: 'facebook-clone-fe08a',
  storageBucket: 'facebook-clone-fe08a.appspot.com',
  messagingSenderId: '761798039596',
  appId: '1:761798039596:web:32ce192f30787b0e291989',
  measurementId: 'G-ZT0M3TEGNJ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
