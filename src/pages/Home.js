import React from 'react';
import Navbar from "../component/navbar";
// import { auth, db } from "./../firebase/firebase";
// import { doc, getDoc } from "firebase/firestore";

export default function Home() {

  // const [userDetails, setUserDetails] = useState(null);



  // const fetchUserData = async () => {
  //   auth.onAuthStateChanged(async (user) => {
  //     console.log(user);

  //     const docRef = doc(db, "Users", user.uid);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       setUserDetails(docSnap.data());
  //       console.log(docSnap.data());
  //     } else {
  //       console.log("User is not logged in");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  return (
    <div>
      <Navbar/>
      {/* {userDetails ? <h1>Welcome {userDetails.email}</h1> : <p>Loading...</p>} */}
    </div>
    
  )
}
