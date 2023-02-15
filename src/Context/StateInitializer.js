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
  const [recipeID, setRecipeID] = useState();
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
      updateDoc(doc(db, "Events", "12345"), {
        AddedRecipes: selectedRecipesList,
      })
        .then(() => {
          console.log("Event Data added");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedRecipesList]);

  const variables = {
    user,
    setUser,
    email,
    setEmail,
    isLoggedIn,
    setIsLoggedIn,
    pantryList,
    setPantryList,
    selectedRecipesList,
    setSelectedRecipesList,
    recipeID,
    setRecipeID,
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
  };

  return variables;
}
