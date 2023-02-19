import { doc, updateDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { setIP } from "./IPAddress.js";

export default function initializeVariables() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pantryList, setPantryList] = useState([
    "salmon",
    "cheese",
    "beef",
    "egg",
    "tomato",
    "flour",
    "milk",
  ]);
  const [selectedRecipesList, setSelectedRecipesList] = useState([]);
  const [recipeId, setRecipeId] = useState();
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [ingredientListChecked, setIngredientListChecked] = useState([]);
  const [ingUsed, setIngUsed] = useState([]);
  const [tempSearchQuery, setTempSearchQuery] = useState("");
  const [favoritesList, setFavoritesList] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [eventId, setEventId] = useState("");
  const [inviteUserIds, setInviteUserIds] = useState([]);
  const { serverIP } = setIP();

  useEffect(() => {
    setIngredientList([...pantryList]);
    setSearchQuery("");
    setMealType("");
    setCuisine("");
    setDiet("");
    setTempSearchQuery("");
  }, [pantryList]);

  useEffect(() => {
    let tempIngredientChecked = [];
    for (const i in pantryList) {
      tempIngredientChecked[i] = ingredientList.indexOf(pantryList[i]) != -1;
    }
    setIngredientListChecked(tempIngredientChecked);
  }, [ingredientList]);

  useEffect(() => {
    if (isLoggedIn) {
      updateDoc(doc(db, "Events", eventId), {
        AddedRecipes: selectedRecipesList,
        Votes: new Array(selectedRecipesList.length).fill(0),
      })
        .then(() => {
          console.log("Event Data added");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedRecipesList]);

  useEffect(() => {
    if (isLoggedIn) {
      updateDoc(doc(db, "Events", eventId), {
        Emails: recipients,
        UserIds: inviteUserIds,
      })
        .then(() => {
          console.log("Event Data added");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [recipients]);

  useEffect(() => {
    if (isLoggedIn) {
      updateDoc(doc(db, "Users", email), {
        Pantry: pantryList,
      })
        .then(() => {
          console.log("Pantry Updated");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [pantryList]);

  const variables = {
    user,
    setUser,
    email,
    setEmail,
    isLoggedIn,
    setIsLoggedIn,
    eventId,
    setEventId,
    pantryList,
    setPantryList,
    selectedRecipesList,
    setSelectedRecipesList,
    recipeId,
    setRecipeId,
    cuisine,
    setCuisine,
    mealType,
    setMealType,
    searchQuery,
    setSearchQuery,
    diet,
    setDiet,
    ingredientList,
    setIngredientList,
    ingredientListChecked,
    setIngredientListChecked,
    ingUsed,
    setIngUsed,
    favoritesList,
    setFavoritesList,
    recipients,
    setRecipients,
    serverIP,
    tempSearchQuery,
    setTempSearchQuery,
    inviteUserIds,
    setInviteUserIds,
  };

  return variables;
}
