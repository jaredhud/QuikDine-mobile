import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeSearch } from "./RecipeSearch";
import { RecipeResult } from "./RecipeResult";
import { AdvancedSearch } from "./AdvancedSearch";

const Stack = createNativeStackNavigator();

export default function RecipeNav() {
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
            cuisine={cuisine}
            setCuisine={setCuisine}
            mealType={mealType}
            setMealType={setMealType}
            query={query}
            setQuery={setQuery}
            diet={diet}
            setDiet={setDiet}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Recipe Result">
        {(props) => <RecipeResult {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Advanced Search">
        {(props) => (
          <AdvancedSearch
            {...props}
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
            cuisine={cuisine}
            setCuisine={setCuisine}
            mealType={mealType}
            setMealType={setMealType}
            diet={diet}
            setDiet={setDiet}
            query={query}
            setQuery={setQuery}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
