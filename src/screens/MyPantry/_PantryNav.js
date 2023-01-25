import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeSearch } from "../RecipePage/RecipeSearch";
import { RecipeResult } from "../RecipePage/RecipeResult";
import { AdvancedSearch } from "../RecipePage/AdvancedSearch";

const Stack = createNativeStackNavigator();
export default function PantryNav(props) {
  const { ingredientList } = props;

  return (
    <Stack.Navigator id="Pantry Nav">
      <Stack.Screen name="Recipe Search">
        {(props) => <RecipeSearch {...props} ingredientList={ingredientList} />}
      </Stack.Screen>
      <Stack.Screen name="Recipe Result">
        {(props) => <RecipeResult {...props} ingredientList={ingredientList} />}
      </Stack.Screen>
      <Stack.Screen name="Advanced Search">
        {(props) => (
          <AdvancedSearch {...props} ingredientList={ingredientList} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
