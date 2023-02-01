import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPantry from "./MyPantry";
import CameraPage from "../MyPantry/CameraPage";
import BarCodeScan from "../MyPantry/BarCodeScanner";

const Stack = createNativeStackNavigator();
export default function PantryNav(props) {
  const { pantryList, setPantryList } = props;
  return (
    <Stack.Navigator id="Pantry Nav">
      <Stack.Screen name="My Pantry" options={{ headerShown: false }}>
        {(props) => (
          <MyPantry
            {...props}
            pantryList={pantryList}
            setPantryList={setPantryList}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="Camera" options={{ headerShown: false }}>
        {() => <CameraPage />}
      </Stack.Screen>
      <Stack.Screen name="BarCodeScanner" options={{ headerShown: false }}>
        {() => <BarCodeScan />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
