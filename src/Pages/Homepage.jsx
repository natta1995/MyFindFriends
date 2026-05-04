import { useEffect, useState } from "react";
import "../styles/HomePage.css"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { fetchCollection } from "../Functions/ConnectToDB/FirebaseConnection.js";


const HomePage = () => {
const [user, setUser] = useState("")
const navigate = useNavigate()

const getUserDetails = async (uid) => {
	console.log("getUserDetails");
	
  let data = await fetchCollection("User");

  let currentUser = data.find(u => u.id === uid);

  console.log("CU", currentUser);
};
useEffect(() => {
  const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
    if (!firebaseUser) return;

    console.log("auth state:", firebaseUser);

    const docRef = doc(db, "User", firebaseUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();

      console.log("here!!", userData);

      setUser(userData);

      
      getUserDetails(firebaseUser.uid);
    }
  });

  return () => unsub();
}, []);
	return (
		<>
		<div className="home-layout">
			<div className="header">
				<p>Hej {user.Fullname}</p>
				<p>Meddelanden</p>
			</div>
			<div className="button-layout">
				<button onClick={() => navigate("/friend")}>Hitta vänner</button>
				<button>Events</button>
				<button>Meddelanden</button>
				<button>Mina vänner</button>
			</div>
		</div>
		</>
	)
}

export default HomePage