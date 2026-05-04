import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "../styles/FriendFeed.css"
import { fetchCollection } from "../Functions/ConnectToDB/FirebaseConnection";

const FriendFeed = () => {
	const [user, setUser] = useState([{Fullname: "Loading"}])
const getUserDetails = async (uid) => {

	
  let data = await fetchCollection("User");

  return data


};
useEffect(() => {
  const loadData = async () => {
    let data = await getUserDetails();
    setUser(data);
  };

  loadData();
}, []);
	return (
  <main className="friend-page">
    <section className="friend-header">
      <h1>Hitta vänner</h1>
      <p>Personer som också vill träffa nya människor.</p>
    </section>

    <div className="friend-feed">
      {user.map((u) => (
        <article className="friend-profile-card" key={u.id}>
  

          <div className="friend-content">
            <h2>{u.Fullname}</h2>
            <p className="friend-city">{u.City}</p>

            <p className="friend-bio">{u.Bio}</p>

            <p className="friend-age">{u.Age} år</p>

            <div className="friend-interests">
              {u.interests?.map((i, index) => (
                <span key={index}>{i}</span>
              ))}
            </div>
          </div>
		  <div>
			<button className="button">Matcha</button>
			
		  </div>
        </article>
      ))}
    </div>
  </main>
)}

export default FriendFeed 