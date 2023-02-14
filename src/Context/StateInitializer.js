import { useEffect, useState } from "react";
import { setIP } from "./IPAddress.js";

export default function initializeVariables() {
  const [user, setUser] = useState("");
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
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [ingredientListChecked, setIngredientListChecked] = useState([]);
  const [tempQuery, setTempQuery] = useState("");
  const [favoritesList, setFavoritesList] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const { serverIP, setServerIP } = setIP();

  useEffect(() => {
    setIngredientList([...pantryList]);
    setQuery("");
    setMealType("");
    setCuisine("");
    setDiet("");
    setTempQuery("");
  }, [pantryList]);

  useEffect(() => {
    let tempIngredientChecked = [];
    for (const i in pantryList) {
      tempIngredientChecked[i] = ingredientList.indexOf(pantryList[i]) != -1;
    }
    setIngredientListChecked(tempIngredientChecked);
  }, [ingredientList]);

  const variables = {
    user,
    setUser,
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
    query,
    setQuery,
    diet,
    setDiet,
    ingredientList,
    setIngredientList,
    ingredientListChecked,
    setIngredientListChecked,
    favoritesList,
    setFavoritesList,
    recipients,
    setRecipients,
    serverIP,
    tempQuery,
    setTempQuery,
  };

  return variables;
}
