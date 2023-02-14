import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfilePage } from "./ProfilePage";
import { RegisterPage } from "./RegisterPage";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();
export default function AccountNav() {
  return (
    <Stack.Navigator id="Account Nav">
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {() => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="Profile Page" options={{ headerShown: false }}>
        {() => <ProfilePage />}
      </Stack.Screen>
      <Stack.Screen name="Register" options={{ headerShown: false }}>
        {() => <RegisterPage />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
