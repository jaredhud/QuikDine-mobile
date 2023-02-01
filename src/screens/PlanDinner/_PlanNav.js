import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EventList } from "./EventList";
import { NewEvent } from "./NewEvent";
import { PastEvent } from "./PastEvent";
import { InProgressEvent } from "./InProgressEvent";
import { VotingPage } from "./VotingPage";
import SendEmail from "./SendEmail";

const Stack = createNativeStackNavigator();
export default function PlanNav(props) {
  const { selectedRecipesList } = props;
  return (
    <Stack.Navigator id="Plan Meal">
      <Stack.Screen name="Event List" options={{ headerShown: false }}>
        {(props) => <EventList {...props} />}
      </Stack.Screen>
      <Stack.Screen name="New Event" options={{ headerShown: false }}>
        {(props) => (
          <NewEvent {...props} selectedRecipesList={selectedRecipesList} />
        )}
      </Stack.Screen>
      <Stack.Screen name="Past Event" options={{ headerShown: false }}>
        {(props) => <PastEvent {...props} />}
      </Stack.Screen>
      <Stack.Screen name="In-Progress Event" options={{ headerShown: false }}>
        {(props) => <InProgressEvent {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Voting Page">
        {(props) => <VotingPage {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Send Email" options={{ headerShown: false }}>
        {(props) => <SendEmail {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
