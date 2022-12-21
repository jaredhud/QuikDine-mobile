import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterPage from "./src/screens/RegisterPage";
import MyPantry from "./src/screens/MyPantry";
import Camera from "./src/screens/Camera";
import VotingPage from "./src/screens/VotingPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="MyPantry" component={MyPantry} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="Voting" component={VotingPage} />
        <Stack.Screen name="Recipe" component={RecipePage} />
        <Stack.Screen
          options={{ headerShown: false }}
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
