import { useState, useEffect, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EventList } from "./EventList";
import { NewEvent } from "./NewEvent";
import { InProgressEvent } from "./InProgressEvent";
import SendEmail from "./SendEmail";
import AppContext from "../../Context/AppContext";
import { LoginScreen } from "../MyAccount/LoginScreen";

const Stack = createNativeStackNavigator();
export default function PlanNav() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Stack.Navigator id="Plan Meal">
      <Stack.Screen name="Event List" options={{ headerShown: false }}>
        {isLoggedIn ? () => <EventList /> : () => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="New Event" options={{ headerShown: false }}>
        {isLoggedIn ? () => <NewEvent /> : () => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="In-Progress Event" options={{ headerShown: false }}>
        {isLoggedIn ? () => <InProgressEvent /> : () => <LoginScreen />}
      </Stack.Screen>
      <Stack.Screen name="Send Email" options={{ headerShown: false }}>
        {isLoggedIn ? () => <SendEmail /> : () => <LoginScreen />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
