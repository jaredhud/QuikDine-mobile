import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RecipeSearch } from "../RecipePage/RecipeSearch";
import MyPantry from "./MyPantry";
import CameraPage from "../MyPantry/CameraPage";

const Stack = createNativeStackNavigator();
export default function PantryNav(props) {
  const { ingredientList, setIngredientList } = props;
  return (
    <Stack.Navigator id="Pantry Nav">
      <Stack.Screen name="My Pantry" options={{ headerShown: false }}>
        {(props) => (
          <MyPantry
            {...props}
            ingredientList={ingredientList}
            setIngredientList={setIngredientList}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Camera" options={{ headerShown: false }}>
        {() => <CameraPage />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
