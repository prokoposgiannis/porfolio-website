import { db } from "@/firebase/firebaseConfig";
import { getDocs, collection, where, query } from "firebase/firestore";

export async function fetchProjectsFromFirestore() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

export async function fetchProjectFromFirestore(pj) {
  const q = query(collection(db, "projects"), where("nextUrl", "==", pj));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    const data = { id: doc.id, ...doc.data() };
    return data;
  } else {
    console.log("No matching document found");
    return null;
  }
}
