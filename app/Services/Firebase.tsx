import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getAuth, signOut, createUserWithEmailAndPassword } from "firebase/auth";


// entrer des coordo de mon firebase pour accéder aux données
const firebaseConfig = {
    apiKey: "AIzaSyCWoh95tjhWtUZEccMDyTjmuB9YeGpqES4",
    authDomain: "stepon-4f239.firebaseapp.com",
    projectId: "stepon-4f239",
    storageBucket: "stepon-4f239.appspot.com",
    messagingSenderId: "873116921868",
    appId: "1:873116921868:web:8d175273197315c84a7e29",
    measurementId: "G-QS4XXS36YD"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



export default class FirebaseService {
  db = getFirestore(app);
  app = initializeApp(firebaseConfig);

  auth = auth;

  public async Tests() {
    //rexrxr0
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()['first_name']}`);
      console.log(`${doc.id} => ${doc.data()['last_name']}`);
    });
  }

  public async signInEmailAndPassword(email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log("User registered:", userCredential.user);
      return userCredential.user;
    } catch (error) {
      console.error("Sign up error:", error);
      throw error;
    }
  }



  // Authentification - Déconnexion
  public async logout() {
    try {
      await signOut(this.auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  }

}




