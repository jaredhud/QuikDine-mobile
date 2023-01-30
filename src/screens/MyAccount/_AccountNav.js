import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountHome } from "../MyAccount/AccountHome";

const Stack = createNativeStackNavigator();
export default function AccountNav(props) {
  const { ingredientList } = props;

  return (
    <Stack.Navigator id="Account Nav">
      <Stack.Screen name="AccountHome" options={{ headerShown: false }}>
        {() => <AccountHome />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
