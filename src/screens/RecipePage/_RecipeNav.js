import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeSearch } from "./RecipeSearch";
import { RecipeResult } from "./RecipeResult";
import { AdvancedSearch } from "./AdvancedSearch";

const Stack = createNativeStackNavigator();
export default function RecipeNav(props) {
  const { ingredientList } = props;

  return (
    <Stack.Navigator id="Recipe Nav">
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
