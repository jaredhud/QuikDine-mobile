import { useState, useEffect, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfilePage } from "./ProfilePage";
import { RegisterPage } from "./RegisterPage";
import { LoginScreen } from "./LoginScreen";
import AppContext from "../../Context/AppContext";

const Stack = createNativeStackNavigator();
export default function AccountNav() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Stack.Navigator id="Account Nav">
      {console.log(isLoggedIn)}
      <Stack.Screen name="Login" options={{ headerShown: false }}>
        {isLoggedIn ? () => <ProfilePage /> : () => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="Profile Page" options={{ headerShown: false }}>
        {isLoggedIn ? () => <LoginScreen /> : () => <ProfilePage />}
      </Stack.Screen>
      <Stack.Screen name="Register" options={{ headerShown: false }}>
        {isLoggedIn ? () => <ProfilePage /> : () => <RegisterPage />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
