import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EventList } from "./EventList";
import { NewEvent } from "./NewEvent";
import { PastEvent } from "./PastEvent";
import { InProgressEvent } from "./InProgressEvent";
import { VotingPage } from "./VotingPage";
import SendEmail from "./SendEmail";

const Stack = createNativeStackNavigator();
export default function PlanNav() {
  return (
    <Stack.Navigator id="Plan Meal">
      <Stack.Screen
        name="Event List"
        component={EventList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="New Event"
        component={NewEvent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Past Event"
        component={PastEvent}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="In-Progress Event"
        component={InProgressEvent}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Voting Page" component={VotingPage} />
      <Stack.Screen
        name="Send Email"
        component={SendEmail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
