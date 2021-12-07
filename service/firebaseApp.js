import { initializeApp } from "firebase/app";
// import "firebase/auth";
import "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAuk60C9UewMDPQZXysz1kCI9srgyP2uVk",
  authDomain: "bruhh-46e72.firebaseapp.com",
  projectId: "bruhh-46e72",
  storageBucket: "bruhh-46e72.appspot.com",
  messagingSenderId: "1031120641195",
  appId: "1:1031120641195:web:7cb3cafb288b763ab0abee",
  measurementId: "G-FE1SQR81NC",
};

// const analytics = getAnalytics(firebaseApp);
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
