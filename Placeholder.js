import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterPage from "./src/screens/RegisterPage";
import MyPantry from "./src/screens/MyPantry";
import Camera from "./src/screens/Camera";
import VotingPage from "./src/screens/VotingPage";
import RecipePage from "./src/screens/RecipePage";
import CameraPage from "./src/screens/CameraPage";
import ListIngredient from "./src/screens/ListIngredient";
import AddIngredient from "./src/screens/AddIngredient";
import LandingPage from "./src/screens/LandingPage";
import DashBoard from "./src/screens/DashBoard";
import BarCodeScanner from "./src/screens/BarCodeScanner";
import SuggestedRecipes from "./src/screens/SuggestedRecipes";
import PlanDinner from "./src/screens/PlanDinner";
import SendEmail from "./src/screens/SendEmail";
import TestPage from "./src/screens/TestPage";
import MyAccount from "./src/screens/MyAccount";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function App() {
  const [ingredientList, setIngredientList] = useState([]);
  const [recipeList, setRecipeList] = useState([]);

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
        initialRouteName="Recipe"
        options={{ headerShown: false }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recipe") {
              iconName = focused ? "restaurant" : "restaurant";
            } else if (route.name === "My Account") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "Plan Dinner") {
              iconName = focused ? "calendar" : "calendar";
            } else if (route.name === "My Pantry") {
              iconName = focused ? "fast-food" : "fast-food";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: "#D3FAD9",
          tabBarInactiveTintColor: "#379540",
          tabBarStyle: { backgroundColor: "#333333" },
        })}
      >
        <Tab.Screen name="Plan Dinner">
          {(props) => <PlanDinner {...props} recipeList={recipeList} />}
        </Tab.Screen>
        <Tab.Screen name="Recipe">
          {(props) => <RecipePage {...props} ingredientList={ingredientList} />}
        </Tab.Screen>
        <Tab.Screen name="My Pantry">
          {(props) => (
            <MyPantry
              {...props}
              ingredientList={ingredientList}
              setIngredientList={setIngredientList}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="My Account" component={MyAccount} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
