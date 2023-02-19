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
  const tempEventId = await addDoc(collection(db, "Events"), {
    AddedRecipes: [],
    Votes: [],
    UserId: [],
  });
  setEventId(tempEventId);
  updateDoc(doc(db, "Users", user), { Events: eventId });
}

export async function createDBUser() {
  await setDoc(doc(db, "Users", user), {
    Events: [],
    FavRecipes: [],
    EmailId: email,
    Pantry: pantryList,
  });
}
