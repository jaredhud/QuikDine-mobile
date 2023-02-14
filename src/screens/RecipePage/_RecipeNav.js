import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeSearch } from "./RecipeSearch";
import { RecipeResult } from "./RecipeResult";
import { AdvancedSearch } from "./AdvancedSearch";

const Stack = createNativeStackNavigator();

export default function RecipeNav() {
  return (
    <Stack.Navigator id="Recipe Nav">
      <Stack.Screen
        name="Recipe Search"
        component={RecipeSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Recipe Result"
        component={RecipeResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Advanced Search"
        component={AdvancedSearch}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
