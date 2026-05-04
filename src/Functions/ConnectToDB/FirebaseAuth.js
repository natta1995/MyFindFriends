 import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

export const handleLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

      console.log("Logged in email:", userCredential.user.email);
      console.log("Logged in uid:", userCredential.user.uid);
      
    return userCredential.user;
   
  } catch (error) {
    console.log("something went wrong with error: ", error);
  }
};

export const handleRegister = async (email, password, fullname, city) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "Users", user.uid), {
      Fullname: fullname,
      City: city,
      Email: user.email,
      CreatedAt: new Date()
    });

    console.log("User created + saved!");

    return user;
  } catch (error) {
    console.error(error);
  }
};
