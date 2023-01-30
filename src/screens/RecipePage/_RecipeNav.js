import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeSearch } from "./RecipeSearch";
import { RecipeResult } from "./RecipeResult";
import { AdvancedSearch } from "./AdvancedSearch";

const Stack = createNativeStackNavigator();

export default function RecipeNav(props) {
  const {
    ingredientList,
    selectedRecipeList,
    setSelectedRecipeList,
    recipeID,
    setRecipeID,
  } = props;
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");

  return (
    <Stack.Navigator id="Recipe Nav">
      <Stack.Screen name="Recipe Search">
        {(props) => (
          <RecipeSearch
            {...props}
            ingredientList={ingredientList}
            recipeID={recipeID}
            setRecipeID={setRecipeID}
            selectedRecipeList={selectedRecipeList}
            setSelectedRecipeList={setSelectedRecipeList}
            cuisine={cuisine}
            mealType={mealType}
            query={query}
            diet={diet}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Recipe Result">
        {(props) => (
          <RecipeResult
            {...props}
            ingredientList={ingredientList}
            recipeID={recipeID}
            selectedRecipeList={selectedRecipeList}
            setSelectedRecipeList={setSelectedRecipeList}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Advanced Search">
        {(props) => (
          <AdvancedSearch {...props} ingredientList={ingredientList} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
