import {
  addDoc,
  collection,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore/lite";
import { useContext } from "react";
import { db } from "../../firebase";
import AppContext from "./AppContext";

export async function createDBEvent() {
  const tempEventID = await addDoc(collection(db, "Events"), {
    AddedRecipes: [],
    Votes: [],
    UserID: [],
  });
  setEventID(tempEventID);
  updateDoc(doc(db, "Users", user), { Events: eventID });
}

export async function createDBUser() {
  await setDoc(doc(db, "Users", user), {
    Events: [],
    FavRecipes: [],
    EmailId: email,
    Pantry: pantryList,
  });
}
