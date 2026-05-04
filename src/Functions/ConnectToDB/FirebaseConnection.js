
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const fetchCollection = async (path) => {
        try {
          const snapshot = await getDocs(collection(db,path))
          const fetchedList= snapshot.docs.map(doc => doc.data())
		  console.log(fetchedList);
		  
          return fetchedList
          
        }catch (error){
          console.log("Wrong with: ", error);
          return false
        }
}

export {fetchCollection}