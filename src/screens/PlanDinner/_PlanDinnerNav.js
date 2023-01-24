import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PlanDinner from "./PlanDinner";

const Stack = createNativeStackNavigator();
export default function RecipePage(props) {
  return (
    <Stack.Navigator id="Plan Nav">
      <Stack.Screen name="Plan Dinner">
        {(props) => <PlanDinner {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Event List">
        {(props) => <EventList {...props} />}
      </Stack.Screen>
      <Stack.Screen name="New Event">
        {(props) => <NewEvent {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Past Event">
        {(props) => <PastEvent {...props} />}
      </Stack.Screen>
      <Stack.Screen name="In-Progress Event">
        {(props) => <InProgressEvent {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Voting Page">
        {(props) => <VotingPage {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
