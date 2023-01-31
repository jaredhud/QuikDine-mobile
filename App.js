import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";
import AccountNav from "./src/screens/MyAccount/_AccountNav";
import RecipeNav from "./src/screens/RecipePage/_RecipeNav";
import PantryNav from "./src/screens/MyPantry/_PantryNav";
import PlanNav from "./src/screens/PlanDinner/_PlanNav";
import { Home } from "./src/screens/Home";
// Test
import TestNav from "./src/screens/TestPage/_TestNav";

const Tab = createBottomTabNavigator();

export default function App() {
  const [ingredientList, setIngredientList] = useState([]);
  const [selectedRecipesList, setSelectedRecipesList] = useState([]);
  const [recipeID, setRecipeID] = useState();

  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    Ubuntu: require("./assets/fonts/Ubuntu-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        options={{ headerShown: false }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipe") {
              iconName = focused ? "restaurant" : "restaurant";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle";
            } else if (route.name === "Plan Meal") {
              iconName = focused ? "calendar" : "calendar";
            } else if (route.name === "Pantry") {
              iconName = focused ? "fast-food" : "fast-food";
            } else if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "#D3FAD9",
          tabBarInactiveTintColor: "#47c053",
          tabBarStyle: { backgroundColor: "#333333", height: "8%" },
          tabBarLabelStyle: { fontSize: 12, height: 25, marginTop: -10 },
        })}
      >
        <Tab.Screen name="Profile">
          {(props) => <AccountNav {...props} />}
        </Tab.Screen>
        <Tab.Screen name="Plan Meal">
          {(props) => (
            <PlanNav
              {...props}
              recipeList={selectedRecipesList}
              recipeID={recipeID}
              setRecipeID={setRecipeID}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Home">{(props) => <Home {...props} />}</Tab.Screen>

        {/* Test */}
        <Tab.Screen name="Test">{(props) => <TestNav {...props} />}</Tab.Screen>
        <Tab.Screen name="Recipe">
          {(props) => (
            <RecipeNav
              {...props}
              ingredientList={ingredientList}
              selectedRecipesList={selectedRecipesList}
              setSelectedRecipesList={setSelectedRecipesList}
              recipeID={recipeID}
              setRecipeID={setRecipeID}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Pantry">
          {(props) => (
            <PantryNav
              {...props}
              ingredientList={ingredientList}
              setIngredientList={setIngredientList}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
