import db from "./connection";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";

export async function getPack(id) {
  const docRef = doc(db, "packs", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function getPacks() {
  const tasksCol = collection(db, "packs");
  const tasksSnapshot = await getDocs(tasksCol);
  const tasksList = tasksSnapshot.docs.map((doc) => { return { id: doc.id, data: doc.data() } });
  return tasksList;
}

