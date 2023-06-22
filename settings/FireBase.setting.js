// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyAjAs7tBOwES1cY6eQFPNYfWvC_MTIghnQ",
  authDomain: "charityapp-75275.firebaseapp.com",
  projectId: "charityapp-75275",
  storageBucket: "charityapp-75275.appspot.com",
  messagingSenderId: "328283480164",
  appId:"1:328283480164:web:46197a33a2f32d7466bf71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db }
