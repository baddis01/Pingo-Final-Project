import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useState, useEffect } from "react";
import firebaseConfig from "../db/config.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  //Probably put this in an api.js file??
  async function getTasks(db) {
    const tasksCol = collection(db, "packs");
    const tasksSnapshot = await getDocs(tasksCol);
    const tasksList = tasksSnapshot.docs.map((doc) => doc.data());
    return tasksList;
  }

  useEffect(() => {
    getTasks(db).then((data) => {
      setTasks(data);
    });
  }, []);
  return (
    <>
      <h1> TasksList </h1>
      <ul>
        {tasks.map((task) => {
          console.log(task);
          return <li>{task}</li>;
        })}
      </ul>
    </>
  );
};

export default TasksList;
