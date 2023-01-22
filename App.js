import React from "react";

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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Register" component={RegisterPage} />
    </Tab.Navigator>
  );
}
export default function App() {
  const [ingredientList, setIngredientList] = React.useState([]);

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
      <Stack.Navigator
        initialRouteName="LandingPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Register" component={RegisterPage} /> */}
        <Stack.Screen name="MyPantry" component={MyPantry} />
        <Stack.Screen name="Camera" component={CameraPage} />
        <Stack.Screen name="Voting" component={VotingPage} />

        <Stack.Screen name="Recipe">
          {(props) => <RecipePage {...props} ingredientList={ingredientList} />}
        </Stack.Screen>
        <Stack.Screen name="AddIngredient">
          {(props) => (
            <AddIngredient
              {...props}
              ingredientList={ingredientList}
              setIngredientList={setIngredientList}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="TestPage" component={TestPage} />
        <Stack.Screen name="ListIngredient" component={ListIngredient} />

        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="BarCodeScanner" component={BarCodeScanner} />
        <Stack.Screen name="PlanDinner" component={PlanDinner} />
        <Stack.Screen name="SuggestedRecipes" component={SuggestedRecipes} />
        <Stack.Screen name="SendEmail" component={SendEmail} />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
