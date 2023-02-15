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
  const { user } = useContext(AppContext);
  const eventID = await addDoc(collection(db, "Events"), {
    AddedRecipes: [],
    Votes: [],
    UserID: [],
  });

  updateDoc(doc(db, "Users", user), { Events: eventID });
}

export async function createDBUser() {
  const { user, email } = useContext(AppContext);
  await setDoc(doc(db, "Users", user), {
    Events: [],
    FavRecipes: [],
    EmailId: email,
  });
}
