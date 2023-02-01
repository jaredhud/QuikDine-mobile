import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeSearch } from "./RecipeSearch";
import { RecipeResult } from "./RecipeResult";
import { AdvancedSearch } from "./AdvancedSearch";

const Stack = createNativeStackNavigator();

export default function RecipeNav(props) {
  const {
    pantryList,
    selectedRecipeList,
    setSelectedRecipeList,
    recipeID,
    setRecipeID,
  } = props;
  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [query, setQuery] = useState("");
  const [diet, setDiet] = useState("");
  const [ingredientList, setIngredientList] = useState([]);

  return (
    <Stack.Navigator id="Recipe Nav">
      <Stack.Screen name="Recipe Search" options={{ headerShown: false }}>
        {(props) => (
          <RecipeSearch
            {...props}
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
            pantryList={pantryList}
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
            recipeID={recipeID}
            selectedRecipeList={selectedRecipeList}
            setSelectedRecipeList={setSelectedRecipeList}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Advanced Search">
        {(props) => (
          <AdvancedSearch
            {...props}
            pantryList={pantryList}
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
