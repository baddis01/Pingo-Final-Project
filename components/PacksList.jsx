import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useState, useEffect } from "react";
import firebaseConfig from "../db/config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const PacksList = () => {
  const [pack, setPack] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Probably put this in an api.js file??
  async function getPack(db) {
    // const tasksCol = collection(db, "packs");
    const docRef = doc(db, "packs", "KLkAvp2KxjZtYHMU04vf");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
    //const tasksList = docSnap.docs.map((doc) => doc.data());
    //return tasksList;
    return docSnap.data();
  }

  useEffect(() => {
    setIsLoading(true);
    getPack(db).then((data) => {
      setPack(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  console.log(Array.isArray(pack.tasks), "< isArray");
  console.log(pack.tasks, "< content");
  console.log(pack.tasks[0].description, "< desc");

  return (
    <>
      <h1> {pack.title} </h1>
      <ul>
        {/* {pack.tasks.map((task) => {
          console.log(task);
          return <li>{task.description}</li>;
        })} */}
      </ul>
    </>
  );
};

export default PacksList;
