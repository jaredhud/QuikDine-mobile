import { useState } from "react";

export default function initializeVariables() {
  const [pantryList, setPantryList] = useState([]);
  const [selectedRecipesList, setSelectedRecipesList] = useState([]);
  const [recipeID, setRecipeID] = useState();

  const variables = {
    pantryList,
    setPantryList,
    selectedRecipesList,
    setSelectedRecipesList,
    recipeID,
    setRecipeID,
  };

  return variables;
}
