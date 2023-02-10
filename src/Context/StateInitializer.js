import { useEffect, useState } from "react";
import { setIP } from "./IPAddress";

export default function initializeVariables() {
  const [pantryList, setPantryList] = useState([]);
  const [selectedRecipesList, setSelectedRecipesList] = useState([]);
  const [recipeID, setRecipeID] = useState();
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [ingredientList, setIngredientList] = useState([]);
  const [ingredientListChecked, setIngredientListChecked] = useState([]);
  const [tempQuery, setTempQuery] = useState("");

  setIP();

  useEffect(() => {
    setIngredientList([...pantryList]);
    setIngredientListChecked(new Array(pantryList.length).fill(true));
    setQuery("");
    setMealType("");
    setCuisine("");
    setDiet("");
    setTempQuery("");
  }, [pantryList]);

  const variables = {
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
    serverIP,
    tempQuery,
    setTempQuery,
  };

  return variables;
}
