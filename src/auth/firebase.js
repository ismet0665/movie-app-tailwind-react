import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
// app firebase bağlantımızı temsil ediyor.
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
//! auth artık bizim kimlik dogrulama fonk. oldu.
export const auth = getAuth(app);

//! NOTLAR
// firebase js dosyası olması lazım.
