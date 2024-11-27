import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCaH5YMOi0eckiKG_k8C8sJZp9-Q0C2FkY",
    authDomain: "contact-book-90340.firebaseapp.com",
    projectId: "contact-book-90340",
    storageBucket: "contact-book-90340.firebasestorage.app",
    messagingSenderId: "479916153457",
    appId: "1:479916153457:web:f32684c8371877808199d0"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 