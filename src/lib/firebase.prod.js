import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyA5OznXQDVQFrt3RbZ33RAXg_yzicUqHXs',
  authDomain: 'netflix-4df30.firebaseapp.com',
  projectId: 'netflix-4df30',
  storageBucket: 'netflix-4df30.appspot.com',
  messagingSenderId: '264865229393',
  appId: '1:264865229393:web:5497164b6b206af9322670',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
