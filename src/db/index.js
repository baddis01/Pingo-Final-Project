import db from "./connection";
import {
  getDoc,
  doc,
  collection,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export async function getPack(id) {
  const docRef = doc(db, "packs", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function getPacks() {
  const tasksCol = collection(db, "packs");
  const tasksSnapshot = await getDocs(tasksCol);
  const tasksList = tasksSnapshot.docs.map((doc) => {
    return { id: doc.id, data: doc.data() };
  });
  return tasksList;
}

export function getTaskPhoto(packId, username, taskId) {
  const storage = getStorage();
  const photoRef = ref(storage, `${packId}/${username}/${taskId}`);
  return getDownloadURL(photoRef).then((photoUri) => {
    return photoUri;
  });
}

export async function setTaskCompleted(packId, username, taskId, randomDabId) {
  const packRef = doc(db, "packs", packId);
  const updateObj = {};
  let location = await Location.getCurrentPositionAsync({});
  updateObj[`users.${username}.${taskId}`] = {
    dab: randomDabId,
    coordinates: new GeoPoint(
      location.coords.latitude,
      location.coords.longitude
    ),
  };
  await updateDoc(packRef, updateObj);
}
