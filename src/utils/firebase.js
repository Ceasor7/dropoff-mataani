// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWNVAlBk8rrSGDqZC6wxoTh3YB8N1EfzA',
  authDomain: 'kimp-unique-order.firebaseapp.com',
  projectId: 'kimp-unique-order',
  storageBucket: 'kimp-unique-order.appspot.com',
  messagingSenderId: '168561317403',
  appId: '1:168561317403:web:304b5a6cbd80356845cabe',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
