// import { useCollection } from "react-firebase-hooks/firestore";
import firebaseApp from "./firebaseApp";
import {
  getFirestore,
  collection,
  query,
  where,
  getDoc,
  addDoc,
  doc,
} from "firebase/firestore";

async function getExperiences(id) {
  console.log("--------id", id);
  const db = await getFirestore(firebaseApp);

  const docRef = doc(db, "Experiences", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  // const q = query(
  //   collection(db, "Experiences"),
  //   where(firebaseApp.firestore.FieldPath.documentId(), "==", id)
  // );

  // const querySnapshot = await getDocs(q);
  // console.log("querySnapshot", querySnapshot);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
}

async function saveExperiences(messege, model) {
  const db = getFirestore(firebaseApp);
  try {
    const data = await addDoc(collection(db, "Experiences"), {
      messege: messege,
      model: model,
      url: "",
    });
    console.log("Document written with ID: ", data.id);
    return data.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export { getExperiences, saveExperiences };
