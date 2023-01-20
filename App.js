import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterPage from "./src/screens/RegisterPage";
import MyPantry from "./src/screens/MyPantry";
import Camera from "./src/screens/Camera";
import VotingPage from "./src/screens/VotingPage";
import RecipePage from "./src/screens/RecipePage";
import CameraPage from "./src/screens/CameraPage";
import AddIngredient from "./src/screens/AddIngredient";
import LandingPage from "./src/screens/LandingPage";
import DashBoard from "./src/screens/DashBoard";
import BarCodeScanner from "./src/screens/BarCodeScanner";

const Stack = createNativeStackNavigator();

export default function App() {
  const [ingredientList, setIngredientList] = React.useState([]);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterPage} />
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
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="BarCodeScanner" component={BarCodeScanner} />
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
