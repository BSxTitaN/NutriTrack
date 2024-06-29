import { db } from "@/firebase/main";
import { addDoc, collection, doc, getDoc, setDoc } from "firebase/firestore";

interface Uploady {
  name?: any;
  formData?: any;
  docKey?: any;
}

interface SingleProp {
  dbName?: any;
  dbID?: any;
  mode?: number;
}

export const uploadFirestore = async ({ name, formData }: Uploady) => {
  // later...
  await addDoc(collection(db, name), formData);
};

export const uploadFirestoreWithKey = async ({ name, formData, docKey }: Uploady) => {
  // later...
  await setDoc(doc(db, name, docKey), formData);
};

export const recieveOneData = async ({
  dbName,
  dbID,
}: SingleProp) => {
    const docRef = doc(db, dbName, dbID);
    return (await getDoc(docRef)).data();
};
